import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox-card',
  templateUrl: './inbox-card.stories.html',
})
export class InboxCardStoryComponent {
  handleNotificationClick() {
    console.log('Notification clicked');
  }
}
