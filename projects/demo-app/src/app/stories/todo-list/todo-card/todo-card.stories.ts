import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.stories.html',
})
export class TodoCardStoryComponent {
  @Input() label: string = 'todo-card';
  @Input() className?: string = '';
}
