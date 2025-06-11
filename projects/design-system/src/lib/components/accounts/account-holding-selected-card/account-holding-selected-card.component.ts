import { Component, Input, OnInit } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

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
  @Input() actionsList: ICallToActionIcon[] = [];
  @Input() onClick: () => void;

  ngOnInit() {
    this.actionsList = this.actionsList.map((action) => ({
      ...action,
      onClick: () =>
        action.onClick &&
        action.onClick({
          id: this.id,
          title: this.title,
          image: this.image,
          actionsList: this.actionsList,
          className: this.className,
        }),
    }));
  }
}
