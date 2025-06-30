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

  @Input() data?: any;

  @Output() onDelete = new EventEmitter<any>();

  @Output() onSelect = new EventEmitter<any>();

  get formattedPrice() {
    return formatMoney(this.price, false, false, false);
  }

  onSelectChange(event: any) {
    this.onSelect.emit({ event: event, data: this.data });
  }

  handleDelete(event: Event) {
    this.onDelete.emit({ event: event, data: this.data });
  }
}
