import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Notification-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-notification-card.component.html</example-url>
 */
@Component({
  selector: 'ds-notification-card',
  templateUrl: './notification-card.component.html',
})
export class NotificationCardComponent {
  @Input() id?: string;
  @Input() title?: string;
  @Input() content?: string;
  @Input() isRead: boolean = false;
  @Input() link?: string;
  @Input() time?: string;

  @Input() data?: any;

  @Output() onClick = new EventEmitter<any>();

  handleClick(event: Event) {
    this.onClick.emit({ data: this.data, event: event });
  }
}
