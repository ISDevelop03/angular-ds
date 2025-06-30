import { Component } from '@angular/core';
import { ICallToActionIcon } from 'projects/design-system/src/lib/components/call-to-action-icons/types';

@Component({
  selector: 'app-account-filial-holding-card',
  templateUrl: './account-filial-holding-card.stories.html',
})
export class AccountFilialHoldingCardStoryComponent {
  accounts = [
    {
      image: 'https://placehold.co/60?text=JESA+Group',
      title: 'JESA Group',
    },
    {
      image: 'https://placehold.co/60?text=Test+Company',
      title: 'Test Company',
    },
    {
      image: 'https://placehold.co/60?text=Another+Company',
      title: 'Another Company',
    },
    {
      image: 'https://placehold.co/60?text=Example+Corp',
      title: 'Example Corp',
    },
    {
      image: 'https://placehold.co/60?text=Sample+Holdings',
      title: 'Sample Holdings',
    },
  ];

  actionsList: ICallToActionIcon[] = [
    {
      icon: 'info-circle',
      onClick: (item) => alert('Info clicked ' + JSON.stringify(item)),
    },
    {
      icon: 'more-1',
      onClick: (item) => alert('More clicked' + JSON.stringify(item)),
    },
  ];
}
