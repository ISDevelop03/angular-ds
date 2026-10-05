import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * NotificationSettingsComponent
 *
 * Live demo:
 * <example-url>/demo/ds-notification-settings.component.html</example-url>
 */
@Component({
  selector: 'ds-notification-settings',
  templateUrl: './notification-settings.component.html',
})
export class NotificationSettingsComponent {
  @Input() className?: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() notificationsEnabled: boolean = false;
  @Input() notifications: string[] = [];

  @Output() notificationsChange = new EventEmitter<boolean>();

  onNotificationsChange(enabled: boolean) {
    this.notificationsEnabled = enabled;
    this.notificationsChange.emit(this.notificationsEnabled);
  }
}
