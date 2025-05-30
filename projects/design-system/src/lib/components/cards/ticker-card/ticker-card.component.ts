import { Component, Input } from '@angular/core';

/**
 * Ticker-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-ticker-card.component.html</example-url>
 */
@Component({
  selector: 'ds-ticker-card',
  templateUrl: './ticker-card.component.html',
})
export class TickerCardComponent {
  @Input() title: string;
  @Input() image: string;
  @Input() price: number;
  @Input() className?: string;
}
