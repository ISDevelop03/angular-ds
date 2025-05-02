import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-slider-selected-card-story',
  templateUrl: './account-selected-card.stories.html',
})
export class AccountSelectedCardStoryComponent {
  account = {
    account_number: 'ACC-24681357',
    balance: 15000,
    solde_comptable: 14000,
    solde_temps_reel: 14800,
    currency: 'USD',
    type: 'Savings',
    id: 'account-123',
    date: '2025-05-02',
    isSelected: false,
    isDiscrete: false,
  };

  actionsList: DropdownItem[] = [
    { label: 'Edit', icon: 'pen', onClick: () => alert('Edit clicked') },
    { label: 'Remove', icon: 'trash', onClick: () => alert('Remove clicked') },
  ];

  toggleSelection() {
    this.account.isSelected = !this.account.isSelected;
  }

  onCardClick(accountData: any) {
    alert('Clicked on account:\n' + JSON.stringify(accountData, null, 2));
  }
}
