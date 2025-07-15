import { Component, Input, TemplateRef } from '@angular/core';

/**
 * Sheet-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-sheet-card.component.html</example-url>
 */
@Component({
  selector: 'ds-sheet-card',
  templateUrl: './sheet-card.component.html',
})
export class SheetCardComponent {
  @Input() image?: string;
  @Input() icon?: string;
  @Input() label?: string;
  @Input() isDraggable?: string;
  @Input() leftContent?: string | TemplateRef<any>;
  @Input() data?: any;

  @Input() iconRight?: string;
  @Input() iconPosition?: 'bottom' | 'center' | 'top' = 'bottom';

  @Input() className?: string = '';
  @Input() iconPositionClassName?: string = '';
  @Input() removeImageRounded?: boolean = false;

  @Input() onClick?: (item: any) => void;
  @Input() startClick?: (item: any) => void;

  isTemplate(ref: any): ref is TemplateRef<any> {
    return ref instanceof TemplateRef;
  }
}
