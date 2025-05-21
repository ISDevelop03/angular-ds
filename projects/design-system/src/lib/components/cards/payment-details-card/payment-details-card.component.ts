import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-payment-details-card',
  templateUrl: './payment-details-card.component.html',
})
export class PaymentDetailsCardComponent {
  @Input() className?: string = '';
}
