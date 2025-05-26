import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.stories.html',
})
export class StepsStoryComponent {
  @Input() label: string = 'steps';
  @Input() className?: string = '';

  step1Done = false;
  step2Done = false;
  step3Done = false;
  step4Done = false;

  cancel = () => {
    this.step1Done = false;
    this.step2Done = false;
    this.step3Done = false;
    this.step4Done = false;
    console.log('cancel clicked');
  };
}
