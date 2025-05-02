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
export class DsAccountSelectedCardComponent implements OnChanges {
  @Input() isDiscrete: boolean = false;
  @Input() account_number!: string;
  @Input() balance!: number;
  @Input() currency!: string;
  @Input() type!: string;
  @Input() id?: string;
  @Input() date?: string;
  @Input() isSelected: boolean = false;
  @Input() actionsList: DropdownItem[] = [];
  @Input() solde_comptable?: number;
  @Input() solde_temps_reel?: number;
  @Input() className?: string;

  @Output() cardClick = new EventEmitter<any>();

  animate: boolean = false;
  private firstRender: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
    if (this.firstRender) {
      this.firstRender = false;
      return;
    }
    if (changes.isSelected || changes.balance) {
      this.animate = true;
      setTimeout(() => {
        this.animate = false;
      }, 300);
    }
  }

  handleCardClick() {
    this.cardClick.emit({
      id: this.id,
      account_number: this.account_number,
      balance: this.balance,
      currency: this.currency,
      type: this.type,
      isSelected: this.isSelected,
      date: this.date,
    });
  }

  get transitionClass() {
    return this.isSelected && this.animate
      ? 'opacity-0 -translate-x-1'
      : 'opacity-100 translate-x-0';
  }
}
