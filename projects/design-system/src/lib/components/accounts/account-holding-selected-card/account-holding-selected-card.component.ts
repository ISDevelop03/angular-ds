import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';
import { getFirstTwoLetters } from '../../../utils';

/**
 * Account-holding-selected-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-account-holding-selected-card.component.html</example-url>
 */
@Component({
  selector: 'ds-account-holding-selected-card',
  templateUrl: './account-holding-selected-card.component.html',
})
export class AccountHoldingSelectedCardComponent implements OnInit {
  @Input() id: any;
  @Input() image: string;
  @Input() title: string;
  @Input() className?: string = '';
  @Input() data?: any;
  @Input() actionsList: ICallToActionIcon[] = [];

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

  getFirstTwoLetters = getFirstTwoLetters;
}
