// dropdown.component.ts
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  ChangeDetectorRef,
  HostListener,
  Inject,
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  // … existing imports …
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';
import { DomPortalHost, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
/**
 * DropdownHolderComponent
 *
 * Live demo:
 * <example-url>/demo/ds-dropdown-holder.component.html</example-url>
 */
@Component({
  selector: 'ds-dropdown-holder',
  templateUrl: './dropdown-holder.component.html',
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
export class DropdownHolderComponent implements OnInit, OnDestroy {
  @Input() className = '';
  @Input() containerClassName = '';
  @Input() buttonContent: ElementRef<any>;
  @Output() toggle = new EventEmitter<boolean>();

  @ViewChild('trigger') trigger: ElementRef;
  @ViewChild('menuTpl') menuTpl: TemplateRef<any>;
  @ViewChild('menu') menu: ElementRef;

  isOpen = false;
  menuStyles: { [key: string]: string } = {};
  private portalHost: DomPortalHost;
  private menuPortal: TemplatePortal<any>;

  constructor(
    private cd: ChangeDetectorRef,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {
    // set up a portal host on <body>
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
    this.portalHost.detach(); // clean up
  }

  toggleMenu() {
    if (!this.isOpen) {
      // prepare a fresh portal
      this.menuPortal = new TemplatePortal(this.menuTpl, this.vcr);

      // attach it (renders the <ng-template> into <body>)
      this.portalHost.attach(this.menuPortal);

      this.menuStyles = {
        position: 'fixed',
        visibility: 'hidden',
        top: '0px',
        left: '0px',
        zIndex: `${++DropdownHolderComponent.zIndexCounter}`,
      };

      this.isOpen = true;
      this.toggle.emit(true);
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
    this.toggle.emit(false);
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

  @HostListener('click', ['$event'])
  public stopEvent(event: MouseEvent) {
    event.stopPropagation();
  }

  private static zIndexCounter = 10000;
}
