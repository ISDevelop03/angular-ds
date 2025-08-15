import { Component, Input } from '@angular/core';
import { theme } from './theme';

type TVariant = "success" | "info" | "warning"
/**
 * MessageComponent
 *
 * Live demo:
 * <example-url>/demo/ds-message.component.html</example-url>
 */
@Component({
  selector: 'ds-message',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  @Input() className?: string = '';
  @Input() content?: string = '';
  @Input() variant?: TVariant

  theme = theme
}
