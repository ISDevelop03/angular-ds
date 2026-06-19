import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flat-tooltip',
  templateUrl: './flat-tooltip.stories.html',
})
export class FlatTooltipStoryComponent {
  @Input() label: string = 'flat-tooltip';
  @Input() className?: string = '';
}
