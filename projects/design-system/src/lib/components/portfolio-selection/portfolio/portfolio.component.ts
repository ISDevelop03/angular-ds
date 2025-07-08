import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

interface Portfolio {
  id: any;
  title: string;
  image: string;
  reference?: string;
}
/**
 * PortfolioComponent
 *
 * Live demo:
 * <example-url>/demo/ds-portfolio.component.html</example-url>
 */
@Component({
  selector: 'ds-portfolio',
  templateUrl: './portfolio.component.html',
  animations: [
    trigger('dropdownAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'scale(0.95)' })
        ),
      ]),
    ]),
  ],
})
export class PortfolioComponent implements OnInit, OnChanges {
  @Input() portfolios: Portfolio[] = [];
  @Input() selected: Portfolio | null = null;
  @Input() holding: Portfolio | null = null;
  @Input() show: boolean = false;
  @Input() showDots: boolean = true;
  @Input() perPage: number = 6;
  @Input() className = '';

  paginatedPortfolios: Portfolio[] = [];
  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];

  @Output() clicked = new EventEmitter<Portfolio>();

  displayPortfolio = false;
  selectedPortfolio!: Portfolio;
  holdingPortfolio!: Portfolio;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.resetState();
    this.initializePagination();
  }

  ngOnChanges(changes: SimpleChanges) {
    // if any of these inputs change, re-initialize
    if (
      changes.portfolios ||
      changes.selected ||
      changes.holding ||
      changes.show
    ) {
      this.resetState();
      this.initializePagination();
    }
  }

  /** Initialize pagination values, placing currentPage on the page containing selected item if provided */
  private initializePagination() {
    this.totalPages = Math.ceil(this.portfolios.length / this.perPage) || 1;
    // build pages array [1, 2, ..., totalPages]
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    if (this.selected) {
      const idx = this.portfolios.findIndex((p) => p.id === this.selected!.id);
      if (idx >= 0) {
        this.currentPage = Math.floor(idx / this.perPage) + 1;
      } else {
        this.currentPage = 1;
      }
    } else {
      this.currentPage = 1;
    }

    this.updatePaginated();
  }

  /** Go to next page if available */
  onNextPage(event: Event) {
    event.preventDefault();
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginated();
    }
  }

  /** Go to previous page if available */
  onPrevPage(event: Event) {
    event.preventDefault();
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginated();
    }
  }

  /** Go to specific page */
  onGoToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginated();
    }
  }

  /** Slice the portfolios array for current page */
  private updatePaginated() {
    const start = (this.currentPage - 1) * this.perPage;
    this.paginatedPortfolios = this.portfolios.slice(
      start,
      start + this.perPage
    );
  }

  private resetState() {
    // pick the right “selected” and “holding”
    this.selectedPortfolio = this.selected || this.portfolios[0]!;
    this.holdingPortfolio = this.holding;
    // set open/closed to whatever `show` was bound as
    this.displayPortfolio = this.show;

    this.setBodyScroll(this.displayPortfolio);
  }

  togglePortfolio() {
    this.displayPortfolio = !this.displayPortfolio;
    this.setBodyScroll(this.displayPortfolio);
  }

  onSelect(portfolio: Portfolio) {
    this.selectedPortfolio = portfolio;
    this.clicked.emit(portfolio);
    this.displayPortfolio = false;
    this.setBodyScroll(false);
  }

  private setBodyScroll(isOpen: boolean) {
    const body = document.body;
    if (isOpen) {
      this.renderer.addClass(body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(body, 'overflow-hidden');
    }
  }
}
