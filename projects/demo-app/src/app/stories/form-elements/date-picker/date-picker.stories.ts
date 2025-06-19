import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.stories.html',
})
export class DatePickerStoryComponent {
  selected = {};

  choosedDateHandler(event: any) {
    this.selected = event;
  }
}
