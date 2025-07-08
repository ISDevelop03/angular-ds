import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.stories.html',
})
export class CheckboxStoryComponent {
  isCheckedDefault = false;
  isCheckedError = false;
  hasError = true;

  onCheckboxChange() {
    this.isCheckedDefault = !this.isCheckedDefault;
  }

  onErrorCheckboxChange() {
    this.isCheckedError = !this.isCheckedError;
  }

  toggleError() {
    this.hasError = !this.hasError;
  }
}
