import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

export type GaugeColor = 'green' | 'orange' | 'red' | 'olive';

const PALETTE: { [key: string]: string } = {
  green: 'rgb(var(--color-success-600))',
  orange: 'rgb(var(--color-amber-600))',
  red: 'rgb(var(--color-red-500))',
  olive: 'rgb(var(--color-crame-200))',
};

const PCT_BY_COLOR: { [key: string]: number } = {
  green: 0.35,
  orange: 0.6,
  red: 0.85,
  olive: 0.5,
};

/**
 * PlafondCardComponent — carte plafond (titre, jauge, plafonds contractuel/commercial)
 *
 * Live demo:
 * <example-url>/demo/ds-plafond-card.component.html</example-url>
 */
@Component({
  selector: 'ds-plafond-card',
  templateUrl: './plafond-card.component.html',
})
export class PlafondCardComponent implements OnInit, OnChanges {
  @Input() title = '';
  @Input() editable = false;
  @Input() color: GaugeColor = 'green';
  @Input() consumed = '';
  @Input() max = '';
  /** Fill ratio 0–1. When omitted, derived from `color` for backward compat. */
  @Input() percent: number | null = null;
  @Input() label = 'Consommé';
  @Input() minLabel = '0 MAD';
  @Input() contractuel = '';
  @Input() commercial = '';
  @Input() note = '';
  @Input() className = '';

  @Output() onEdit = new EventEmitter<void>();

  bgPath = '';
  fgPath = '';
  stroke = PALETTE['green'];

  ngOnInit() {
    this.rebuild();
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.rebuild();
  }

  get upperTitle(): string {
    return this.title ? this.title.toUpperCase() : '';
  }

  requestEdit() {
    this.onEdit.emit();
  }

  private rebuild() {
    let p = 0.35;
    if (this.percent != null && !isNaN(Number(this.percent))) {
      p = Math.min(1, Math.max(0, Number(this.percent)));
    } else if (PCT_BY_COLOR[this.color] != null) {
      p = PCT_BY_COLOR[this.color];
    }

    this.stroke = PALETTE[this.color] || PALETTE['green'];

    const cx = 92.5;
    const cy = 90;
    const r = 82;
    const start = Math.PI;
    const end = 2 * Math.PI;
    const cur = start + (end - start) * p;

    const pt = (a: number) =>
      cx + r * Math.cos(a) + ',' + (cy + r * Math.sin(a));

    this.bgPath = 'M ' + pt(start) + ' A ' + r + ' ' + r + ' 0 0 1 ' + pt(end);
    this.fgPath = 'M ' + pt(start) + ' A ' + r + ' ' + r + ' 0 0 1 ' + pt(cur);
  }
}
