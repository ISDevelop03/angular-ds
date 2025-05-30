import { Component, Input } from '@angular/core';
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
export class AccountHoldingSelectedCardComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() className?: string = '';
  @Input() actionsList: ICallToActionIcon[] = [];
}
