import { Component, Input } from '@angular/core';
/**
 * FlatTooltipComponent
 *
 * Live demo:
 * <example-url>/demo/ds-flat-tooltip.component.html</example-url>
 */
@Component({
  selector: 'ds-flat-tooltip',
  templateUrl: './flat-tooltip.component.html',
})
export class FlatTooltipComponent {
  @Input() className?: string = '';
  @Input() title: string = '';
  @Input() content: string = '';
}
