import { Component, Input } from '@angular/core';

export interface InvoiceActions {
  label: string;
  icon: string;
  href: string;
  action: () => void;
}

@Component({
  selector: 'ds-invoice-card',
  templateUrl: './invoice-card.component.html',
})
export class InvoiceCardComponent {
  @Input() actions?: InvoiceActions[] = [];
  @Input() href?: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() onClick: (event: Event) => void;
  @Input() className?: string = '';
}
