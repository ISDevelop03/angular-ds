import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.stories.html',
})
export class NotificationSettingsStoryComponent {
  @Input() label: string = 'notification-settings';
  @Input() className?: string = '';

  onNotificationsChange(enabled: boolean) {
    console.log(enabled);
  }
}
