import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formatMoney } from '../../../utils';

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
  @Input() className?: string = '';

  @Output() onDelete = new EventEmitter();

  @Output() onSelect = new EventEmitter();

  get formattedPrice() {
    return formatMoney(this.price, false, false, false);
  }

  onSelectChange(event: any) {
    const item = {
      title: this.title,
      image: this.image,
      currency: this.currency,
      price: this.price,
      isSelected: this.isSelected,
      className: this.className,
    };
    this.onSelect.emit({ event: event, item: item });
  }

  handleDelete(event: Event) {
    const item = {
      title: this.title,
      image: this.image,
      currency: this.currency,
      price: this.price,
      isSelected: this.isSelected,
      className: this.className,
    };
    this.onDelete.emit({ event: event, item: item });
  }
}
