import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.stories.html',
})
export class InputStoryComponent {
  textValue: string = '';
  numberValue: number = 0;
  disabledValue: string = 'Disabled';
  errorValue: string = '';

  handleInputChange(value: any) {
    this.textValue = value;
  }

  handleNumberChange(value: any) {
    this.numberValue = value;
  }

  handleErrorChange(value: any) {
    this.errorValue = value;
  }
}
