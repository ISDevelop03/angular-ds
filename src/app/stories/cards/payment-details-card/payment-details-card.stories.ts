import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-details-card',
  templateUrl: './payment-details-card.stories.html',
})
export class PaymentDetailsCardStoryComponent {
  @Input() label: string = 'payment-details-card';
  @Input() className?: string = '';
}
