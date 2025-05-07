import { Component, Input } from '@angular/core';
import { badge, textVariants } from './theme';

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
  @Input() outline: boolean = false;
  @Input() className: string = '';

  //Theme
  badge = badge;
  textVariants = textVariants;

  getBadgeClasses(): string {
    const base = this.badge.base;
    const size = this.badge.sizes[this.size] || '';
    const variant = this.outline
      ? this.badge.outlineVariants[this.variant] || ''
      : this.badge.variants[this.variant] || '';
    const pill = this.pill ? 'rounded-full' : '';
    return [base, size, variant, pill, this.className].join(' ').trim();
  }

  getTextClasses(): string {
    return this.textVariants[this.size] || '';
  }
}
