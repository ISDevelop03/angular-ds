import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-filial-holding-card',
  templateUrl: './account-filial-holding-card.stories.html',
})
export class AccountFilialHoldingCardStoryComponent {
  image: string = 'https://placehold.co/60';
  title: string = 'JESA Group';

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
}
