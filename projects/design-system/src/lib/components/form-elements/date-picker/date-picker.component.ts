import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatePickerTheme, DatePickerVariant } from './theme';

@Component({
  selector: 'ds-date-picker',
  templateUrl: './date-picker.component.html',
})
export class DatePickerComponent implements OnInit {
  /** 'single' or 'range' */
  @Input() mode: 'single' | 'range' = 'single';
  @Input() variant: DatePickerVariant = 'default';

  /** single-date binding */
  @Input() selected: Date | null = null;
  @Output() selectedChange = new EventEmitter<Date>();

  /** range binding */
  @Input() rangeStart: Date | null = null;
  @Output() rangeStartChange = new EventEmitter<Date>();
  @Input() rangeEnd: Date | null = null;
  @Output() rangeEndChange = new EventEmitter<Date>();

  theme = DatePickerTheme;

  /** view = 'days' | 'months' | 'years' */
  view: 'days' | 'months' | 'years' = 'days';

  currentMonth!: number;
  currentYear!: number;

  weeks: Date[][] = [];
  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  years: number[] = [];

  prevMonth() {
    this.currentMonth--;
    this.clampMonthYear();
    this.buildCalendar();
  }
  nextMonth() {
    this.currentMonth++;
    this.clampMonthYear();
    this.buildCalendar();
  }

  toggleView() {
    if (this.view === 'days') this.view = 'months';
    else if (this.view === 'months') this.view = 'years';
    else this.view = 'days';
  }

  chooseMonth(idx: number) {
    this.currentMonth = idx;
    this.view = 'days';
    this.buildCalendar();
  }

  chooseYear(y: number) {
    this.currentYear = y;
    this.view = 'months';
  }

  private buildCalendar() {
    this.weeks = [];
    // start on Monday => shift Sunday(0)→6
    const first = new Date(this.currentYear, this.currentMonth, 1);
    const shift = (first.getDay() + 6) % 7;
    const start = new Date(this.currentYear, this.currentMonth, 1 - shift);
    for (let w = 0; w < 6; w++) {
      const week: Date[] = [];
      for (let d = 0; d < 7; d++) {
        week.push(new Date(start));
        start.setDate(start.getDate() + 1);
      }
      this.weeks.push(week);
    }
  }

  isSelected(day: Date) {
    return this.selected && day.toDateString() === this.selected.toDateString();
  }

  inRange(day: Date) {
    if (!this.rangeStart || !this.rangeEnd) return false;
    return day >= this.rangeStart && day <= this.rangeEnd;
  }

  // **years pagination**
  yearPageSize = 100;
  yearPageStart!: number;

  ngOnInit() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();

    // initialize the year‐block so that currentYear lives inside it
    const blockIdx = Math.floor(this.currentYear / this.yearPageSize);
    this.yearPageStart = blockIdx * this.yearPageSize;
    this.buildYears();
    this.buildCalendar();
  }

  private clampMonthYear() {
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
  }

  // Called by < and > in header
  onPrevClick() {
    if (this.view === 'years') {
      this.yearPageStart -= this.yearPageSize;
      this.buildYears();
    } else {
      this.currentMonth--;
      this.clampMonthYear();
      this.buildCalendar();
    }
  }
  onNextClick() {
    if (this.view === 'years') {
      this.yearPageStart += this.yearPageSize;
      this.buildYears();
    } else {
      this.currentMonth++;
      this.clampMonthYear();
      this.buildCalendar();
    }
  }

  private buildYears() {
    this.years = [];
    for (let i = 0; i < this.yearPageSize; i++) {
      this.years.push(this.yearPageStart + i);
    }
  }

  selectDate(day: Date) {
    if (this.view !== 'days' || day.getMonth() !== this.currentMonth) return;
    if (this.mode === 'single') {
      this.selected = day;
      this.selectedChange.emit(day);
    } else {
      if (!this.rangeStart || (this.rangeStart && this.rangeEnd)) {
        this.rangeStart = day;
        this.rangeEnd = null;
      } else {
        if (day < this.rangeStart!) {
          this.rangeEnd = this.rangeStart;
          this.rangeStart = day;
        } else {
          this.rangeEnd = day;
        }
      }
      this.rangeStartChange.emit(this.rangeStart!);
      if (this.rangeEnd) this.rangeEndChange.emit(this.rangeEnd);
    }
  }
}
