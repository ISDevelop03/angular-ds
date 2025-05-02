import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-slider-card',
  templateUrl: './account-slider-card.stories.html',
})
export class AccountSliderCardStoryComponent {
  account = {
    account_number: 'ACC-987654321',
    balance: 45678.9,
    currency: 'EUR',
    type: 'Savings',
    date: '2025-05-01',
    id: 'account-1',
    isSelected: false,
    isDiscrete: false,
  };

  actionsList: DropdownItem[] = [
    { label: 'Details', icon: 'eye', onClick: () => alert('Details clicked') },
    { label: 'Delete', icon: 'trash', onClick: () => alert('Delete clicked') },
  ];

  onCardClick(accountData: any) {
    alert('Clicked on account:\n' + JSON.stringify(accountData, null, 2));
  }
}
