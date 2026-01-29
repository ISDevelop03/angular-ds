import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.stories.html',
})
export class IllustrationStoryComponent {
  @Input() label: string = 'illustration';
  @Input() className?: string = '';
}
