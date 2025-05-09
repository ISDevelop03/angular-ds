import { Component, Input } from '@angular/core';

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
