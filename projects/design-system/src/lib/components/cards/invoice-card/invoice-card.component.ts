import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

export interface InvoiceActions {
  label: string;
  icon: string;
  href: string;
  onClick: (data: any) => void;
}

/**
 * Invoice-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-invoice-card.component.html</example-url>
 */
@Component({
  selector: 'ds-invoice-card',
  templateUrl: './invoice-card.component.html',
})
export class InvoiceCardComponent {
  @Input() items?: InvoiceActions[] = [];
  @Input() actions?: ICallToActionIcon[] = [];
  @Input() id?: any = '';
  @Input() href?: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() className?: string = '';

  @Input() data?: any;

  @Output() onClick = new EventEmitter<any>();

  isDropdownOpen = false;
  dropdownOpenUp = false;
  searchInput = ""

  getFiltredValues() {
    if (this.searchInput === "") return this.items
    const filteredItems = this.items.filter((item) => {
      return item.label.toLowerCase().includes(this.searchInput.toLowerCase())
    })
    console.log(filteredItems)
    return filteredItems
  }

  @ViewChild('dropdownTrigger') dropdownTrigger: ElementRef<HTMLElement>;
  @ViewChild('dropdownMenu') dropdownMenu: ElementRef<HTMLElement>;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef
  ) { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      this.isDropdownOpen &&
      this.elementRef.nativeElement &&
      !this.elementRef.nativeElement.contains(event.target as Node)
    ) {
      this.closeDropdown();
    }
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.dropdownOpenUp = false;
      this.cdr.detectChanges();
      setTimeout(() => this.updateDropdownPosition(), 0);
    }
  }

  private updateDropdownPosition() {
    if (!this.dropdownTrigger.nativeElement || !this.dropdownMenu.nativeElement) {
      return;
    }
    const triggerRect = this.dropdownTrigger.nativeElement.getBoundingClientRect();
    const menuRect = this.dropdownMenu.nativeElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - triggerRect.bottom;
    if (spaceBelow < menuRect.height && triggerRect.top >= menuRect.height) {
      this.dropdownOpenUp = true;
      this.cdr.detectChanges();
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  onDropdownItemClick(event: Event, item: InvoiceActions) {
    event.stopPropagation();
    if (item.onClick) {
      item.onClick({ event, data: this.data });
    }
    this.closeDropdown();
  }

  onClickHandler(event: Event) {
    this.onClick.emit({
      event,
      data: this.data,
    });
  }

  ngOnInit() {
    this.actions = this.actions.map((action) => ({
      ...action,
      onClick: (event: Event) =>
        action.onClick &&
        action.onClick({
          event,
          data: this.data,
        }),
    }));
    this.items = this.items.map((item) => ({
      ...item,
      onClick: (event: Event) =>
        item.onClick &&
        item.onClick({
          event,
          data: this.data,
        }),
    }));
  }
}
