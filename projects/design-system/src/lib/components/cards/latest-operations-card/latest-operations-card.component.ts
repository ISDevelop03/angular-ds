import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-latest-operations-card',
  templateUrl: './latest-operations-card.component.html',
})
export class LatestOperationsCardComponent {
  @Input() isDiscrete: boolean = false;
  @Input() title!: string;
  @Input() value!: string;
  @Input() date_operation!: string;
  @Input() date_value!: string;
}
