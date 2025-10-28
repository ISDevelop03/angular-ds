import { Component, Input } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.stories.html',
})
export class AccountCardStoryComponent {
  @Input() label: string = 'account-card';
  @Input() className?: string = '';

  accounts = [
    {
      account_number: 'ACC-24681357',
      balance: 15000,
      solde_comptable: 9823479234,
      solde_temps_reel: 20982348,
      currency: 'USD',
      type: 'Savings',
      id: 'account-123',
      date: '2025-05-02',
      isDiscrete: false,
    },
    {
      account_number: 'ACC-13579246',
      balance: 25000,
      solde_comptable: 1234567890,
      solde_temps_reel: 987654321,
      currency: 'EUR',
      type: 'Checking',
      id: 'account-456',
      date: '2025-05-03',
      isDiscrete: true,
    },
    {
      account_number: 'ACC-11223344',
      balance: 5000,
      solde_comptable: 456789123,
      solde_temps_reel: 123456789,
      currency: 'GBP',
      type: 'Investment',
      id: 'account-789',
      date: '2025-05-04',
      isDiscrete: false,
    },
    {
      account_number: 'ACC-99887766',
      balance: 30000,
      solde_comptable: 789012345,
      solde_temps_reel: 678901234,
      currency: 'JPY',
      type: 'Business',
      id: 'account-101112',
      date: '2025-05-05',
      isDiscrete: true,
    },
    {
      account_number: 'ACC-22334455',
      balance: 12000,
      solde_comptable: 234567890,
      solde_temps_reel: 345678901,
      currency: 'AUD',
      type: 'Personal Loan',
      id: 'account-131415',
      date: '2025-05-06',
      isDiscrete: false,
      isFavorite: true,
    },
  ];

  actionsList: DropdownItem[] = [
    {
      label: 'Edit',
      icon: 'pen',
      onClick: (payload) => alert('Edit clicked' + JSON.stringify(payload)),
    },
    {
      label: 'Remove',
      icon: 'trash',
      onClick: (payload) => alert('Remove clicked' + JSON.stringify(payload)),
    },
  ];
}
