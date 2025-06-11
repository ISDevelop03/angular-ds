import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
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
  @Input() className = '';

  displayPortfolio = false;
  selectedPortfolio!: Portfolio;
  holdingPortfolio!: Portfolio;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.resetState();
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
    }
  }

  private resetState() {
    // pick the right “selected” and “holding”
    this.selectedPortfolio = this.selected || this.portfolios[0]!;
    this.holdingPortfolio = this.holding || {
      id: '__holding__',
      title: 'Holding Name',
      image: 'https://placehold.co/35x35?text=Logo',
    };

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
    this.displayPortfolio = false; // close the portfolio selection
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
