import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { paginationVariants } from './theme';
import { PaginationVariants } from './types';

type PageItem = number | '...';

/**
 * PaginationComponent
 *
 * Live demo:
 * <example-url>/demo/ds-pagination.component.html</example-url>
 */
@Component({
  selector: 'ds-pagination',
  templateUrl: './pagination.component.html',
})
export class DsPaginationComponent implements OnChanges {
  @Input() firstItem = 1;
  @Input() totalItems = 0;
  @Input() itemsPerPage: number;
  @Input() currentPage = 1;
  @Input() variant = 'compact';
  @Input() className = '';
  @Input() showPerPage: boolean = false;

  @Output() pageChange = new EventEmitter<number>();
  @Output() perPageChange = new EventEmitter<number>();

  // ← boundary counts
  @Input() boundaryStartCount = 2;
  @Input() boundaryEndCount = 2;
  // ← how many neighbours around current page
  @Input() windowSize = 1;

  @Input() prevLabel = 'Précédent';
  @Input() nextLabel = 'Suivant';
  @Input() perPageLabel = 'Par page';
  @Input() perPageOptions: number[] = [25, 50, 100];
  @Input() maxPageButtons: number = 5;

  theme: PaginationVariants = paginationVariants;
  pages: PageItem[] = [];
  pageCount = 0;

  constructor() {
    this.itemsPerPage = this.perPageOptions[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.totalItems ||
      changes.itemsPerPage ||
      changes.currentPage ||
      changes.variant
    ) {
      this.calculatePages();
    }
  }

  private calculatePages() {
    this.pageCount = Math.max(
      1,
      Math.ceil(this.totalItems / this.itemsPerPage)
    );
    const total = this.pageCount;

    // never request more boundary pages than we actually have
    const startCnt = Math.min(this.boundaryStartCount, total);
    const endCnt = Math.min(this.boundaryEndCount, total);
    const win = this.windowSize;

    // build the three sets, now guaranteed within [1…total]
    const startPages = Array.from({ length: startCnt }, (_, i) => i + 1);
    const endPages = Array.from(
      { length: endCnt },
      (_, i) => total - endCnt + 1 + i
    );

    // sliding window
    const windowStart = Math.max(this.currentPage - win, startCnt + 1);
    const windowEnd = Math.min(this.currentPage + win, total - endCnt);

    const windowPages: number[] = [];
    for (let i = windowStart; i <= windowEnd; i++) {
      windowPages.push(i);
    }

    // merge & inject ellipses
    const all = startPages
      .concat(windowPages, endPages)
      .filter((v, i, arr) => arr.indexOf(v) === i) // dedupe
      .sort((a, b) => a - b);

    const pages: PageItem[] = [all[0]];
    for (let i = 1; i < all.length; i++) {
      const prev = all[i - 1] as number;
      const curr = all[i] as number;
      if (curr === prev + 1) {
        pages.push(curr);
      } else {
        pages.push('...', curr);
      }
    }

    this.pages = pages;
  }

  selectPage(page: number) {
    if (page < 1 || page > this.pageCount || page === this.currentPage) {
      return;
    }
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
    this.calculatePages();
  }

  prev() {
    this.selectPage(this.currentPage - 1);
  }

  next() {
    this.selectPage(this.currentPage + 1);
  }

  changePerPage(count: number) {
    this.itemsPerPage = count;
    this.perPageChange.emit(count);
    this.selectPage(1);
  }
}
