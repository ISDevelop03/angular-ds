import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.stories.html',
})
export class MessageStoryComponent {
  @Input() label: string = 'message';
  @Input() className?: string = '';
}
