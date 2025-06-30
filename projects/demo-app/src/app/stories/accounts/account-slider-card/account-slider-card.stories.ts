import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-slider-card',
  templateUrl: './account-slider-card.stories.html',
})
export class AccountSliderCardStoryComponent {
  account = {
    account_number: '011780000012345678901234',
    balance: 45678.9,
    currency: 'EUR',
    type: 'Compte annexe',
    date: '2025-05-01',
    id: 'account-1',
    isSelected: false,
    isDiscrete: false,
  };

  actionsList: DropdownItem[] = [
    {
      label: 'Details',
      icon: 'eye',
      onClick: (item) => alert('Details clicked' + JSON.stringify(item)),
    },
    {
      label: 'Delete',
      icon: 'trash',
      onClick: (item) => alert('Delete clicked' + JSON.stringify(item)),
    },
  ];

  onCardClick(event: any) {
    console.log('Clicked on account', event);
  }
}
