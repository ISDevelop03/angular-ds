import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.stories.html',
})
export class CheckboxStoryComponent {
  isCheckedDefault = false;
  isCheckedError = false;
  hasError = true;
  isIndeterminate = false;
  onCheckboxChange() {
    this.isCheckedDefault = !this.isCheckedDefault;
  }

  onErrorCheckboxChange() {
    this.isCheckedError = !this.isCheckedError;
  }
  onIndeterminateCheckboxChange() {
    this.isIndeterminate = !this.isIndeterminate;
  }

  toggleError() {
    this.hasError = !this.hasError;
  }
}
