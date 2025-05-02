import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-numbers-card',
  templateUrl: './numbers-card.component.html',
})
export class NumbersCardComponent {
  @Input() title: string;
  @Input() number: number;
  @Input() className?: string;
}
