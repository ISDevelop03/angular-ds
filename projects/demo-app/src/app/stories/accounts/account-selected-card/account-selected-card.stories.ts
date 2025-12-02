import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-slider-selected-card-story',
  templateUrl: './account-selected-card.stories.html',
})
export class AccountSelectedCardStoryComponent {
  account = {
    account_number: 'ACC-24681357',
    solde_comptable: 9823479234,
    solde_temps_reel: 20982348,
    currency: 'USD',
    type: 'Savings',
    id: 'account-123',
    isDiscrete: false,
  };
  account2 = {
    account_number: 'ACC-24681357',
    solde_comptable: -923479234,
    solde_temps_reel: 20982348,
    currency: 'USD',
    type: 'Savings',
    id: 'account-123',
    isDiscrete: false,
  };

  actionsList: DropdownItem[] = [
    {
      label: 'Edit',
      icon: 'pen',
      onClick: (item: any) => alert('Edit clicked ' + JSON.stringify(item)),
    },
    {
      label: 'Remove',
      icon: 'trash',
      onClick: (item: any) => alert('Remove clicked' + JSON.stringify(item)),
    },
  ];
}
