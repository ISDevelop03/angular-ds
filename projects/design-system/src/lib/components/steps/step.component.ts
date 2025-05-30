// src/lib/step.component.ts
import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

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
  @ContentChild(TemplateRef) contentTemplate!: TemplateRef<any>;
}
