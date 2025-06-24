import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.stories.html',
})
export class PaymentCardStoryComponent {
  title: string = 'Inwi : Paiement de factures';
  image: string = 'https://placehold.co/100';
  price: number = 123454;
  currency: string = 'MAD';
  isSelected: boolean = false;

  onSelect(event) {
    this.isSelected = !this.isSelected;
    console.log('Selected', this.isSelected, event);
  }
  onDelete(event) {
    console.log('Deleted', event);
  }
}
