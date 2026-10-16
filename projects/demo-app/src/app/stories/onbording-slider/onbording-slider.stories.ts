import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onbording-slider',
  templateUrl: './onbording-slider.stories.html',
})
export class OnbordingSliderStoryComponent {
  @Input() label: string = 'onbording-slider';
  @Input() className?: string = '';
}
