import { Component } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.stories.html',
})
export class RadioStoryComponent {
  selectedValue: string = '';

  onRadioChange(value: string) {
    this.selectedValue = value;
  }
}
