import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.stories.html',
})
export class TooltipStoryComponent {
  @Input() label: string = 'tooltip';
  @Input() className?: string = '';
}
