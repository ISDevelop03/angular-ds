import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CardVariant } from '../card-visual/card-visual.component';
import { ITab } from '../tabs/tabs.component';

export interface CardItem {
  id: string;
  name: string;
  holder: string;
  numTail: string;
  expiry: string;
  variant: CardVariant;
  status?: 'Actif';
  plafondAchat: string;
  plafondRetrait: string;
  solde: string;
  /** Optional override for card thumbnail */
  imageSrc?: string;
}

/**
 * CreditCardComponent — ligne carte dépliable avec onglets
 *
 * Live demo:
 * <example-url>/demo/ds-credit-card.component.html</example-url>
 */
@Component({
  selector: 'ds-credit-card',
  templateUrl: './credit-card.component.html',
})
export class CreditCardComponent {
  @Input() card: CardItem;
  @Input() expanded = false;
  /** Same shape as ds-tabs `items` — panels are managed by ds-tabs */
  @Input() items: ITab[] = [];
  @Input() selectedIndex = 0;
  @Input() className = '';

  @Output() onToggle = new EventEmitter<CardItem>();
  @Output() onTabChange = new EventEmitter<{
    index: number;
    tab: ITab;
  }>();

  toggle() {
    this.onToggle.emit(this.card);
  }

  onTabSelect(payload: { index: number; tab: ITab }) {
    this.selectedIndex = payload.index;
    this.onTabChange.emit({ index: payload.index, tab: payload.tab });
  }

  showStatusBadge(): boolean {
    if (!this.expanded || !this.card || !this.card.status) {
      return false;
    }
    const tab = this.items[this.selectedIndex];
    return !!(tab && /opposition/i.test(tab.title || ''));
  }
}
