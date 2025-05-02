import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { range } from './theme';

@Component({
  selector: 'ds-range',
  templateUrl: './range.component.html',
})
export class DsRangeComponent implements OnChanges {
  @Input() name?: string;
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() thumb: keyof typeof range.input = 'defaultThumb';
  @Input() value: number = 0;

  @Output() valueChange = new EventEmitter<number>();

  range = range;
  rangeValue: string = '0';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'] || changes['max']) {
      this.updateRangeValue();
    }
  }

  updateRangeValue() {
    this.rangeValue = ((this.value / this.max) * 100).toString();
  }

  onRangeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = parseInt(input.value, 10);
    this.valueChange.emit(newValue);
    this.rangeValue = ((newValue / this.max) * 100).toString();
  }

  get trackStyle() {
    return {
      background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${this.rangeValue}%, #E8F0FF ${this.rangeValue}%, #E8F0FF 100%)`,
      height: '4px',
      width: '100%',
      borderRadius: '5px',
    };
  }
}
