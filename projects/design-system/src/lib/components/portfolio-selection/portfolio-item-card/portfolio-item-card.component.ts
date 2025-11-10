import { Component, EventEmitter, Input, Output } from '@angular/core';
import { getFirstTwoLetters } from '../../../utils';

/**
 * Portfolio-item-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-portfolio-item-card.component.html</example-url>
 */
@Component({
  selector: 'ds-portfolio-item-card',
  templateUrl: './portfolio-item-card.component.html',
})
export class PortfolioItemCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() isSelected: boolean = false;
  @Input() className: string = '';

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
  getFirstTwoLetters = getFirstTwoLetters;
}
