import { Component } from '@angular/core';
import { CardVariant } from 'projects/design-system/src/lib/components/card-visual/card-visual.component';

interface BankCardOption {
  variant: CardVariant;
  label: string;
  imageSrc: string;
}

@Component({
  selector: 'app-bank-card',
  templateUrl: './bank-card.stories.html',
})
export class BankCardStoryComponent {
  selected: CardVariant = 'business';

  cards: BankCardOption[] = [
    {
      variant: 'business',
      label: 'VISA BUSINESS',
      imageSrc: 'assets/cards/card-business.png',
    },
    {
      variant: 'deposit',
      label: 'GLOBAL DÉPOSIT',
      imageSrc: 'assets/cards/card-deposit.png',
    },
    {
      variant: 'escale',
      label: 'ESCALE PRO',
      imageSrc: 'assets/cards/card-escale.png',
    },
  ];

  onSelect(variant: CardVariant) {
    this.selected = variant;
    console.log('selected', variant);
  }
}
