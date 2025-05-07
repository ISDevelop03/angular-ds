import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-holding-card',
  templateUrl: './holding-card.component.html',
})
export class DsHoldingCardComponent {
  @Input() title: string = '';
  @Input() href: string = '';
  @Input() className: string = '';
}
