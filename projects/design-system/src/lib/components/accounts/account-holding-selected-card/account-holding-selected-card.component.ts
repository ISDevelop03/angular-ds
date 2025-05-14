import { Component, Input } from '@angular/core';
import { DropdownItem } from '../../dropdown/types';

@Component({
  selector: 'ds-account-holding-selected-card',
  templateUrl: './account-holding-selected-card.component.html',
})
export class AccountHoldingSelectedCardComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() className?: string = '';
  @Input() actionsList: DropdownItem[] = [];
}
