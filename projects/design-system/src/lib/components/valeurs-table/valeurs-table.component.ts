import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

/** One label / value pair. */
export type ValeursField = {
  label: string;
  value: string;
};

/**
 * A column in a row — one or more stacked fields.
 * Single field: `[{ label, value }]`
 * Multi field:  `[{ label, value }, { label, value }, ...]`
 */
export type ValeursColumn = ValeursField[];

/** @deprecated Use ValeursField — kept as alias for older call sites. */
export type ValeursColumnItem = ValeursField;

const MIN_COL = 170;

/**
 * ValeursTableComponent — card rows with columns of stacked label/value pairs
 * and vertical dividers (Mes valeurs Lovable UI).
 *
 * Live demo:
 * <example-url>/demo/ds-valeurs-table.component.html</example-url>
 */
@Component({
  selector: 'ds-valeurs-table',
  templateUrl: './valeurs-table.component.html',
  styleUrls: ['./valeurs-table.component.css'],
})
export class ValeursTableComponent implements OnInit, OnChanges {
  /**
   * Rows of columns. Each column is an array of fields (supports 1+ items
   * stacked vertically in the same column).
   */
  @Input() rows: ValeursColumn[][] = [];
  /** When true, first row gets the selected (red) outline. */
  @Input() highlightFirst = false;
  @Input() className = '';
  @Input() minColWidth = MIN_COL;

  displayRows: ValeursColumn[][] = [];
  trackerStyle: { [key: string]: string } = {};
  gridStyle: { [key: string]: string } = {};

  ngOnInit(): void {
    this.recomputeLayout();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rows'] || changes['minColWidth']) {
      this.recomputeLayout();
    }
  }

  get hasRows(): boolean {
    return !!(this.displayRows && this.displayRows.length);
  }

  /**
   * Accepts either:
   * - grouped columns: ValeursField[][] per row (preferred)
   * - flat fields:     ValeursField[] per row (each field becomes a 1-item column)
   */
  private normalizeRows(rows: any[]): ValeursColumn[][] {
    if (!rows || !rows.length) {
      return [];
    }
    const firstRow = rows[0];
    if (!firstRow || !firstRow.length) {
      return [];
    }
    const firstCell = firstRow[0];
    // Flat shape: cell is { label, value }
    if (firstCell && typeof firstCell.label === 'string') {
      const out: ValeursColumn[][] = [];
      for (let i = 0; i < rows.length; i++) {
        const flat = rows[i] as ValeursField[];
        const cols: ValeursColumn[] = [];
        for (let j = 0; j < flat.length; j++) {
          cols.push([flat[j]]);
        }
        out.push(cols);
      }
      return out;
    }
    // Grouped shape: cell is ValeursField[]
    return rows as ValeursColumn[][];
  }

  private recomputeLayout(): void {
    this.displayRows = this.normalizeRows(this.rows);
    if (!this.displayRows.length || !this.displayRows[0].length) {
      this.trackerStyle = {};
      this.gridStyle = {};
      return;
    }
    const n = this.displayRows[0].length;
    const minW = n * this.minColWidth;
    this.trackerStyle = { 'min-width': minW + 'px' };
    this.gridStyle = {
      'grid-template-columns':
        'repeat(' + n + ', minmax(' + this.minColWidth + 'px, 1fr))',
    };
  }

  isHighlighted(index: number): boolean {
    return this.highlightFirst && index === 0;
  }
}
