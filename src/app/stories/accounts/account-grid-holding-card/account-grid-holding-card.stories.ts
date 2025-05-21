import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-grid-holding-card',
  templateUrl: './account-grid-holding-card.stories.html',
})
export class AccountGridHoldingCardStoryComponent {
  isDiscrete: boolean = false;
  title: string = 'Compte courant';
  soldeComptable: number = 398759348.67;
  soldeReel: number = -8782732.67;
  accountNumber: string = 'N°011780000012345678901234';
  currency: string = 'MAD';

  copyToClipboard = (accountNumber: number) => {
    console.log('accountNumber', accountNumber);
  };

  actionsList: DropdownItem[] = [
    {
      label: 'Info',
      icon: 'info-circle',
      onClick: () => alert('Info clicked'),
    },
    {
      label: 'More',
      icon: 'more-1',
      onClick: () => alert('More clicked'),
    },
  ];

  editLink: string = 'https://example.com/edit-account';
}
