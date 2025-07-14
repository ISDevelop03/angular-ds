import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { defaultTheme } from './theme';

/**
 * ButtonComponent
 *
 * Live demo:
 * <example-url>/demo/ds-button.component.html</example-url>
 */
@Component({
  selector: 'ds-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  // Inputs similar to the React props
  @Input() icon: string;
  @Input() iconRight: string;
  @Input() iconLeft: string;
  @Input() type = 'button';
  @Input() className = '';
  @Input() variant: keyof typeof defaultTheme.variants = 'primary';
  @Input() size: keyof typeof defaultTheme.size = 'normal';
  @Input() disabled = false;
  @Input() outline = false;
  @Input() pill = false;
  @Input() href: string;
  @Input() target: string = null;
  @Input() isLoading = false;
  @Input() theme: any;
  @Input() style: string = '';

  @Output() onClick = new EventEmitter<any>();

  defaultTheme = defaultTheme;

  // Use the provided theme or fall back to the default one
  get appliedTheme() {
    return this.theme || this.defaultTheme;
  }

  // Compute the CSS class string using logic similar to vclsx in React
  get computedClass(): string {
    const theme = this.appliedTheme;
    const classes = [];

    classes.push(theme.base);
    if (this.icon) {
      classes.push(theme.size[this.size].icon);
    } else {
      classes.push(theme.size[this.size].text);
    }
    if (this.outline) {
      classes.push(theme.outlineVariants[this.variant]);
    } else {
      classes.push(theme.variants[this.variant]);
    }
    if (this.disabled) {
      classes.push(theme.disabled.base);
      if (this.outline) {
        classes.push(theme.disabled.outlined[this.variant]);
      } else {
        classes.push(theme.disabled.basic[this.variant]);
      }
    }
    if (this.pill) {
      classes.push('!rounded-full');
    }

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  ngOnInit() {
    // This replicates the React behavior where a link cannot be disabled.
    if (this.href && this.disabled) {
      throw new Error('A link cannot be disabled.');
    }
  }
}
