import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.stories.html',
})
export class SkeletonStoryComponent {
  @Input() label: string = 'skeleton';
  @Input() className?: string = '';
}
