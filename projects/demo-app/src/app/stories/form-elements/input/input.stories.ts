import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.stories.html',
})
export class InputStoryComponent {
  amount = 0;
  textValue: string = '';
  numberValue: number = 0;
  disabledValue: string = 'Disabled';
  errorValue: string = '';

  handleInputChange(event: any) {
    this.textValue = event.target.value;
  }

  handleNumberChange(event: any) {
    this.numberValue = event.target.value;
  }

  handleErrorChange(event: any) {
    this.errorValue = event.target.value;
  }

  onClear() {
    this.textValue = '';
    this.numberValue = 0;
    this.disabledValue = 'Disabled';
    this.errorValue = '';
  }

  onClick(event: any) {
    console.log('Input clicked', event.target.value);
  }
}
