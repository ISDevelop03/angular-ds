import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TableVariant, TableThemes } from './theme';

export interface ColumnDef {
  header: string;
  accessor: string;
  sortable?: boolean;
  cellTemplate?: TemplateRef<any>;
}

@Component({
  selector: 'ds-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnChanges {
  @Input() data: any[] = [];
  @Input() columns: ColumnDef[] = [];
  @Input() variant: TableVariant = 'default';
  @Input() remoteSort = false;
  @Input() selectionEnabled = false;

  @Output() sortChange = new EventEmitter<{
    accessor: string | null;
    direction?: 'asc' | 'desc';
  }>();

  /** NEW: emit when selection changes */
  @Output() selectionChange = new EventEmitter<any[]>();

  /** track selected rows */
  selectedRows = new Set<any>();

  /** working copy of your rows */
  displayData: any[] = [];
  private originalData: any[] = [];

  /** sort state */
  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  theme = TableThemes;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && changes.data.currentValue) {
      this.originalData = this.data.concat();
      this.displayData = this.data.concat();
      this.sortColumn = null;
      /** clear selection whenever the data changes */
      this.selectedRows.clear();
      this.emitSelection();
    }
  }

  onSort(col: ColumnDef) {
    // ... existing sort logic (unchanged)
  }

  /** NEW: whether every row is selected */
  get isAllSelected(): boolean {
    return (
      this.displayData.length > 0 &&
      this.displayData.every((row) => this.selectedRows.has(row))
    );
  }

  /** NEW: if some but not all are selected */
  get isIndeterminate(): boolean {
    const n = this.selectedRows.size;
    return n > 0 && n < this.displayData.length;
  }

  /** NEW: toggle the “select all” checkbox */
  toggleSelectAll(checked: boolean) {
    if (checked) {
      this.displayData.forEach((row) => this.selectedRows.add(row));
    } else {
      this.selectedRows.clear();
    }
    this.emitSelection();
  }

  /** NEW: toggle a single row */
  toggleRow(row: any, checked: boolean) {
    if (checked) {
      this.selectedRows.add(row);
    } else {
      this.selectedRows.delete(row);
    }
    this.emitSelection();
  }

  /** NEW: helper for template binding */
  isSelected(row: any): boolean {
    return this.selectedRows.has(row);
  }

  private emitSelection() {
    this.selectionChange.emit(Array.from(this.selectedRows));
  }

  /** helper for header checkbox click */
  headerCheckboxChange = () => {
    this.toggleSelectAll(!this.isAllSelected);
  };

  getRowCheckboxChange(row: any): () => void {
    return () => this.toggleRow(row, !this.isSelected(row));
  }
}
