import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { theme } from './theme';

// Import all flags from assets
export const CURRENCY_FLAGS: { [key: string]: string } = {
  AED: '/assets/flag/AED.png',
  CAD: '/assets/flag/CAD.png',
  CFA: '/assets/flag/CFA.png',
  CHF: '/assets/flag/CHF.png',
  CNY: 'assets/flag/CNY.png',
  DKK: '/assets/flag/DKK.png',
  EUR: '/assets/flag/EUR.png',
  GBP: 'assets/flag/GBP.png',
  JPY: '/assets/flag/JPY.png',
  KWD: '/assets/flag/KWD.png',
  MAD: 'assets/flag/MAD.png',
  NOK: '/assets/flag/NOK.png',
  QAR: 'assets/flag/QAR.png',
  SAR: '/assets/flag/SAR.png',
  SEK: '/assets/flag/SEK.png',
  USD: '/assets/flag/USD.png',
  XOF: '/assets/flag/XOF.jpg',
};

export interface Solde{
  type: 'solde_comptable' | 'solde_temps_reel';
  value: number;
  currency: keyof typeof CURRENCY_FLAGS;
}
export interface SelectItem {
  icon: string;
  value: string;
  accountName: string;
  accountNumber: string;
  soldeComptable: Solde;
  soldeTempsReel: Solde;
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
export class AccountsSelectComponent {
  @Input() items: SelectItem[] = [];
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() placeholder: string = 'Select an option';
  @Input() variant: keyof typeof theme = 'default';
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  @Input() emptyLabel: string = 'No options';
  @Input() multiple: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() className?: string;
  @Input() buttonIcon?: string;
  @Input() value: string | null = null;
  @Input() customOptionsStyles?: { [key: string]: any };

  @Output() valueChange = new EventEmitter<string | string[]>();

  private static zIndexCounter = 10000;

  isOpen: boolean = false;
  selectedValue: SelectItem | null = null;
  containerPosition: { [key: string]: any } = {};

  containerStyles = {};

  @ViewChild('triggerButton') triggerButton?: ElementRef;
  @ViewChild('optionsContainer')
  optionsContainer?: ElementRef;

  theme = theme;
  currencyFlags = CURRENCY_FLAGS;

  constructor() {
    // Debug: Check what value is on first render
    console.log('Initial value:', this.value, 'Type:', typeof this.value);
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
      setTimeout(() => this.calculatePosition(), 0);
    }
  }

  shouldAppear(){
    return this.value !== null
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
    console.log(item)
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
    console.log(found)
    return (
      (found as SelectItem) || { 
        icon: '',
        value: '', 
        accountName: this.placeholder, 
        accountNumber: '', 
        soldeComptable: { type: 'solde_comptable', value: 0, currency: '' }, 
        soldeTempsReel: { type: 'solde_temps_reel', value: 0, currency: '' } 
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

  /**
   * Get flag image path for a currency code
   * @param currency - The currency code (e.g., 'USD', 'EUR')
   * @returns The path to the flag image or empty string if not found
   */
  getFlagPath(currency: string): string {
    return this.currencyFlags[currency] || '';
  }
}
