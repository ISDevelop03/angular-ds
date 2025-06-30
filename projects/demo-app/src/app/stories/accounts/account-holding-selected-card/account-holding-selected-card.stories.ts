import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-holding-selected-card',
  templateUrl: './account-holding-selected-card.stories.html',
})
export class AccountHoldingSelectedCardStoryComponent {
  data = {
    title: 'Prayon',
    className: '',
    image: 'https://placehold.co/62',
    actionsList: [
      {
        label: 'Edit',
        icon: 'pen',
        onClick: (item) => alert('Edit clicked' + JSON.stringify(item)),
      },
      {
        label: 'Remove',
        icon: 'trash',
        onClick: (item) => alert('Remove clicked' + JSON.stringify(item)),
      },
    ],
  };

  onClick(payload) {
    console.log('Card clicked', payload);
  }
}
