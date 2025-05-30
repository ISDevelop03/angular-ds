import { Component, Input } from '@angular/core';
import { ICallToActionIcon } from './types';
import { callToActionIconsTheme } from './theme';

/**
 * Call-to-action-iconsComponent
 *
 * Live demo:
 * <example-url>/demo/ds-call-to-action-icons.component.html</example-url>
 */
@Component({
  selector: 'ds-call-to-action-icons',
  templateUrl: './call-to-action-icons.component.html',
})
export class CallToActionIconsComponent {
  @Input() variant: keyof typeof callToActionIconsTheme = 'default';
  @Input() className?: string = '';
  @Input() actions: ICallToActionIcon[] = [];

  theme = callToActionIconsTheme;

  handleClick(action: ICallToActionIcon) {
    if (typeof action.onClick === 'function') {
      action.onClick();
    }
  }
}
