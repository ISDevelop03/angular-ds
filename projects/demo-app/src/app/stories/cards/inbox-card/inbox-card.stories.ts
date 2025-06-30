import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox-card',
  templateUrl: './inbox-card.stories.html',
})
export class InboxCardStoryComponent {
  data = {
    title: 'Urgent Notice',
    content: 'This inbox is unread.',
    date: '5 mins ago',
    isRead: false,
  };

  handleInboxClick(payload: any) {
    console.log('Notification clicked', payload);
  }
}
