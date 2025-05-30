import { Component, Input } from '@angular/core';
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
  @Input() image: string;
  @Input() title: string;
  @Input() className?: string = '';
  @Input() actionsList: ICallToActionIcon[] = [];
  @Input() onClick: () => void;
}
