// src/lib/step.component.ts
import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ds-step',
  template: `<ng-template><ng-content></ng-content></ng-template>`,
})
export class StepComponent {
  /** Title shown in the header bar for this step */
  @Input() title: string = '';

  /** Enable “Next” when true */
  @Input() shouldGoNext: boolean = true;

  /** Enable “Prev” when true */
  @Input() shouldGoPrev: boolean = true;

  /** Grabs the embedded <ng-template> content for this step */
  @ContentChild(TemplateRef) contentTemplate!: TemplateRef<any>;
}
