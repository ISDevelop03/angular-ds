import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Inbox-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-inbox-card.component.html</example-url>
 */
@Component({
  selector: 'ds-inbox-card',
  templateUrl: './inbox-card.component.html',
})
export class InboxCardComponent {
  @Input() id?: string;
  @Input() title?: string;
  @Input() content?: string;
  @Input() date?: string;
  @Input() isRead: boolean = false;
  @Input() link?: string;

  @Input() data?: any;

  @Output() onClick = new EventEmitter<any>();

  handleClick(event: Event) {
    this.onClick.emit({ event: event, data: this.data });
  }
}
