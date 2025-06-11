import { Component, Input, OnInit } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';
/**
 * AccountCardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-account-card.component.html</example-url>
 */
@Component({
  selector: 'ds-account-card',
  templateUrl: './account-card.component.html',
})
export class AccountCardComponent implements OnInit {
  @Input() isDiscrete: boolean = false;
  @Input() account_number!: string;
  @Input() balance!: number;
  @Input() currency!: string;
  @Input() type!: string;
  @Input() id?: string;
  @Input() date?: string;
  @Input() actionsList: ICallToActionIcon[] = [];
  @Input() solde_comptable?: number;
  @Input() solde_temps_reel?: number;
  @Input() className?: string = '';

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
          className: this.className,
          actionsList: this.actionsList,
          solde_comptable: this.solde_comptable,
          solde_temps_reel: this.solde_temps_reel,
          isDiscrete: this.isDiscrete,
        }),
    }));
  }
}
