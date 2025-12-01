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
  @Input() isFavorite: boolean = false;
  @Input() account_number!: string;
  @Input() balance!: number;
  @Input() currency!: string;
  @Input() type!: string;
  @Input() id?: string;
  @Input() actionsList: ICallToActionIcon[] = [];
  @Input() solde_comptable?: number;
  @Input() solde_temps_reel?: number;
  @Input() className?: string = '';

  @Input() data?: any;

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
}
