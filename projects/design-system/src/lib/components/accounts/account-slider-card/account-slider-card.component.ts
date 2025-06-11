import { Component, Input, OnInit } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

/**
 * Account-slider-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-account-slider-card.component.html</example-url>
 */
@Component({
  selector: 'ds-account-slider-card',
  templateUrl: './account-slider-card.component.html',
})
export class DsAccountSliderCardComponent implements OnInit {
  @Input() isDiscrete: boolean = false;
  @Input() account_number!: string;
  @Input() balance!: number;
  @Input() currency!: string;
  @Input() type!: string;
  @Input() id?: string;
  @Input() date?: string;
  @Input() isSelected: boolean = false;
  @Input() actionsList: ICallToActionIcon[] = [];
  @Input() className?: string = '';

  @Input() onClick: () => void;

  ngOnInit() {
    this.actionsList = this.actionsList.map((action) => ({
      ...action,
      onClick: () =>
        action.onClick &&
        action.onClick({
          id: this.id,
          account_number: this.account_number,
          balance: this.balance,
          currency: this.currency,
          type: this.type,
          date: this.date,
          isSelected: this.isSelected,
          className: this.className,
          actionsList: this.actionsList,
          isDiscrete: this.isDiscrete,
        }),
    }));
  }
}
