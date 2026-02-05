import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.stories.html',
})
export class PaymentCardStoryComponent {
  isSelected: boolean = false;
  data = {
    title: 'Inwi : Paiement de factures',
    image: 'https://placehold.co/800',
    price: 123454,
    currency: 'MAD',
  };

  onSelect(event) {
    this.isSelected = !this.isSelected;
    console.log('Selected', this.isSelected, event);
  }
  onDelete(event) {
    console.log('Deleted', event);
  }
}
