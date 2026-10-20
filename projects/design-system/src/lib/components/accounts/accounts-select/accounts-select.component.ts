import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { theme } from './theme';

export interface Solde {
  value: number;
  currency: string;
  currency_flag: string;
}
export interface SelectItem {
  unavailable?: boolean;
  icon: string;
  value: string;
  accountName: string;
  accountNumber: string;
  soldeComptable?: Solde;
  soldeTempsReel?: Solde;
}
export interface OmittedSelectItem {
  value: string;
  icon?: string;
  unavailable?: boolean;
}

/**
 * Accounts-selectComponent
 *
 * Live demo:
 * <example-url>/demo/ds-accounts-select.component.html</example-url>
 */
@Component({
  selector: 'ds-accounts-select',
  templateUrl: './accounts-select.component.html',
})
export class AccountsSelectComponent implements OnChanges {
  @Input() items: SelectItem[] = [];
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() placeholder: string = 'Sélectionner une option';
  @Input() variant: keyof typeof theme = 'default';
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  @Input() emptyLabel: string = 'Aucune option';
  @Input() multiple: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() className?: string;
  @Input() buttonIcon?: string;
  @Input() value: string | null = null;
  @Input() customOptionsStyles?: { [key: string]: any };
  @Input() autoComplete: boolean = false;
  @Input() showCurrencyFlag: boolean = false;
  @Input() required: boolean = false;
  /**
   * Number of options above which the list is virtualized (only the options
   * visible in the viewport are rendered). Set to `Infinity` to disable.
   */
  @Input() virtualScrollThreshold: number = 50;
  /**
   * Fixed height (px) of an option row while virtualized. Defaults to 65px, or
   * 69px when options display balances. Increase it if your rows are taller.
   */
  @Input() itemSize?: number;
  /** Number of extra rows rendered above and below the viewport. */
  @Input() bufferSize: number = 5;

  @Output() valueChange = new EventEmitter<string | string[]>();

  private static zIndexCounter = 10000;

  @ViewChild('autoCompleteInput') autoCompleteInput?: ElementRef;

  isOpen: boolean = false;
  searchTerm: string = '';
  filteredItems: SelectItem[] = [];
  selectedValue: SelectItem | null = null;
  containerPosition: { [key: string]: any } = {};

  containerStyles = {};

  @ViewChild('triggerButton') triggerButton?: ElementRef;
  @ViewChild('optionsContainer')
  optionsContainer?: ElementRef;

  theme = theme;

