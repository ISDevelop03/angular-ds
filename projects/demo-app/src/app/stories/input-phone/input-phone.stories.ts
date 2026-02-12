import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.stories.html',
})
export class InputPhoneStoryComponent {

  countriesPrefixes: Record<string, string>[] = [
    { value: '+212', label: '+212' },
    { value: '+234', label: '+234' },
    { value: '+234', label: '+234' },
    { value: '+234', label: '+234' },
    { value: '+234', label: '+234' },
  ];
  selectedCountryPrefix: string = '+212';
  label: string = 'input-phone';
  tooltip: string = 'tooltip';
  hasError: boolean = true;
  errorMessage: string = 'error message';
  description: string = 'Please enter your mobile phone number to receive important notifications and account updates.';

  onPhoneNumberChange(event: string | null) {
    console.log(event);
  }
}
