import { Component, Input } from '@angular/core';
import { formatMoney } from '../../../../utils';

/**
 * Payment-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-payment-card.component.html</example-url>
 */
@Component({
  selector: 'ds-payment-card',
  templateUrl: './payment-card.component.html',
})
export class PaymentCardComponent {
  @Input() title?: string = '';
  @Input() image?: string = '';
  @Input() price?: number = 0;
  @Input() currency?: string = '';
  @Input() isSelected?: boolean = false;
  @Input() onDelete?: () => void;
  @Input() onSelect?: () => void;
  @Input() className?: string = '';

  get formattedPrice() {
    return formatMoney(this.price, false, false, false);
  }
}
