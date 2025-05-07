import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-portfolio-item-card',
  templateUrl: './portfolio-item-card.component.html',
})
export class PortfolioItemCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() isSelected: boolean = false;
  @Input() className: string = '';

  @Input() handleClick: () => void;
}
