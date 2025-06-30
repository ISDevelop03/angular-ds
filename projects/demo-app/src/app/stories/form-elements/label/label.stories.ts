import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.stories.html',
})
export class LabelStoryComponent {
  @Input() label: string = 'label';
  @Input() className?: string = '';
}
