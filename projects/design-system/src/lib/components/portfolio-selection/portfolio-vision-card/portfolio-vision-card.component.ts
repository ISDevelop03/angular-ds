import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-portfolio-vision-card',
  templateUrl: './portfolio-vision-card.component.html',
})
export class PortfolioVisionCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() isSelected: boolean = false;
  @Input() className: string = '';

  @Input() handleClick: () => void;
}
