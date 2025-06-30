import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

/**
 * Account-holding-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-account-holding-card.component.html</example-url>
 */
@Component({
  selector: 'ds-account-holding-card',
  templateUrl: './account-holding-card.component.html',
})
export class AccountHoldingCardComponent {
  @Input() id: any;
  @Input() image: string;
  @Input() title: string;
  @Input() className?: string = '';
  @Input() actionsList: ICallToActionIcon[] = [];

  @Input() data?: any;

  @Output() onClick = new EventEmitter<any>();

  ngOnInit() {
    this.actionsList = this.actionsList.map((action) => ({
      ...action,
      onClick: (event: any) =>
        action.onClick &&
        action.onClick({
          event: event,
          data: this.data,
        }),
    }));
  }

  handleClick(event: any) {
    this.onClick.emit({
      data: this.data,
      event: event,
    });
  }
}
