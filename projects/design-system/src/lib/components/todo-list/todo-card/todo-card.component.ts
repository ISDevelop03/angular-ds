import { Component, Input } from '@angular/core';
/**
 * TodoCardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-todo-card.component.html</example-url>
 */
@Component({
  selector: 'ds-todo-card',
  templateUrl: './todo-card.component.html',
})
export class TodoCardComponent {
  @Input() title: string = '';
  @Input() description?: string = '';
  @Input() date: string = '';
  @Input() badgeText: string = '';
  @Input() badgeVariant: string = '';
  @Input() icon?: string = '';
  @Input() isRead: boolean = false;
  @Input() className?: string = '';
}
