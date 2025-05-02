import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
