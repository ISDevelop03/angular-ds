import { Component, Input } from '@angular/core';
import { theme } from './theme';
/**
 * LabelComponent
 *
 * Live demo:
 * <example-url>/demo/ds-label.component.html</example-url>
 */
@Component({
  selector: 'ds-label',
  templateUrl: './label.component.html',
})
export class LabelComponent {
  @Input() variant: keyof typeof theme = 'default';
  @Input() for: string = '';
  @Input() required?: boolean = false;
  @Input() disabled: boolean = false;

  @Input() className?: string = '';

  theme = theme;
}
