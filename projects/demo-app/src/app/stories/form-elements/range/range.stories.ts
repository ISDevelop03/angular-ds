import { Component } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.stories.html',
})
export class RangeStoryComponent {
  rangeValue: number = 25;

  myValue = 40;
  myRange = [0, 50000];

  onRangeChange(newValue: number) {
    this.rangeValue = newValue;
  }
}
