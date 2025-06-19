import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ds-date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent {
  @Input() type: 'single' | 'range' = 'range';
  @Input() autoApply: boolean = true;
  @Input() linkedCalendars: boolean = true;
  @Input() showDropdowns: boolean = true;
  @Input() alwaysShowCalendars: boolean = false;
  @Input() keepCalendarOpeningWithRange: boolean = false;
  @Input() showRangeLabelOnInput: boolean = false;
  @Input() customRangeDirection: boolean = false;
  @Input() lockStartDate: boolean = false;
  @Input() minDate: any;
  @Input() maxDate: any;
  @Input() dateLimit: any;
  selected: any;

  @Output() choosedDate = new EventEmitter<any>();
  @Output() isCustomDate = new EventEmitter<any>();
  @Output() rangeClicked = new EventEmitter<any>();
  @Output() datesUpdated = new EventEmitter<any>();

  choosedDateHandler(event: any) {
    this.choosedDate.emit(event);
  }

  isCustomDateHandler(value: any) {
    this.isCustomDate.emit(value);
  }
}
