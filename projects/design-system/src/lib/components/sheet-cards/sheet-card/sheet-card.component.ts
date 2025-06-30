import { Component, Input } from '@angular/core';

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

  @Input() data?: any;

  @Input() iconRight?: string;
  @Input() iconPosition?: 'bottom' | 'center' | 'top' = 'bottom';

  @Input() className?: string = '';
  @Input() iconPositionClassName?: string = '';
  @Input() removeImageRounded?: boolean = false;

  @Input() onClick?: (item: any) => void;
  @Input() startClick?: (item: any) => void;
}
