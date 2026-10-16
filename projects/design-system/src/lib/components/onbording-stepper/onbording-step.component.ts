import { Component, Input } from '@angular/core';
import { ONBORDING_STEPPER_THEME } from './theme';

export type OnbordingStepStatus = 'active' | 'done' | 'upcoming' | 'open';

/**
 * One step projected into `ds-onbording-stepper`.
 * Any component can be placed inside. The default variant shows that content
 * on the active step. The open variant shows it on every step.
 * @ignore
 */
@Component({
  selector: 'ds-onbording-step',
  templateUrl: './onbording-step.component.html',
  host: {
    role: 'listitem',
    '[class]': 'hostClass',
    '[attr.aria-current]': 'status === "active" ? "step" : null',
  },
})
export class OnbordingStepComponent {
  @Input() title = '';

  theme = ONBORDING_STEPPER_THEME.default;

  /** Set by the stepper. */
  index = 0;
  isLast = false;
  status: OnbordingStepStatus = 'upcoming';

  get hostClass(): string {
    return this.theme.step;
  }

  get markerClass(): string {
    var state = this.theme.markerUpcoming;
    if (this.status === 'done') {
      state = this.theme.markerDone;
    } else if (this.status === 'active' || this.status === 'open') {
      state = this.theme.markerActive;
    }
    return this.theme.marker + ' ' + state;
  }

  get titleClass(): string {
    var state = this.theme.titleUpcoming;
    if (this.status === 'done') {
      state = this.theme.titleDone;
    } else if (this.status === 'active' || this.status === 'open') {
      state = this.theme.titleActive;
    }
    return this.theme.title + ' ' + state;
  }

  get bodyClass(): string {
    return this.isLast ? this.theme.bodyLast : this.theme.body;
  }

  get contentClass(): string {
    return this.status === 'active' || this.status === 'open'
      ? this.theme.content
      : this.theme.contentHidden;
  }
}
