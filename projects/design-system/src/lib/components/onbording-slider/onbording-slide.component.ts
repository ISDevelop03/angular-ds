import { Component, Input } from '@angular/core';
import { ONBORDING_SLIDER_THEME } from './theme';

/**
 * One screen projected into `ds-onbording-slider`.
 * Any component can be placed inside; the slider handles layout and dots.
 * @ignore
 */
@Component({
  selector: 'ds-onbording-slide',
  templateUrl: './onbording-slide.component.html',
  host: {
    '[class]': 'hostClass',
    '[attr.aria-hidden]': 'active ? null : "true"',
  },
})
export class OnbordingSlideComponent {
  private _active = false;
  private activeFromParent = false;

  /** Called by the slider when this slide is marked active from the template. */
  onActivated: (() => void) | null = null;

  theme = ONBORDING_SLIDER_THEME.default;

  @Input()
  set active(value: boolean | string) {
    const next = value === true || value === 'true';
    const changed = next !== this._active;
    this._active = next;
    if (changed && next && !this.activeFromParent && this.onActivated) {
      this.onActivated();
    }
  }

  get active(): boolean {
    return this._active;
  }

  get hostClass(): string {
    return this.theme.slide;
  }

  setActiveFromParent(value: boolean): void {
    this.activeFromParent = true;
    this.active = value;
    this.activeFromParent = false;
  }
}
