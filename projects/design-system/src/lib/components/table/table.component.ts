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
  expandable?: boolean;
  truncate?: boolean;
  styles?: { [key: string]: string };
  accessor: string;
  sortable?: boolean;
  cellTemplate?: TemplateRef<any>;
}
/**
 * TableComponent
 *
 * Live demo:
 * <example-url>/demo/ds-table.component.html</example-url>
 */
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
  @Input() className?: string;
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

  ngOnInit() {
    this.columns = this.columns.map((col) => ({
      ...col,
      truncate: col.expandable ? true : false, // default to true if expandable
    }));
  }

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

  toggleTruncateData(col: ColumnDef) {
    if (!col.expandable) {
      // if the column is not expandable, do nothing
      return;
    }
    // toggle the expandable state of a row
    col.truncate = !col.truncate;
  }

  // onSort(col: ColumnDef) {
  //   // 1) Update sortColumn & sortDirection
  //   if (this.sortColumn === col.accessor) {
  //     this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  //   } else {
  //     this.sortColumn = col.accessor;
  //     this.sortDirection = 'asc';
  //   }

  //   // Payload for the event/emitter
  //   const payload = {
  //     accessor: this.sortColumn!,
  //     direction: this.sortDirection,
  //   };

  //   if (this.remoteSort) {
  //     // 2a) Server-side sorting: tell the parent to re-fetch
  //     this.sortChange.emit(payload);
  //   } else {
  //     // 2b) Client-side sorting: sort displayData in place
  //     this.displayData.sort((a, b) => {
  //       const aVal = a[this.sortColumn!];
  //       const bVal = b[this.sortColumn!];

  //       // handle null/undefined
  //       if (aVal == null) return 1;
  //       if (bVal == null) return -1;

  //       // if both are numbers
  //       if (typeof aVal === 'number' && typeof bVal === 'number') {
  //         return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
  //       }

  //       // fallback: string compare
  //       const aStr = String(aVal).toLowerCase();
  //       const bStr = String(bVal).toLowerCase();
  //       if (aStr > bStr) return this.sortDirection === 'asc' ? 1 : -1;
  //       if (aStr < bStr) return this.sortDirection === 'asc' ? -1 : 1;
  //       return 0;
  //     });

  //     // emit if you still want to notify parent
  //     this.sortChange.emit(payload);
  //   }
  // }
  onSort(col: ColumnDef) {
    // cycle through: none → asc → desc → none
    if (this.sortColumn === col.accessor) {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else {
        // was 'desc' (or undefined), so clear sorting entirely
        this.sortColumn = null;
        this.sortDirection = undefined;
      }
    } else {
      // brand new column: start with asc
      this.sortColumn = col.accessor;
      this.sortDirection = 'asc';
    }

    const payload = {
      accessor: this.sortColumn,
      direction: this.sortDirection,
    };

    if (this.remoteSort) {
      // let parent re-fetch or handle server-side
      this.sortChange.emit(payload);
      return;
    }

    // client-side: if no sortColumn, restore original order
    if (!this.sortColumn) {
      this.displayData = this.originalData.concat();
      this.sortChange.emit(payload);
      return;
    }

    // otherwise do your in-place sort just as before
    this.displayData.sort((a, b) => {
      const aVal = a[this.sortColumn!];
      const bVal = b[this.sortColumn!];

      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();
      if (aStr > bStr) return this.sortDirection === 'asc' ? 1 : -1;
      if (aStr < bStr) return this.sortDirection === 'asc' ? -1 : 1;
      return 0;
    });

    this.sortChange.emit(payload);
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
