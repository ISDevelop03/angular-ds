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

export interface SelectItem {
  value: string;
  label: string;
  unavailable?: boolean;
  icon?: string;
  image?: string;
  isAccount?: boolean;
  iconClass?: string;
  imageClass?: string;
}

/**
 * SelectComponent
 *
 * Live demo:
 * <example-url>/demo/ds-select.component.html</example-url>
 */
@Component({
  selector: 'ds-select',
  templateUrl: './select.component.html',
})
export class DsSelectComponent {
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
  @Input() value: string | string[] | null = null;
  @Input() customOptionsStyles?: { [key: string]: any };

  @Output() valueChange = new EventEmitter<string | string[]>();

  private static zIndexCounter = 10000;

  isOpen: boolean = false;
  containerPosition: { [key: string]: any } = {};

  containerStyles = {};

  @ViewChild('triggerButton') triggerButton?: ElementRef;
  @ViewChild('optionsContainer')
  optionsContainer?: ElementRef;

  theme = theme;

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
      const myZ = ++DsSelectComponent.zIndexCounter;

      this.containerStyles = {
        zIndex: `${myZ}`,
      };

      this.isOpen = !this.isOpen;
      setTimeout(() => this.calculatePosition(), 0);
    }
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
    if (item.unavailable) return;

    if (this.multiple) {
      const current = Array.isArray(this.value) ? this.value : [];
      if (current.includes(item.value)) {
        this.value = current.filter((val) => val !== item.value);
      } else {
        this.value = current.concat(item.value);
      }
    } else {
      this.value = item.value;
      this.isOpen = false;
    }

    this.valueChange.emit(this.value);
  }

  isSelected(item: SelectItem): boolean {
    if (this.multiple && Array.isArray(this.value)) {
      return this.value.includes(item.value);
    }
    return this.value === item.value;
  }

  // tighten returned type to always be a SelectItem
  get selected(): SelectItem {
    if (this.multiple && Array.isArray(this.value)) {
      const labels = this.items
        .filter((i) => this.value!.includes(i.value))
        .map((i) => i.label)
        .join(', ');
      return {
        value: '', // satisfy the required field
        label: labels || this.placeholder,
      };
    }

    const found = this.items.find((i) => i.value === this.value);
    return found || { value: '', label: this.placeholder };
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
}
