import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SliderDotsTheme } from './theme';

type ThemeKey = keyof typeof SliderDotsTheme;

/**
 * SliderDotsComponent
 *
 * Live demo:
 * <example-url>/demo/ds-slider-dots.component.html</example-url>
 */
@Component({
  selector: 'ds-slider-dots',
  templateUrl: './slider-dots.component.html',
})
export class SliderDotsComponent {
  /**
   * Number of dots/slides to display.
   * Must be ≥ 1.
   **/
  @Input() count: number = 3;
  @Input() className: string = '';

  /** 0-based index of the currently “active” slide. */
  @Input() active: number = 0;
  @Input() doNotDisableArrows: boolean = false;

  /**
   * Which theme (variant) from SliderDotsTheme to use.
   * E.g. 'default', 'red', or any other key in SliderDotsTheme.
   */
  @Input() variant: ThemeKey = 'default';

  /** If false, arrows are completely hidden. */
  @Input() showArrows: boolean = true;

  //
  // ─── OUTPUT EVENTS ─────────────────────────────────────────────────────────────
  //

  /** Emits the chosen dot index (0-based) when the user clicks a dot. */
  @Output() select = new EventEmitter<number>();

  /** Emits when user clicks the “Prev” arrow (if not disabled). */
  @Output() prev = new EventEmitter<void>();

  /** Emits when user clicks the “Next” arrow (if not disabled). */
  @Output() next = new EventEmitter<void>();

  /**
   * Convenience getter: returns the theme object for the current `themeName`,
   * or falls back to `default` if the key is missing.
   */
  get theme() {
    return SliderDotsTheme[this.variant] || SliderDotsTheme['default'];
  }

  /** Build an array [0, 1, 2, …, count-1] to loop over in the template. */
  get indices(): number[] {
    return Array(this.count)
      .fill(0)
      .map((_, i) => i);
  }

  /** Is “Prev” arrow currently disabled (because active is already 0)? */
  get isPrevDisabled(): boolean {
    return this.active <= 0;
  }

  /** Is “Next” arrow currently disabled (because active is at count-1)? */
  get isNextDisabled(): boolean {
    return this.active >= this.count - 1;
  }

  /** Handler for clicking Prev: only emit if not disabled. */
  onPrev(): void {
    if (this.doNotDisableArrows) {
      this.next.emit();
      return;
    }

    if (!this.isPrevDisabled) {
      this.prev.emit();
    }
  }

  /** Handler for clicking Next: only emit if not disabled. */
  onNext(): void {
    if (this.doNotDisableArrows) {
      this.next.emit();
      return;
    }

    if (!this.isNextDisabled) {
      this.next.emit();
    }
  }

  /** Handler for clicking a dot at index i: only emit if i !== active. */
  onSelect(i: number): void {
    if (i !== this.active) {
      this.select.emit(i);
    }
  }

  /**
   * CSS classes for the “Prev” arrow’s wrapper.
   * If disabled, append the `disabledOpacity` classes.
   */
  get prevArrowWrapperClass(): string {
    const base = this.theme.arrow.wrapper;

    if (this.doNotDisableArrows) {
      return base;
    }

    return this.isPrevDisabled
      ? `${base} ${this.theme.arrow.disabledOpacity}`
      : base;
  }

  /**
   * CSS classes for the “Next” arrow’s wrapper.
   * If disabled, append the `disabledOpacity` classes.
   */
  get nextArrowWrapperClass(): string {
    const base = this.theme.arrow.wrapper;

    if (this.doNotDisableArrows) {
      return base;
    }
    return this.isNextDisabled
      ? `${base} ${this.theme.arrow.disabledOpacity}`
      : base;
  }

  /**
   * CSS classes for the <ds-icon> inside **both** arrows, when “enabled.”
   * (We assume the icon’s color should match `activeText`.)
   * When disabled, we replace that with `disabledText`.
   */
  get prevIconClass(): string {
    if (this.doNotDisableArrows) {
      return `${this.theme.arrow.activeText}`;
    }

    return this.isPrevDisabled
      ? `${this.theme.arrow.disabledText}`
      : `${this.theme.arrow.activeText}`;
  }

  get nextIconClass(): string {
    if (this.doNotDisableArrows) {
      return `${this.theme.arrow.activeText}`;
    }
    return this.isNextDisabled
      ? `${this.theme.arrow.disabledText}`
      : `${this.theme.arrow.activeText}`;
  }
}
