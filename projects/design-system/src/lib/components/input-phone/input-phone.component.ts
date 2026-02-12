import { Component, EventEmitter, Input, Output } from '@angular/core';
import { theme } from './theme';
/**
 * InputPhoneComponent
 *
 * Live demo:
 * <example-url>/demo/ds-input-phone.component.html</example-url>
 */
@Component({
  selector: 'ds-input-phone',
  templateUrl: './input-phone.component.html',
})
export class InputPhoneComponent {
  @Input() className?: string = '';
  @Input() label?: string;
  @Input() tooltip?: string;
  @Input() required?: boolean;
  @Input() hasError?: boolean;
  @Input() errorMessage?: string;
  @Input() description?: string;
  @Input() countriesPrefixes: Record<string, string>[] = [];
  @Input() placeholder: string = 'Enter your phone number';
  @Input() selectedCountryPrefix: string = "+212";
  @Input() value: string | null = null;
  @Output() onChange = new EventEmitter<string | null>();


  theme = theme.default;

  phoneNumber: string | null = null;
  onCountryChange(event: string) {
    this.selectedCountryPrefix = event;
  }

  onPhoneNumberChange(event: Event) {
    this.phoneNumber = (event.target as HTMLInputElement).value;
    this.onChange.emit(this.selectedCountryPrefix.concat(this.phoneNumber));
  }
}
