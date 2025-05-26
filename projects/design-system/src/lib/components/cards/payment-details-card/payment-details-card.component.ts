import { Component, Input } from '@angular/core';
import { formatMoney } from '../../../../utils';

@Component({
  selector: 'ds-payment-details-card',
  templateUrl: './payment-details-card.component.html',
})
export class PaymentDetailsCardComponent {
  @Input() title: string = '';
  @Input() titleHeader: string = '';
  @Input() date?: string = '';
  @Input() price?: number = 0;
  @Input() currency?: string = '';
  @Input() isSelected?: boolean = false;
  @Input() onSelect?: () => void;
  @Input() useCheckbox?: boolean = false;
  @Input() className?: string = '';

  get formattedPrice() {
    return formatMoney(this.price, false, false, false);
  }
}
