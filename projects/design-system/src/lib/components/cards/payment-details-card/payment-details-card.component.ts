import { Component, Input, Output, EventEmitter } from '@angular/core';
import { formatMoney } from '../../../utils';

/**
 * Payment-details-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-payment-details-card.component.html</example-url>
 */
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
  @Input() useCheckbox?: boolean = false;
  @Input() className?: string = '';

  @Output() onSelect = new EventEmitter();

  get formattedPrice() {
    return formatMoney(this.price, false, false, false);
  }

  onSelectChange(event: any) {
    const item = {
      title: this.title,
      titleHeader: this.titleHeader,
      date: this.date,
      price: this.price,
      currency: this.currency,
      useCheckbox: this.useCheckbox,
      className: this.className,
    };
    this.onSelect.emit({ event: event, item: item });
  }
}
