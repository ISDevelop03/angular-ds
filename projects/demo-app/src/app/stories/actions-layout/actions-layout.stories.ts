import { Component } from '@angular/core';
import { ActionItem } from 'projects/design-system/src/lib/components/actions-layout/theme';

@Component({
  selector: 'app-actions-layout',
  templateUrl: './actions-layout.stories.html',
})
export class ActionsLayoutStoryComponent {
  mockItems: ActionItem[] = [
    {
      iconId: 'eye-open',
      iconIdFilled: 'eye-closed-filled',
      handler: () => {
        console.log('Eye slash clicked');
      },
      disabled: true,
    },
    {
      iconId: 'bell-2',
      iconIdFilled: 'bell-filled',
      handler: () => {
        console.log('Notification clicked');
      },
      badge: true,
    },
    {
      iconId: 'messagerie-2',
      iconIdFilled: 'messagerie-2-filled',
      handler: () => {
        console.log('Message clicked');
      },
    },
    {
      iconId: 'headset-2',
      iconIdFilled: 'headset-2-filled',
      handler: () => {
        console.log('Call center clicked');
      },
    },
    {
      iconId: 'category-2',
      iconIdFilled: 'category-2-filled',
      handler: () => {
        console.log('Element Plus clicked');
      },
    },
  ];
}
