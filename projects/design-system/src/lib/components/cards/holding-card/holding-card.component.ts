import { Component, Input } from '@angular/core';

/**
 * Holding-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-holding-card.component.html</example-url>
 */
@Component({
  selector: 'ds-holding-card',
  templateUrl: './holding-card.component.html',
})
export class DsHoldingCardComponent {
  @Input() title: string = '';
  @Input() href: string = '';
  @Input() className: string = '';
}
