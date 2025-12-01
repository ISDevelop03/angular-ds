import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

/**
 * Account-selected-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-account-selected-card.component.html</example-url>
 */
@Component({
  selector: 'ds-account-selected-card',
  templateUrl: './account-selected-card.component.html',
})
export class DsAccountSelectedCardComponent implements OnInit {
  @Input() isDiscrete: boolean = false;
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
