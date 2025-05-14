import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DropdownItem } from '../../dropdown/types';

@Component({
  selector: 'ds-account-selected-card',
  templateUrl: './account-selected-card.component.html',
})
export class DsAccountSelectedCardComponent {
  @Input() isDiscrete: boolean = false;
  @Input() account_number!: string;
  @Input() balance!: number;
  @Input() currency!: string;
  @Input() type!: string;
  @Input() id?: string;
  @Input() date?: string;
  @Input() actionsList: DropdownItem[] = [];
  @Input() solde_comptable?: number;
  @Input() solde_temps_reel?: number;
  @Input() className?: string = '';
}
