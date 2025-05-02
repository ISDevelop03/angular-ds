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
      iconId: 'notification',
      handler: () => {
        console.log('Notification clicked');
      },
    },
    {
      iconId: 'message',
      handler: () => {
        console.log('Message clicked');
      },
    },
    {
      iconId: 'element-plus',
      handler: () => {
        console.log('Element Plus clicked');
      },
    },
  ];
}
