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
}

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
  @Input() value: string | string[] | null = null;
  @Input() customOptionsStyles?: { [key: string]: any };

  @Output() valueChange = new EventEmitter<string | string[]>();

  isOpen: boolean = false;
  containerPosition: { [key: string]: any } = {};

  @ViewChild('triggerButton') triggerButton?: ElementRef;
  @ViewChild('optionsContainer')
  optionsContainer?: ElementRef;

  theme = theme;

  get mergedStyles() {
    return Object.assign(
      {},
      this.containerPosition,
      this.customOptionsStyles || {}
    );
  }

  toggleDropdown() {
    if (!this.disabled && !this.isLoading) {
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

  get selectedLabel() {
    if (this.multiple && Array.isArray(this.value)) {
      return (
        this.items
          .filter((i) => this.value && this.value.includes(i.value))
          .map((i) => i.label)
          .join(', ') || this.placeholder
      );
    }
    const selected = this.items.find((i) => i.value === this.value);
    return (selected && selected.label) || this.placeholder;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      !(
        this.triggerButton &&
        this.triggerButton.nativeElement.contains(event.target)
      ) &&
      this.optionsContainer &&
      this.optionsContainer.nativeElement.contains(event.target)
    ) {
      this.isOpen = false;
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscClose(event: KeyboardEvent) {
    this.isOpen = false;
  }
}
