// src/lib/steps.component.ts
import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { StepComponent } from './step.component';
import { SubStepComponent } from './subStep.component';
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
  host: { class: 'grow' },
})
export class StepsComponent implements AfterContentInit, OnChanges {
  /** Index of the currently visible step */
  @Input() currentStepIndex = 0;

  /** Index of the visible sub-step inside the current step */
  @Input() currentSubStepIndex = 0;

  /** Collect all projected <ds-step> children */
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  /** Theme variant key (e.g. 'default' | 'primary' | 'success') */
  @Input() variant: string = 'default';
  @Input() title: string = '';
  @Input() showNavigation: boolean = true;
  @Input() showHeader: boolean = true;

  /** Resolved theme for the selected variant */
  theme: StepsTheme = STEPS_THEME[this.variant] || STEPS_THEME.default;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.variant) {
      this.theme = STEPS_THEME[this.variant] || STEPS_THEME.default;
    }

    if (
      changes.currentStepIndex &&
      !changes.currentStepIndex.firstChange &&
      changes.currentStepIndex.previousValue !==
        changes.currentStepIndex.currentValue &&
      !changes.currentSubStepIndex
    ) {
      const previousIndex = changes.currentStepIndex.previousValue;
      const nextIndex = changes.currentStepIndex.currentValue;
      this.currentSubStepIndex =
        nextIndex < previousIndex
          ? this.lastSubStepIndex(nextIndex)
          : 0;
    }
  }

  ngAfterContentInit() {
    // resolve theme variant once steps are loaded
    this.theme = STEPS_THEME[this.variant] || STEPS_THEME.default;
  }

  /** Last sub-step of a step, or 0 when that step has none */
  private lastSubStepIndex(stepIndex: number): number {
    const steps = this.steps ? this.steps.toArray() : [];
    const step = steps[stepIndex];
    const subSteps = step && step.subSteps ? step.subSteps.toArray() : [];
    return subSteps.length ? subSteps.length - 1 : 0;
  }

  get currentStep(): StepComponent {
    return this.steps && this.steps.length
      ? this.steps.toArray()[this.currentStepIndex]
      : null;
  }

  get activeSubSteps(): SubStepComponent[] {
    const step = this.currentStep;
    return step && step.subSteps ? step.subSteps.toArray() : [];
  }

  get activeSubStep(): SubStepComponent {
    const subSteps = this.activeSubSteps;
    return subSteps.length ? subSteps[this.currentSubStepIndex] : null;
  }

  get displayedTemplate(): TemplateRef<any> {
    const subStep = this.activeSubStep;
    if (subStep && subStep.contentTemplate) {
      return subStep.contentTemplate;
    }
    const step = this.currentStep;
    return step ? step.contentTemplate : null;
  }

  get activeLeftButtons(): StepButton[] {
    const subStep = this.activeSubStep;
    if (subStep && subStep.leftButtons && subStep.leftButtons.length) {
      return subStep.leftButtons;
    }
    const step = this.currentStep;
    return step ? step.leftButtons : [];
  }

  get activeRightButtons(): StepButton[] {
    const subStep = this.activeSubStep;
    if (subStep && subStep.rightButtons && subStep.rightButtons.length) {
      return subStep.rightButtons;
    }
    const step = this.currentStep;
    return step ? step.rightButtons : [];
  }

  get activeShouldGoNext(): boolean {
    const subStep = this.activeSubStep;
    if (subStep) {
      return subStep.shouldGoNext;
    }
    const step = this.currentStep;
    return step ? step.shouldGoNext : false;
  }

  get activeShouldGoPrev(): boolean {
    if (this.activeSubStep && this.currentSubStepIndex > 0) {
      return this.activeSubStep.shouldGoPrev;
    }
    const step = this.currentStep;
    return step ? step.shouldGoPrev : false;
  }

  /** Move to next step if allowed */
  goNext = (event?: Event, button?: StepButton) => {
    if (button.disableHandleStep) {
      button.onClick({ button, event, currentIndex: this.currentStepIndex });
      return;
    }

    const step = this.steps.toArray()[this.currentStepIndex];
    const subSteps = step.subSteps ? step.subSteps.toArray() : [];

    if (subSteps.length && this.currentSubStepIndex < subSteps.length - 1) {
      const subStep = subSteps[this.currentSubStepIndex];
      if (subStep.shouldGoNext) {
        this.currentSubStepIndex++;
        subStep.nextStep.emit({
          button,
          event,
          data: subStep.data,
          currentIndex: this.currentSubStepIndex,
        });
        button.onClick({
          button,
          event,
          data: subStep.data,
          currentIndex: this.currentSubStepIndex,
        });
      }
      return;
    }

    if (
      subSteps.length &&
      !subSteps[this.currentSubStepIndex].shouldGoNext
    ) {
      return;
    }

    if (step.shouldGoNext && this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.currentSubStepIndex = 0;
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
    const subSteps = step.subSteps ? step.subSteps.toArray() : [];

    if (subSteps.length && this.currentSubStepIndex > 0) {
      const subStep = subSteps[this.currentSubStepIndex];
      if (subStep.shouldGoPrev) {
        this.currentSubStepIndex--;
        subStep.prevStep.emit({
          button,
          data: subStep.data,
          event,
          currentIndex: this.currentSubStepIndex,
        });
        button.onClick({
          button,
          event,
          data: subStep.data,
          currentIndex: this.currentSubStepIndex,
        });
      }
      return;
    }

    if (step.shouldGoPrev && this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.currentSubStepIndex = this.lastSubStepIndex(this.currentStepIndex);
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
