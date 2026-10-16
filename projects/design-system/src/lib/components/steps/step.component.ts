// src/lib/step.component.ts
import {
  Component,
  Input,
  ContentChild,
  ContentChildren,
  TemplateRef,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import { StepButton } from './steps.component';
import { SubStepComponent } from './subStep.component';

/**
 * @ignore
 */
@Component({
  selector: 'ds-step',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
})
export class StepComponent {
  @Input() title: string = '';
  @Input() shouldGoNext: boolean = true;
  @Input() shouldGoPrev: boolean = true;
  @Input() data: any;

  @Input() leftButtons: StepButton[] = [];

  @Input() rightButtons: StepButton[] = [];

  /** Emitted when advancing to a new step */
  @Output() nextStep = new EventEmitter<{
    button: StepButton;
    event: any;
    data: any;
    currentIndex: number;
  }>();

  /** Emitted when going back to a previous step */
  @Output() prevStep = new EventEmitter<{
    button: StepButton;
    data: any;
    event: any;
    currentIndex: number;
  }>();

  @ContentChild(TemplateRef) contentTemplate!: TemplateRef<any>;

  /** Nested <ds-sub-step> children projected into this step */
  @ContentChildren(SubStepComponent) subSteps!: QueryList<SubStepComponent>;
}
