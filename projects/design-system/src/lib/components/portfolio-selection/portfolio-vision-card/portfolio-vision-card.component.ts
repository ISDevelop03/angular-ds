import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Portfolio-vision-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-portfolio-vision-card.component.html</example-url>
 */
@Component({
  selector: 'ds-portfolio-vision-card',
  templateUrl: './portfolio-vision-card.component.html',
})
export class PortfolioVisionCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() isSelected: boolean = false;
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
