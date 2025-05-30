import { Component, Input } from '@angular/core';

/**
 * Numbers-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-numbers-card.component.html</example-url>
 */
@Component({
  selector: 'ds-numbers-card',
  templateUrl: './numbers-card.component.html',
})
export class NumbersCardComponent {
  @Input() title: string;
  @Input() number: number;
  @Input() className?: string;
}
