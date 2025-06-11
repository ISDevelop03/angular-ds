import { Component, Input } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

export interface InvoiceActions {
  label: string;
  icon: string;
  href: string;
  action: () => void;
}

/**
 * Invoice-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-invoice-card.component.html</example-url>
 */
@Component({
  selector: 'ds-invoice-card',
  templateUrl: './invoice-card.component.html',
})
export class InvoiceCardComponent {
  @Input() items?: InvoiceActions[] = [];
  @Input() actions?: ICallToActionIcon[] = [];
  @Input() href?: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() onClick: (event: Event) => void;
  @Input() className?: string = '';
}
