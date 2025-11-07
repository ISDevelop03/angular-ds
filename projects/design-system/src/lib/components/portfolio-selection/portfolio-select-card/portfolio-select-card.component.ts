import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Portfolio-select-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-portfolio-select-card.component.html</example-url>
 */
@Component({
  selector: 'ds-portfolio-select-card',
  templateUrl: './portfolio-select-card.component.html',
})
export class PortfolioSelectCardComponent {
  @Input() title: string = '';
  @Input() reference: string = '';
  @Input() image: string = '';
  @Input() isOpen: boolean = false;
  @Input() className: string = '';

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
  getFirstTwoLetters(title: string) {
    const titleWords = title.split(' ');
    return `${titleWords[0][0]}${titleWords[1][0]}`.toUpperCase();
  }
}
