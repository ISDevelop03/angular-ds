import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

interface IField {
  label: string;
  value: string;
  checked?: boolean;
}

interface IEventEmitter<T> {
  event: Event;
  values: T[];
  field: T;
}

/**
 * AutocompleteComponent
 *
 * Live demo:
 * <example-url>/demo/ds-autocomplete.component.html</example-url>
 */
@Component({
  selector: 'ds-autocomplete',
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent implements ControlValueAccessor, OnInit {
  @Input() className = '';
  @Input() placeholder = '';
  @Input() items: IField[] = [];
  @Input() values: IField[] = [];

  @Output() valuesChange = new EventEmitter<IField[]>();

  @Output() onSelect = new EventEmitter<IEventEmitter<IField>>();

  @ViewChild('myInput') inputRef!: ElementRef<HTMLInputElement>;

  // These will be set by Angular when you register the control
  private onChange: (vals: IField[]) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private host: ElementRef) {}

  value = '';
  showDropdown = false;
  filteredItems: IField[] = [];

  ngOnInit() {
    // initialize checked flags
    this.filteredItems = this.items.map((item) => ({
      ...item,
      checked: false,
    }));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      // reset when the source list changes
      this.filteredItems = this.items.map((item) => ({
        ...item,
        checked: this.values.some((v) => v.value === item.value),
      }));

      this._syncCheckedFlags();
    }
    if (changes.values) {
      // keep checked state in sync with selected badges
      this.filteredItems = this.filteredItems.map((item) => ({
        ...item,
        checked: this.values.some((v) => v.value === item.value),
      }));
    }
  }

  //ControlValueAccessor methods
  writeValue(vals: IField[]): void {
    this.values = vals || [];
    this._syncCheckedFlags();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private emitValues() {
    this.valuesChange.emit(this.values);
  }

  onInput(event: Event) {
    this.onTouched();
    const input = (event.target as HTMLInputElement).value;
    this.value = input;
    this.filteredItems = this.items
      .filter((item) => item.label.toLowerCase().includes(input.toLowerCase()))
      .map((item) => ({
        ...item,
        checked: this.values.some((v) => v.value === item.value),
      }));

    this.showDropdown = !!input;
  }

  onSelectItem(event: Event, field: IField) {
    event.preventDefault();
    event.stopPropagation();

    const exists = this.values.find((v) => v.value === field.value);
    if (exists) {
      // remove
      this.values = this.values.filter((v) => v.value !== field.value);
      this._setChecked(field.value, false);
      this.onSelect.emit({ event, values: this.values, field: null });
    } else {
      // add
      this.values.push(field);
      this._setChecked(field.value, true);
      this.onSelect.emit({ event, values: this.values, field });
    }

    this._syncCheckedFlags();
    this._notifyChange();
    this._closeAndRefocus();

    // clear + hide + refocus
    this.value = '';
    this.filteredItems = this.items.map((item) => ({
      ...item,
      checked: this.values.some((v) => v.value === item.value),
    }));
    this.showDropdown = false;
    this.emitValues();
    setTimeout(() => this.inputRef.nativeElement.focus());
  }

  onDeleteBadge(event: Event, field: IField) {
    event.preventDefault();
    event.stopPropagation();
    this.values = this.values.filter((v) => v.value !== field.value);
    this._setChecked(field.value, false);
    setTimeout(() => this.inputRef.nativeElement.focus());
    this.onSelect.emit({ event, values: this.values, field: null });
    this.emitValues();
    this._syncCheckedFlags();
    this._notifyChange();
  }

  /** When user hits backspace on empty input, remove last badge */
  onBackspace(): void {
    // only if the input is empty and there is at least one badge
    if (!this.value && this.values.length) {
      // grab the last field
      const last = this.values[this.values.length - 1];
      // remove it
      this.values = this.values.slice(0, -1);
      // un-check it in the dropdown list
      this._setChecked(last.value, false);
      // emit change (field=null because it's a removal)
      this.onSelect.emit({
        event: null as any,
        values: this.values,
        field: null,
      });
      this.emitValues();
      this._syncCheckedFlags();
      this._notifyChange();
    }
  }

  private _setChecked(val: string, checked: boolean) {
    this.filteredItems = this.filteredItems.map((item) =>
      item.value === val ? { ...item, checked } : item
    );
  }

  // ------------ Internals ---------------

  private _syncCheckedFlags() {
    this.filteredItems = this.items.map((item) => ({
      ...item,
      checked: this.values.some((v) => v.value === item.value),
    }));
  }

  private _notifyChange() {
    this.onChange(this.values);
  }

  private _closeAndRefocus() {
    this.value = '';
    this.showDropdown = false;
    setTimeout(() => this.inputRef.nativeElement.focus());
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    if (!this.host.nativeElement.contains(target)) {
      this.showDropdown = false;
    }
  }
}
