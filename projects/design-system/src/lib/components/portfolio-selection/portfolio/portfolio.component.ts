import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  OnChanges,
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
  @Input() perPage: number = 4;
  @Input() totalItems: number = 0;
  @Input() className = '';

  @Input() currentPage = 1; // ← from parent
  @Input() totalPages = 1; // ← from parent
  // pages: number[] = [];

  /** fire whenever user wants a different page */
  @Output() pageChange = new EventEmitter<number>();
  @Output() clicked = new EventEmitter<Portfolio>();

  displayPortfolio = false;
  selectedPortfolio!: Portfolio;
  holdingPortfolio!: Portfolio;

  constructor(private renderer: Renderer2) {}

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  /** Get paginated portfolios for current page */
  getPaginatedPortfolios(): Portfolio[] {
    const startIndex = (this.currentPage - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;
    return this.portfolios.slice(startIndex, endIndex);
  }

  /** Get start index for display */
  getStartIndex(): number {
    return (this.currentPage - 1) * this.perPage + 1;
  }

  /** Get end index for display */
  getEndIndex(): number {
    const endIndex = this.currentPage * this.perPage;
    return Math.min(endIndex, this.portfolios.length);
  }

  ngOnInit() {
    this.resetState();
    this.calculateTotalPages();
  }

  /** Calculate total pages based on portfolios length and perPage */
  private calculateTotalPages() {
    this.totalPages = Math.ceil(this.portfolios.length / this.perPage);
  }

  /** Handle input changes */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['portfolios'] || changes['perPage']) {
      this.calculateTotalPages();
      // Reset to first page if current page is beyond total pages
      if (this.currentPage > this.totalPages) {
        this.currentPage = 1;
      }
    }
  }

  /** Go to next page if available */
  onNextPage(e: Event) {
    e.preventDefault();
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
      this.currentPage = this.currentPage + 1;
    }
  }

  /** Go to previous page if available */
  onPrevPage(event: Event) {
    event.preventDefault();
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
      this.currentPage = this.currentPage - 1;
    }
  }

  /** Go to specific page */
  onGoToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
      this.currentPage = page;
    }
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
