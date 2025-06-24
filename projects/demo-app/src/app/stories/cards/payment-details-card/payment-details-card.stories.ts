import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-details-card',
  templateUrl: './payment-details-card.stories.html',
})
export class PaymentDetailsCardStoryComponent {
  @Input() className?: string = '';

  isSelected: boolean = false;

  onSelect(event: any) {
    this.isSelected = !this.isSelected;
    console.log('eventevent', event);
    console.log('Selected', this.isSelected);
  }
}
