import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.stories.html',
})
export class NotificationCardStoryComponent {
  notification = {
    id: '1',
    title: 'Order Shipped',
    content: 'Your order has been shipped.',
    time: '2h ago',
    isRead: false,
    link: '#',
  };

  handleNotificationClick() {
    console.log('Notification clicked');
  }
}
