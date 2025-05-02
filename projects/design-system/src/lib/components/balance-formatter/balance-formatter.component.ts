import { Component, Input } from '@angular/core';
import { theme } from './theme';
import { formatMoney } from 'utils'; // Assuming you have a utility function
// otherwise, I can provide you a fallback formatMoney too

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

  get formattedBalance() {
    return formatMoney(Math.abs(this.balance), false, false, this.isDiscrete);
  }

  get wrapperClass() {
    return [
      this.theme[this.variant].wrapper || '',
      this.className,
      this.isDiscrete ? 'font-medium' : '',
    ].join(' ');
  }

  get iconClass() {
    return this.balance > 0 ? 'text-green-500 size-5' : 'text-red-500 size-5';
  }

  get showIcon() {
    return !this.noIcon && this.balance !== 0;
  }

  get iconId() {
    return this.balance > 0 ? 'plus2' : 'minus';
  }
}
