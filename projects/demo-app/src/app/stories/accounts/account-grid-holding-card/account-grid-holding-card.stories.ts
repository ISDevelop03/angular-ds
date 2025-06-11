import { Component } from '@angular/core';
import { ICallToActionIcon } from 'projects/design-system/src/lib/components/call-to-action-icons/types';

@Component({
  selector: 'app-account-grid-holding-card',
  templateUrl: './account-grid-holding-card.stories.html',
})
export class AccountGridHoldingCardStoryComponent {
  isDiscrete = false;
  accounts = [
    {
      id: '1',
      title: 'Compte courant',
      soldeComptable: 398759348.67,
      soldeReel: -8782732.67,
      accountNumber: 'N°011780000012345678901234',
      currency: 'MAD',
      editLink: '/filial/account/011780000012345678901234/edit',
    },

    {
      id: '1',
      title: 'Compte épargne',
      soldeComptable: 123456789.0,
      soldeReel: -123456789.0,
      accountNumber: 'N°011780000012345678901235',
      currency: 'MAD',
      editLink: '/filial/account/011780000012345678901235/edit',
    },

    {
      id: '1',
      title: 'Compte d’investissement',
      soldeComptable: -987654321.302,
      soldeReel: -6276323.883,
      accountNumber: 'N°011780000012345678901236',
      currency: 'MAD',
      editLink: '/filial/account/011780000012345678901236/edit',
    },
  ];

  copyToClipboard = (accountNumber: number) => {
    console.log('accountNumber', accountNumber);
  };

  actionsList: ICallToActionIcon[] = [
    {
      icon: 'info-circle',
      onClick: (item) => alert('Info clicked ' + JSON.stringify(item)),
    },
    {
      icon: 'more-1',
      dropdownItems: [
        {
          label: 'Edit',
          onClick: (item) => alert('Edit clicked ' + JSON.stringify(item)),
        },
        {
          label: 'Delete',
          onClick: (item) => alert('Delete clicked ' + JSON.stringify(item)),
        },
      ],
    },
  ];
}
