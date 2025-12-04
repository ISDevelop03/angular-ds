import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
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
  @Input() disabled?: boolean = false;
  @Input() status?: TemplateRef<any>;
  @Input() statusContext?: string = 'green';

  @Input() data?: any;

  @Output() onSelect = new EventEmitter<any>();

  get formattedPrice() {
    return formatMoney(this.price, false, false, false);
  }

  onSelectChange(event: any) {
    this.onSelect.emit({ event: event, data: this.data });
  }
}
