import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  OnDestroy,
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
export class TableComponent implements OnChanges, OnDestroy {
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

  isOverflowing = false;
  isOnLeft = true;
  isOnRight = false;

  @Output() selectionChange = new EventEmitter<any[]>();

  @ViewChild('tableContainer') tableContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('tableElement') tableElement!: ElementRef<HTMLTableElement>;

  selectedRows = new Set<any>();

  displayData: any[] = [];
  private originalData: any[] = [];

  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';

  theme = TableThemes;

  ngOnInit() {
    this.columns = this.columns.map((col) => ({
      ...col,
      truncate: col.expandable ? true : false,
    }));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data && changes.data.currentValue) {
      this.originalData = this.data.concat();
      this.displayData = this.data.concat();
      this.sortColumn = null;
      this.selectedRows.clear();
      this.emitSelection();
    }
  }

  private resizeListener?: () => void;
  private scrollListener?: () => void;

  ngAfterViewInit() {
    this.checkTableOverflow();
    this.resizeListener = () => this.checkTableOverflow();
    window.addEventListener('resize', this.resizeListener);

    // Add scroll event listener to the container
    if (this.tableContainer) {
      this.scrollListener = () => this.checkTableOverflow();
      this.tableContainer.nativeElement.addEventListener(
        'scroll',
        this.scrollListener
      );
    }
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
    if (this.scrollListener && this.tableContainer) {
      this.tableContainer.nativeElement.removeEventListener(
        'scroll',
        this.scrollListener
      );
    }
  }

  toggleTruncateData(col: ColumnDef) {
    if (!col.expandable) {
      return;
    }
    col.truncate = !col.truncate;
  }

  onSort(col: ColumnDef) {
    if (this.sortColumn === col.accessor) {
      if (this.sortDirection === 'asc') {
        this.sortDirection = 'desc';
      } else {
        this.sortColumn = null;
        this.sortDirection = undefined;
      }
    } else {
      this.sortColumn = col.accessor;
      this.sortDirection = 'asc';
    }

    const payload = {
      accessor: this.sortColumn,
      direction: this.sortDirection,
    };

    if (this.remoteSort) {
      this.sortChange.emit(payload);
      return;
    }

    if (!this.sortColumn) {
      this.displayData = this.originalData.concat();
      this.sortChange.emit(payload);
      return;
    }

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

  get isAllSelected(): boolean {
    return (
      this.displayData.length > 0 &&
      this.displayData.every((row) => this.selectedRows.has(row))
    );
  }

  get isSomeSelected(): boolean {
    return (
      this.selectedRows.size > 0 &&
      this.selectedRows.size < this.displayData.length
    );
  }

  get isIndeterminate(): boolean {
    const n = this.selectedRows.size;
    return n > 0 && n < this.displayData.length;
  }

  toggleSelectAll(checked: boolean) {
    if (checked) {
      this.displayData.forEach((row) => {
        if (row.isSelectable) {
          this.selectedRows.add(row);
        }
      });
    } else {
      this.selectedRows.clear();
      console.log('clear');
    }
    this.emitSelection();
  }

  toggleRow(row: any, checked: boolean) {
    if (checked) {
      this.selectedRows.add(row);
    } else {
      this.selectedRows.delete(row);
    }
    this.emitSelection();
  }

  isSelected(row: any): boolean {
    return this.selectedRows.has(row);
  }

  private emitSelection() {
    this.selectionChange.emit(Array.from(this.selectedRows));
  }

  headerCheckboxChange = () => {
    this.toggleSelectAll(!this.isSomeSelected);
  };

  getRowCheckboxChange(row: any): () => void {
    return () => this.toggleRow(row, !this.isSelected(row));
  }

  getAllLines(text: any, col: ColumnDef): string[] {
    if (text == null) return [''];
    const textStr = String(text);
    if (col.truncate) {
      return textStr.split('\n').slice(0, 1);
    }
    return textStr.split('\n');
  }

  checkTableOverflow() {
    if (!this.tableContainer || !this.tableElement) {
      return;
    }

    const container = this.tableContainer.nativeElement;
    const table = this.tableElement.nativeElement;

    const isOverflowing =
      table.getBoundingClientRect().width >
      container.getBoundingClientRect().width;

    if (isOverflowing) {
      this.isOverflowing = true;
    } else {
      this.isOverflowing = false;
    }

    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (scrollLeft === 0) {
      this.isOnLeft = true;
      this.isOnRight = false;
    } else if (Math.ceil(scrollLeft) >= maxScrollLeft) {
      this.isOnRight = true;
      this.isOnLeft = false;
    }
  }
}
