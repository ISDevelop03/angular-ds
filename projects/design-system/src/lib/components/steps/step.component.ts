// src/lib/step.component.ts
import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { StepButton } from './steps.component';

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

  @Input() leftButtons: StepButton[] = [
    {
      variant: 'gray',
      content: 'Prev',
      onClick: (btn) => {
        console.log('this is prev ', btn);
      },
    },
  ];

  @Input() rightButtons: StepButton[] = [
    {
      variant: 'primary',
      content: 'Next',
      pill: true,
      onClick: (btn) => {
        console.log('this is next ', btn);
      },
    },
  ];

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
}
