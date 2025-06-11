import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-holding-card',
  templateUrl: './account-holding-card.stories.html',
})
export class AccountHoldingCardStoryComponent {
  title = 'Prayon';
  className = '';
  image = 'https://placehold.co/82';
  actionsList: DropdownItem[] = [
    { label: 'Edit', icon: 'pen', onClick: () => alert('Edit clicked') },
    { label: 'Remove', icon: 'trash', onClick: () => alert('Remove clicked') },
  ];
}
