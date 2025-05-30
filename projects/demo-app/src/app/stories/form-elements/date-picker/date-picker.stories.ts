import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.stories.html',
})
export class DatePickerStoryComponent {
  singleDate: Date = new Date();
  rangeStart: Date | null = null;
  rangeEnd: Date | null = null;
}
