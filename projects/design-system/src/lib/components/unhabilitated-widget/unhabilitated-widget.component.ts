import { Component, Input } from '@angular/core';
/**
 * UnhabilitatedWidgetComponent
 *
 * Live demo:
 * <example-url>/demo/ds-unhabilitated-widget.component.html</example-url>
 */
@Component({
  selector: 'ds-unhabilitated-widget',
  templateUrl: './unhabilitated-widget.component.html',
  host: { class: 'block h-full' },
})
export class UnhabilitatedWidgetComponent {
  @Input() className?: string = '';
  @Input() backgroundImage?: string = '';
  @Input() modalImage?: string = '';
  @Input() title?: string = '';
  @Input() description?: string = '';
}
