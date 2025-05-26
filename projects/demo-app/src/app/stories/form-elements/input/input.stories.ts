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

  handleInputChange(value: any) {
    this.textValue = value;
  }

  handleNumberChange(value: any) {
    this.numberValue = value;
  }

  handleErrorChange(value: any) {
    this.errorValue = value;
  }

  onClear() {
    this.textValue = '';
    this.numberValue = 0;
    this.disabledValue = 'Disabled';
    this.errorValue = '';
  }

  onClick(event: PointerEvent) {
    console.log('Input clicked', event);
  }
}
