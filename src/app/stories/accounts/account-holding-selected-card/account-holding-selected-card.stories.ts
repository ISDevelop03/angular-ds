import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-holding-selected-card',
  templateUrl: './account-holding-selected-card.stories.html',
})
export class AccountHoldingSelectedCardStoryComponent {
  title = 'Prayon';
  className = '';
  image = 'https://placehold.co/62';
  actionsList: DropdownItem[] = [
    { label: 'Edit', icon: 'pen', onClick: () => alert('Edit clicked') },
    { label: 'Remove', icon: 'trash', onClick: () => alert('Remove clicked') },
  ];
}
