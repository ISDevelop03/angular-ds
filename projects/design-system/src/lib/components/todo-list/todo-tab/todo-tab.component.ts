import { Component, Input } from '@angular/core';
/**
 * TodoTabComponent
 *
 * Live demo:
 * <example-url>/demo/ds-todo-tab.component.html</example-url>
 */
@Component({
  selector: 'ds-todo-tab',
  templateUrl: './todo-tab.component.html',
})
export class TodoTabComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() icon?: string = '';
  @Input() isOpen: boolean = false;
  @Input() onClick: () => void;

  @Input() className?: string = '';
}
