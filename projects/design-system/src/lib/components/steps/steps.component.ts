// src/lib/steps.component.ts
import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
} from '@angular/core';
import { StepComponent } from './step.component';
import { STEPS_THEME, StepsTheme } from './theme';

export interface StepButton {
  variant: string;
  content: string;
  disableHandleStep?: boolean;
  onClick: (data: any) => void;
  icon?: string;
  iconRight?: string;
  iconLeft?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  size?: string;
  disabled?: boolean;
  outline?: boolean;
  pill?: boolean;
}
/**
 * StepsComponent
 *
 * Live demo:
 * <example-url>/demo/ds-steps.component.html</example-url>
 */
@Component({
  selector: 'ds-steps',
  templateUrl: './steps.component.html',
})
export class StepsComponent implements AfterContentInit {
  /** Index of the currently visible step */
  @Input() currentStepIndex = 0;

  /** Collect all projected <ds-step> children */
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  /** Theme variant key (e.g. 'default' | 'primary' | 'success') */
  @Input() variant: string = 'default';
  @Input() title: string = '';

  /** Resolved theme for the selected variant */
  theme: StepsTheme = STEPS_THEME[this.variant] || STEPS_THEME.default;

  ngAfterContentInit() {
    // resolve theme variant once steps are loaded
    this.theme = STEPS_THEME[this.variant] || STEPS_THEME.default;
  }

  /** Move to next step if allowed */
  goNext = (event?: Event, button?: StepButton) => {
    if (button.disableHandleStep) {
      button.onClick({ button, event, currentIndex: this.currentStepIndex });
      return;
    }

    const step = this.steps.toArray()[this.currentStepIndex];
    if (step.shouldGoNext && this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      step.nextStep.emit({
        button,
        event,
        data: step.data,
        currentIndex: this.currentStepIndex,
      });
      button.onClick({
        button,
        event,
        data: step.data,
        currentIndex: this.currentStepIndex,
      });
    }
  };

  /** Move to previous step if allowed */
  goPrev = (event?: Event, button?: StepButton) => {
    if (button.disableHandleStep) {
      button.onClick({ button, event, currentIndex: this.currentStepIndex });
      return;
    }

    const step = this.steps.toArray()[this.currentStepIndex];
    if (step.shouldGoPrev && this.currentStepIndex > 0) {
      this.currentStepIndex--;
      step.prevStep.emit({
        button,
        data: step.data,
        event,
        currentIndex: this.currentStepIndex,
      });
    }
    button.onClick({
      button,
      event,
      data: step.data,
      currentIndex: this.currentStepIndex,
    });
  };
}
