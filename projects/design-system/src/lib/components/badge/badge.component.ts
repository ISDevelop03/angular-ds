import { Component, EventEmitter, Input, Output } from '@angular/core';
import { badge, textVariants } from './theme';

/**
 * BadgeComponent
 *
 * Live demo:
 * <example-url>/demo/ds-badge.component.html</example-url>
 */
@Component({
  selector: 'ds-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  @Input() icon?: string;
  @Input() label!: string;
  @Input() href?: string;
  @Input() pill: boolean = false;
  @Input() variant: string = 'default';
  @Input() size: string = 'md';
  @Input() withDot: boolean = false;
  @Input() iconRight: boolean = false;
  @Input() className: string = '';

  @Output() onClick = new EventEmitter<Event>();

  //Theme
  badge = badge;
  textVariants = textVariants;

  getBadgeClasses(): string {
    const base = this.badge.base;
    const size = this.badge.sizes[this.size] || '';
    const variant = this.badge.variants[this.variant] || '';
    const pill = this.pill ? 'rounded-full' : '';
    return [base, size, variant, pill, this.className].join(' ').trim();
  }

  getTextClasses(): string {
    return this.textVariants[this.size] || '';
  }

  handleClick(event: Event): void {
    this.onClick.emit(event);
  }
}
