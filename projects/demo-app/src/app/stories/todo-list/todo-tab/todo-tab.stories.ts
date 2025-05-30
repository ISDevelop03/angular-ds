import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-tab',
  templateUrl: './todo-tab.stories.html',
})
export class TodoTabStoryComponent {
  @Input() label: string = 'todo-tab';
  @Input() className?: string = '';

  isOpen: boolean = true;

  onClick() {
    this.isOpen = !this.isOpen;
  }
}
