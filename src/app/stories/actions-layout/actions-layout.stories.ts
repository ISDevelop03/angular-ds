import { Component } from '@angular/core';
import { ActionItem } from 'projects/design-system/src/lib/components/actions-layout/theme';

@Component({
  selector: 'app-actions-layout',
  templateUrl: './actions-layout.stories.html',
})
export class ActionsLayoutStoryComponent {
  mockItems: ActionItem[] = [
    {
      iconId: 'eye-slash',
      handler: () => {
        console.log('Eye slash clicked');
      },
    },
    {
      iconId: 'bell-02',
      handler: () => {
        console.log('Notification clicked');
      },
      badge: true,
    },
    {
      iconId: 'message-chat-01',
      handler: () => {
        console.log('Message clicked');
      },
    },
    {
      iconId: 'call-center',
      handler: () => {
        console.log('Call center clicked');
      },
    },
    {
      iconId: 'category',
      handler: () => {
        console.log('Element Plus clicked');
      },
    },
  ];
}
