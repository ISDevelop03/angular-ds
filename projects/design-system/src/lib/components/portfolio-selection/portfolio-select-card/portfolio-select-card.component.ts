import { Component, Input } from '@angular/core';

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

  @Input() handleClick: () => void;
}
