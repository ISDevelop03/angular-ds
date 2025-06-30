import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

export interface InvoiceActions {
  label: string;
  icon: string;
  href: string;
  onClick: (data: any) => void;
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
  @Input() id?: any = '';
  @Input() href?: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() className?: string = '';

  @Input() data?: any;

  @Output() onClick = new EventEmitter<any>();

  onClickHandler(event: Event) {
    this.onClick.emit({
      event,
      data: this.data,
    });
  }

  ngOnInit() {
    this.actions = this.actions.map((action) => ({
      ...action,
      onClick: (event: Event) =>
        action.onClick &&
        action.onClick({
          event,
          data: this.data,
        }),
    }));
    this.items = this.items.map((item) => ({
      ...item,
      onClick: (event: Event) =>
        item.onClick &&
        item.onClick({
          event,
          data: this.data,
        }),
    }));
  }
}
