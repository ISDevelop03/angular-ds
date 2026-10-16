import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onbording-stepper',
  templateUrl: './onbording-stepper.stories.html',
})
export class OnbordingStepperStoryComponent {
  @Input() label: string = 'onbording-stepper';
  @Input() className?: string = '';

  activeIndex = 0;
  stepCount = 3;

  onStepChange(index: number): void {
    this.activeIndex = index;
  }
}
