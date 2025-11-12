import { Component, Input } from '@angular/core';
import { theme } from './theme';

/**
 * Balance-formatterComponent
 *
 * Live demo:
 * <example-url>/demo/ds-balance-formatter.component.html</example-url>
 */
@Component({
  selector: 'ds-balance-formatter',
  templateUrl: './balance-formatter.component.html',
})
export class DsBalanceFormatterComponent {
  @Input() isDiscrete: boolean = false;
  @Input() variant: keyof typeof theme = 'default';
  @Input() balance: number = 0;
  @Input() currency?: string;
  @Input() className?: string;
  @Input() currencyClassName?: string;
  @Input() noIcon: boolean = false;

  theme = theme;

  get num(): number {
    return Math.abs(this.balance);
  }

  get wrapperClass() {
    return [
      this.theme[this.variant].wrapper || '',
      this.className,
      this.isDiscrete ? 'font-medium' : '',
    ].join(' ');
  }

  get iconClass() {
    return this.balance > 0 ? 'text-green-500' : 'text-red-500';
  }

  get showIcon() {
    return !this.noIcon && this.balance !== 0;
  }

  get iconId() {
    return this.balance > 0 ? 'plus2' : 'minus';
  }
}
