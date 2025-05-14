import { Component, Input, Output, EventEmitter } from '@angular/core';
import { input } from './theme';

@Component({
  selector: 'ds-input',
  templateUrl: './input.component.html',
})
export class DsInputComponent {
  @Input() label?: string;
  @Input() variant: keyof typeof input = 'default';
  @Input() placeholder?: string;
  @Input() prefix?: string;
  @Input() suffix?: string;
  @Input() type: string = 'text';
  @Input() hasError: boolean = false;
  @Input() errorMessage?: string;
  @Input() description?: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() labelVariant: string = 'text-sm/Medium'; // Just kept for future use
  @Input() labelClassName: string = '';
  @Input() value: any;

  input = input;

  @Output() valueChange = new EventEmitter<any>();

  handleChange(event: any) {
    this.valueChange.emit(event.target.value);
  }

  increment() {
    if (this.disabled || this.type !== 'number') return;
    const step = 1;
    const newValue = (parseFloat(this.value || 0) + step).toFixed(2);
    this.value = parseFloat(newValue);
    this.valueChange.emit(this.value);
  }

  decrement() {
    if (this.disabled || this.type !== 'number') return;
    const step = 1;
    const newValue = (parseFloat(this.value || 0) - step).toFixed(2);
    this.value = parseFloat(newValue);
    this.valueChange.emit(this.value);
  }
}
