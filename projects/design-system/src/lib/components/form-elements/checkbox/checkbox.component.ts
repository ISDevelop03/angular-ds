import { Component, Input, Output, EventEmitter } from '@angular/core';
import { checkbox } from './theme';

/**
 * CheckboxComponent
 *
 * Live demo:
 * <example-url>/demo/ds-checkbox.component.html</example-url>
 */
@Component({
  selector: 'ds-checkbox',
  templateUrl: './checkbox.component.html',
})
export class DsCheckboxComponent {
  @Input() variant: keyof typeof checkbox = 'default';
  @Input() name?: string;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  @Input() value?: string;
  @Input() label?: string;
  @Input() errorMessage?: string;
  @Input() className?: string;
  @Input() change: () => void = () => {};

  checkbox = checkbox;

  get wrapperClass() {
    return `${checkbox[this.variant].wrapper} ${this.className || ''}`;
  }

  get checkboxClass() {
    const variantStyles = checkbox[this.variant].checkbox;
    if (this.disabled) {
      return `${variantStyles.base} ${
        this.checked
          ? variantStyles.disabled.checked
          : variantStyles.disabled.unchecked
      } ${this.hasError ? variantStyles.error : ''}`;
    } else {
      return `${variantStyles.base} ${
        this.checked
          ? variantStyles.enabled.checked
          : variantStyles.enabled.unchecked
      } ${this.hasError ? variantStyles.error : ''}`;
    }
  }

  get labelClass() {
    const labelStyles = checkbox[this.variant].checkbox.label;
    if (this.disabled) {
      return `${labelStyles.base} ${labelStyles.disabled}`;
    } else if (this.checked) {
      return `${labelStyles.base} ${labelStyles.checked}`;
    } else {
      return `${labelStyles.base}`;
    }
  }
}
