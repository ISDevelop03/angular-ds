import { animate, style, transition, trigger } from '@angular/animations';
import { DomPortalHost, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injector,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
/**
 * PriceFilterComponent
 *
 * Live demo:
 * <example-url>/demo/ds-price-filter.component.html</example-url>
 */
@Component({
  selector: 'ds-price-filter',
  templateUrl: './price-filter.component.html',
  animations: [
    trigger('dropdownAnim', [
      // enter: from nothing → visible
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('120ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      // leave: from visible → nothing
      transition(':leave', [
        animate(
          '100ms ease-in',
          style({ opacity: 0, transform: 'scale(0.95)' })
        ),
      ]),
    ]),
  ],
})
export class PriceFilterComponent {
  @Input() className?: string = '';
  @Input() showOptions: boolean = true;
  @Output() onSelect = new EventEmitter<Record<string, any> | number>();

  @ViewChild('trigger') trigger: ElementRef;
  @ViewChild('menuTpl') menuTpl: TemplateRef<any>;
  @ViewChild('menu') menu: ElementRef;

  isOpen = false;
  menuStyles: { [key: string]: string } = {};
  private portalHost: DomPortalHost;
  private menuPortal: TemplatePortal<any>;

  selectedType: 'debit' | 'credit' = 'credit';
  selectedPrice: number = null;
  displayPrice: string = '';
  placeholder: string = null;

  constructor(
    private cd: ChangeDetectorRef,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {
    this.portalHost = new DomPortalHost(
      this.document.body,
      this.cfr,
      this.appRef,
      this.injector
    );
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleOutsideClick, true);
    this.portalHost.detach();
  }

  toggleMenu() {
    if (!this.isOpen) {
      this.menuPortal = new TemplatePortal(this.menuTpl, this.vcr);
      if (this.portalHost.hasAttached()) {
        this.portalHost.detach();
      }
      this.portalHost.attach(this.menuPortal);

      this.menuStyles = {
        position: 'fixed',
        visibility: 'hidden',
        top: '0px',
        left: '0px',
        zIndex: `${++PriceFilterComponent.zIndexCounter}`,
      };

      this.isOpen = true;
      this.cd.detectChanges();

      this.setMenuPosition();
      this.menuStyles.visibility = 'visible';
    } else {
      this.closeMenu();
    }
  }

  private setMenuPosition() {
    const t = this.trigger.nativeElement.getBoundingClientRect();
    const mEl = this.menu.nativeElement as HTMLElement;
    const mW = mEl.offsetWidth,
      mH = mEl.offsetHeight;
    const vw = window.innerWidth,
      vh = window.innerHeight;

    let top = t.bottom;
    if (t.bottom + mH > vh) {
      top = t.top - mH;
    }
    top = Math.max(0, top);

    let left = t.left;
    if (t.left + mW > vw) {
      left = t.right - mW;
    }
    left = Math.max(0, left);

    Object.assign(this.menuStyles, {
      top: `${top}px`,
      left: `${left}px`,
    });
  }

  closeMenu() {
    if (this.portalHost.hasAttached()) {
      this.portalHost.detach();
    }
    this.isOpen = false;
    this.menuStyles = {};
  }

  onItemClick(event: any, cb?: (event: any) => void) {
    if (cb) {
      cb(event);
    }
    this.closeMenu();
  }

  handleOutsideClick = (e: MouseEvent) => {
    const tgt = e.target as Node;
    if (
      this.isOpen &&
      !this.trigger.nativeElement.contains(tgt) &&
      this.menu &&
      !this.menu.nativeElement.contains(tgt)
    ) {
      this.closeMenu();
    }
  };

  formatPrice(value: number | string): string {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return '';
    return num
      .toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(/\./g, ' ');
  }

  onPriceKeydown(event: KeyboardEvent): void {
    const allowedKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'Escape',
      'Enter',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
    ];

    // Allow navigation keys
    if (allowedKeys.includes(event.key)) {
      return;
    }

    // Allow Ctrl/Cmd combinations (copy, paste, select all, etc.)
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    // Allow digits and comma (decimal separator)
    if (/^[0-9,]$/.test(event.key)) {
      return;
    }

    // Block everything else
    event.preventDefault();
  }

  onPriceInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    let rawValue = input.value.replace(/[^\d,]/g, '');
    const parts = rawValue.split(',');
    let integerPart = parts[0].replace(/^0+/, '') || '';
    let decimalPart = parts[1] ? parts[1].slice(0, 2) : '';
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    this.displayPrice =
      decimalPart !== undefined && parts.length > 1
        ? `${integerPart},${decimalPart}`
        : integerPart;
    const numericValue = parseFloat(`${parts[0]}.${decimalPart || ''}`);
    this.selectedPrice = isNaN(numericValue) ? null : numericValue;
    input.value = this.displayPrice;
  }

  clearSelection() {
    this.selectedPrice = null;
    this.displayPrice = '';
    this.placeholder = 'Montant';
  }

  handleSelect() {
    if (this.selectedPrice) {
      this.placeholder = this.formatPrice(this.selectedPrice);
    }
    if (this.showOptions) {
      this.onSelect.emit({
        type: this.selectedType,
        price: this.selectedPrice,
      });
    } else {
      this.onSelect.emit(this.selectedPrice);
    }
    this.closeMenu();
  }

  @HostListener('click', ['$event'])
  public stopEvent(event: MouseEvent) {
    event.stopPropagation();
  }

  private static zIndexCounter = 10000;
}
