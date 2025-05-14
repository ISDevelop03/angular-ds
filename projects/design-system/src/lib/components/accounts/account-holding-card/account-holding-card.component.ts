import { Component, Input } from '@angular/core';
import { DropdownItem } from '../../dropdown/types';

@Component({
  selector: 'ds-account-holding-card',
  templateUrl: './account-holding-card.component.html',
})
export class AccountHoldingCardComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() className?: string = '';
  @Input() actionsList: DropdownItem[] = [];
  @Input() onClick: () => void;
}
