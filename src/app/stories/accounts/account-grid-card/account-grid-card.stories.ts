import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-grid-card',
  templateUrl: './account-grid-card.stories.html',
})
export class AccountGridCardStoryComponent {
  isDiscrete: boolean = false;
  soldeComptable: number = 12345.67;
  soldeTempsReel: number = 12000;
  accountNumber: string = 'ACC-1234567890';
  currency: string = 'USD';
  type: string = 'Checking';
  date: string = '2025-04-28';

  actionsList: DropdownItem[] = [
    { label: 'Edit', icon: 'edit', onClick: () => alert('Edit clicked') },
    { label: 'Delete', icon: 'trash', onClick: () => alert('Delete clicked') },
  ];

  editLink: string = 'https://example.com/edit-account';
}