  // --- list virtualization state ---
  visibleItems: SelectItem[] = [];
  topPadding = 0;
  bottomPadding = 0;
  private startIndex = 0;
  private endIndex = 0;
  private scrollTop = 0;
  private viewportHeight = 240; // matches `max-h-60` of the options container
  private hasBalances = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.selectedValue =
        this.items.find((option) => option.value === this.value) || null;
    }
    if (changes['items']) {
      this.filteredItems = [].concat(this.items);
      this.hasBalances = this.items.some(
        (item) => !!(item.soldeComptable || item.soldeTempsReel)
      );
      if (this.value) {
        this.selectedValue =
          this.items.find((option) => option.value === this.value) || null;
      }
      this.updateVirtualWindow(true);
    }
    if (changes['virtualScrollThreshold'] || changes['itemSize']) {
      this.updateVirtualWindow(true);
    }
  }

  get isVirtual(): boolean {
    return this.filteredItems.length > this.virtualScrollThreshold;
  }

  get rowHeight(): number {
    return this.itemSize || (this.hasBalances ? 69 : 65);
  }

  trackByValue(index: number, item: SelectItem): string {
    return item.value;
  }

  onOptionsScroll() {
    if (!this.isVirtual || !this.optionsContainer) {
      return;
    }
    this.scrollTop = this.optionsContainer.nativeElement.scrollTop;
    this.updateVirtualWindow();
  }

  /** Recomputes which slice of `filteredItems` should be in the DOM. */
  private updateVirtualWindow(force: boolean = false) {
    const total = this.filteredItems.length;

    if (!this.isVirtual) {
      this.visibleItems = this.filteredItems;
      this.startIndex = 0;
      this.endIndex = total;
      this.topPadding = 0;
      this.bottomPadding = 0;
      return;
    }

    const size = this.rowHeight;
    const first = Math.floor(this.scrollTop / size);
    const visibleCount = Math.ceil(this.viewportHeight / size);
    const start = Math.max(0, first - this.bufferSize);
    const end = Math.min(total, first + visibleCount + this.bufferSize);

    if (!force && start === this.startIndex && end === this.endIndex) {
      return;
    }

    this.startIndex = start;
    this.endIndex = end;
    this.visibleItems = this.filteredItems.slice(start, end);
    this.topPadding = start * size;
    this.bottomPadding = (total - end) * size;
  }

  private resetScroll() {
    this.scrollTop = 0;
    if (this.optionsContainer && this.optionsContainer.nativeElement) {
      this.optionsContainer.nativeElement.scrollTop = 0;
    }
    this.updateVirtualWindow(true);
  }

  /** When opening a virtualized list, bring the selected option into view. */
  private syncVirtualViewport() {
    if (!this.isVirtual || !this.optionsContainer) {
      return;
    }
    const container = this.optionsContainer.nativeElement as HTMLElement;
    this.viewportHeight = container.clientHeight || this.viewportHeight;

    if (this.selectedValue) {
      const index = this.filteredItems.findIndex(
        (item) => item.value === this.selectedValue.value
      );
      if (index >= 0) {
        const size = this.rowHeight;
        container.scrollTop = Math.max(
          0,
          index * size - this.viewportHeight / 2 + size / 2
        );
      }
    }
    this.scrollTop = container.scrollTop;
    this.updateVirtualWindow(true);
  }

  get mergedStyles() {
    return Object.assign(
      {},
      this.containerPosition,
      this.containerStyles,
      this.customOptionsStyles || {}
    );
  }

  toggleDropdown() {
    if (!this.disabled && !this.isLoading) {
      const myZ = ++AccountsSelectComponent.zIndexCounter;

      this.containerStyles = {
        zIndex: `${myZ}`,
      };

      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.scrollTop = 0;
        this.updateVirtualWindow(true);
      }
      setTimeout(() => {
        this.calculatePosition();
        if (this.isOpen) {
          this.syncVirtualViewport();
        }
      }, 0);
    }
  }

  shouldAppear() {
    return this.value !== null;
  }
  calculatePosition() {
    if (
      this.triggerButton &&
      this.triggerButton.nativeElement &&
      this.optionsContainer &&
      this.optionsContainer.nativeElement
    ) {
      const rect =
        this.triggerButton &&
        this.triggerButton.nativeElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      this.containerPosition = {
        top: spaceBelow > spaceAbove ? '100%' : 'auto',
        bottom: spaceBelow > spaceAbove ? 'auto' : '100%',
        left: '0px',
        visibility: 'visible',
        position: 'absolute',
      };
    }
  }

  selectOption(item: SelectItem) {
    this.value = item.value;
    this.isOpen = false;
    this.selectedValue = item;

    this.valueChange.emit(this.value);
  }

  isSelected(item: SelectItem): boolean {
    if (this.multiple && Array.isArray(this.value)) {
      return this.value.includes(item.value);
    }
    return this.value === item.value;
  }

  // // tighten returned type to always be a SelectItem
  get selected(): SelectItem {
    const found = this.items.find((i) => i.value === this.value);
    return (
      (found as SelectItem) || {
        icon: '',
        value: '',
        accountName: this.placeholder,
        accountNumber: '',
        soldeComptable: { value: 0, currency: '', currency_flag: '' },
        soldeTempsReel: { value: 0, currency: '', currency_flag: '' },
      }
    );
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as Node;
    const clickedTrigger =
      this.triggerButton && this.triggerButton.nativeElement.contains(target);
    const clickedOptions =
      this.optionsContainer &&
      this.optionsContainer.nativeElement.contains(target);

    // if you clicked *neither* on the button nor inside the dropdown, close it
    if (!clickedTrigger && !clickedOptions) {
      this.isOpen = false;
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscClose(event: KeyboardEvent) {
    this.isOpen = false;
  }

  onAutoCompleteInput(event: Event) {
    this.isOpen = true;
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    const term = this.searchTerm.toLowerCase();
    this.filteredItems = this.items.filter((item) =>
      item.accountName.toLowerCase().includes(term)
    );
    this.resetScroll();
  }

  clearSearch() {
    this.searchTerm = '';
    this.filteredItems = [].concat(this.items);
    this.resetScroll();
    this.selectedValue = null;
    this.value = null;
    this.valueChange.emit(null);
    this.isOpen = true;
    setTimeout(() => this.autoCompleteInput.nativeElement.focus(), 0);
  }
}
