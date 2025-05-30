import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RangeSelectorTheme, RangeVariant } from './theme';

@Component({
  selector: 'ds-range',
  templateUrl: './range.component.html',
})
export class DsRangeComponent {
  @Input() rangeType: 'single' | 'range' = 'single';
  @Input() min = 0;
  @Input() unit: string = '';
  @Input() max = 100;
  @Input() step = 1;

  // single‐thumb
  @Input() value = this.min;
  @Output() valueChange = new EventEmitter<number>();

  // two‐thumb
  @Input() values: [number, number] = [this.min, this.max];
  @Output() valuesChange = new EventEmitter<[number, number]>();

  @Input() variant: RangeVariant = 'default';
  theme = RangeSelectorTheme;

  // for custom dragging
  @ViewChild('track') trackEl!: ElementRef<HTMLDivElement>;
  private dragging: 'min' | 'max' | null = null;

  // track elements
  @ViewChild('singleTrack') singleTrackEl!: ElementRef<HTMLDivElement>;
  private singleDragging = false;

  // Helpers to compute percentages
  get percentRange() {
    const [lo, hi] = this.values;
    const total = this.max - this.min;
    return {
      min: ((lo - this.min) / total) * 100,
      max: ((hi - this.min) / total) * 100,
    };
  }

  // Called on mousedown (pointerdown) on the track
  onRangePointerDown(e: PointerEvent) {
    e.preventDefault();
    if (!this.trackEl) return;

    const { left, width } = this.trackEl.nativeElement.getBoundingClientRect();
    const clickX = Math.min(Math.max(e.clientX - left, 0), width);
    const ratio = clickX / width;
    const clickedValue = this.min + ratio * (this.max - this.min);

    // pick the nearest thumb
    const distLo = Math.abs(clickedValue - this.values[0]);
    const distHi = Math.abs(clickedValue - this.values[1]);
    this.dragging = distLo <= distHi ? 'min' : 'max';

    // immediately set the value at the click spot
    this.setThumbValue(clickedValue);

    // listen for moves and end
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
    window.addEventListener('pointercancel', this.onPointerUp);
  }

  private onPointerMove = (e: PointerEvent) => {
    if (!this.dragging || !this.trackEl) return;
    const { left, width } = this.trackEl.nativeElement.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - left, 0), width);
    const ratio = x / width;
    const raw = this.min + ratio * (this.max - this.min);
    this.setThumbValue(raw);
  };

  private onPointerUp = () => {
    this.dragging = null;
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('pointercancel', this.onPointerUp);
  };

  private setThumbValue(raw: number) {
    // snap to step
    const stepped =
      Math.round((raw - this.min) / this.step) * this.step + this.min;

    let [lo, hi] = this.values;
    if (this.dragging === 'min') {
      lo = Math.min(Math.max(stepped, this.min), hi);
    } else {
      hi = Math.max(Math.min(stepped, this.max), lo);
    }
    this.values = [lo, hi];
    this.valuesChange.emit(this.values);
  }

  // clean up if component is destroyed mid-drag
  ngOnDestroy() {
    this.onPointerUp();
  }

  /** percent position for single thumb */
  get percent(): number {
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  onSingleChange(e: Event) {
    const v = +(e.target as HTMLInputElement).value;
    this.value = v;
    this.valueChange.emit(v);
  }

  onMinChange(e: Event) {
    let v = +(e.target as HTMLInputElement).value;
    if (v > this.values[1]) v = this.values[1];
    this.values = [v, this.values[1]];
    this.valuesChange.emit(this.values);
  }

  onMaxChange(e: Event) {
    let v = +(e.target as HTMLInputElement).value;
    if (v < this.values[0]) v = this.values[0];
    this.values = [this.values[0], v];
    this.valuesChange.emit(this.values);
  }

  // ───── SINGLE POINTER LOGIC ─────

  onSinglePointerDown(e: PointerEvent) {
    e.preventDefault();
    const { left, width } =
      this.singleTrackEl.nativeElement.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - left, 0), width);
    this.setSingleValueFromX(x, width);
    this.singleDragging = true;
    window.addEventListener('pointermove', this.onSinglePointerMove);
    window.addEventListener('pointerup', this.onSinglePointerUp);
  }

  private onSinglePointerMove = (e: PointerEvent) => {
    if (!this.singleDragging) return;
    const { left, width } =
      this.singleTrackEl.nativeElement.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - left, 0), width);
    this.setSingleValueFromX(x, width);
  };

  private onSinglePointerUp = () => {
    this.singleDragging = false;
    window.removeEventListener('pointermove', this.onSinglePointerMove);
    window.removeEventListener('pointerup', this.onSinglePointerUp);
  };

  private setSingleValueFromX(x: number, width: number) {
    const ratio = x / width;
    const raw = this.min + ratio * (this.max - this.min);
    const stepped =
      Math.round((raw - this.min) / this.step) * this.step + this.min;
    const v = this.clamp(stepped);
    this.value = v;
    this.valueChange.emit(v);
  }

  // clamp helper
  private clamp(v: number) {
    return Math.min(Math.max(v, this.min), this.max);
  }
}
