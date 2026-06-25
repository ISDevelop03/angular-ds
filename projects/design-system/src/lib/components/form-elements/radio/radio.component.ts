import { Component, Input, Output, EventEmitter } from '@angular/core';
import { radio } from './theme';

/**
 * RadioComponent
 *
 * Live demo:
 * <example-url>/demo/ds-radio.component.html</example-url>
 */
@Component({
  selector: 'ds-radio',
  templateUrl: './radio.component.html',
})
export class DsRadioComponent {
  @Input() variant: keyof typeof radio = 'default';
  @Input() name?: string;
  @Input() value?: string;
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() className?: string;

  @Input() modelValue?: string;
  @Output() modelValueChange = new EventEmitter<string>();

  radio = radio;

  get checked() {
    return this.modelValue === this.value;
  }

  get wrapperClass() {
    return `${radio[this.variant].wrapper} ${this.className || ''}`;
  }

  get radioClass() {
    const variantStyles = radio[this.variant];
    const state = this.disabled ? variantStyles.disabled : variantStyles.enabled;
    return `${variantStyles.base} ${this.checked ? state.checked : state.unchecked} ${this.hasError ? variantStyles.error : ''}`;
  }

  get labelClass() {
    const labelStyles = radio[this.variant].label;
    if (this.disabled) {
      return labelStyles.disabled;
    } else if (this.hasError) {
      return labelStyles.error;
    } else if (this.checked) {
      return labelStyles.checked;
    } else {
      return labelStyles.unchecked;
    }
  }

  onInputChange() {
    if (!this.disabled) {
      this.modelValueChange.emit(this.value || '');
    }
  }
}
