// src/lib/steps.component.ts
import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { StepComponent } from './step.component';
import { STEPS_THEME, StepsTheme } from './theme';

@Component({
  selector: 'ds-steps',
  templateUrl: './steps.component.html',
})
export class StepsComponent implements AfterContentInit {
  /** Collect all projected <ds-step> children */
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  /** Theme variant key (e.g. 'default' | 'primary' | 'success') */
  @Input() variant: string = 'default';
  @Input() title: string = '';

  /** Optional data you can bind from an API */
  @Input() apiData: any;

  @Input() cancel: () => void;

  /** Emitted when advancing to a new step */
  @Output() nextStep = new EventEmitter<number>();

  /** Emitted when going back to a previous step */
  @Output() prevStep = new EventEmitter<number>();

  /** Index of the currently visible step */
  currentStepIndex = 0;

  /** Resolved theme for the selected variant */
  theme: StepsTheme = STEPS_THEME[this.variant] || STEPS_THEME.default;

  ngAfterContentInit() {
    // resolve theme variant once steps are loaded
    this.theme = STEPS_THEME[this.variant] || STEPS_THEME.default;
  }

  /** Move to next step if allowed */
  goNext = () => {
    const step = this.steps.toArray()[this.currentStepIndex];
    if (step.shouldGoNext && this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.nextStep.emit(this.currentStepIndex);
    }
  };

  /** Move to previous step if allowed */
  goPrev = () => {
    const step = this.steps.toArray()[this.currentStepIndex];
    if (step.shouldGoPrev && this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.prevStep.emit(this.currentStepIndex);
    }
  };

  handlePrevCancel = () => {
    if (this.currentStepIndex === 0) {
      this.cancel && this.cancel();
    } else {
      this.goPrev();
    }
  };
}
