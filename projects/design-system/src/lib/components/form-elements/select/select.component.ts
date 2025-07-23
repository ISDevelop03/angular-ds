import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  HostListener,
  forwardRef,
  OnDestroy,
} from '@angular/core';
import { theme } from './theme';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsSelectComponent),
      multi: true,
    },
  ],
})
export class DsSelectComponent implements ControlValueAccessor, OnDestroy {
  @Input() items: SelectItem[] = [];
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() placeholder: string = 'Select an option';
  @Input() variant: keyof typeof theme = 'default';
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  @Input() pill: boolean = false;
  @Input() emptyLabel: string = 'No options';
  @Input() multiple: boolean = false;
  @Input() isLoading: boolean = false;
  @Input() className?: string;
  @Input() buttonIcon?: string;
  @Input() value: string | string[] | null = null;
  @Input() customOptionsStyles?: { [key: string]: any };
  @Input() autoComplete?: boolean = false;
  @Input() debounceTime: number = 300; // Default debounce time in milliseconds
  
  @Output() onSearch = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<any>();

  private static zIndexCounter = 10000;
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  isOpen: boolean = false;
  containerPosition: { [key: string]: any } = {};

  containerStyles = {};

  @ViewChild('triggerButton') triggerButton?: ElementRef;
  @ViewChild('optionsContainer')
  optionsContainer?: ElementRef;

  theme = theme;

  // hold the form’s callbacks
  private _onChange: (v: any) => void = () => {};
  private _onTouched: () => void = () => {};

  constructor() {
    // Set up debounced search
    this.searchSubject
      .pipe(
        debounceTime(this.debounceTime),
        takeUntil(this.destroy$)
      )
      .subscribe((searchTerm: string) => {
        this.onSearch.emit(searchTerm);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Method to handle search input with debouncing
  onSearchInput(searchTerm: string) {
    this.searchSubject.next(searchTerm);
  }

  // ----------------------------------------
  // ControlValueAccessor API
  // ----------------------------------------
  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
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
        right: '0px',
        visibility: 'visible',
        position: 'absolute',
      };
    }
  }

  selectOption(event, item: SelectItem) {
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

    // 1) notify Reactive Forms
    this._onChange(this.value);
    // 2) mark “touched”
    this._onTouched();
    this.valueChange.emit({ value: this.value, event });
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
      if (this.isOpen) {
        this._onTouched(); // <— mark “touched” here
      }
      this.isOpen = false;
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscClose(event: KeyboardEvent) {
    if (this.isOpen) {
      this._onTouched(); // <— and here too
    }
    this.isOpen = false;
  }
}
