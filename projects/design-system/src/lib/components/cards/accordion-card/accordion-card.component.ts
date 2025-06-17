import { Component, Input, TemplateRef } from '@angular/core';

export interface AccordionCard {
  label: string;
  value: any | TemplateRef<any>;
}
/**
 * AccordionCardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-accordion-card.component.html</example-url>
 */
@Component({
  selector: 'ds-accordion-card',
  templateUrl: './accordion-card.component.html',
})
export class AccordionCardComponent {
  @Input() items: AccordionCard[] = [];
  @Input() className?: string = '';

  isTemplate(ref: any): ref is TemplateRef<any> {
    return ref instanceof TemplateRef;
  }
}
