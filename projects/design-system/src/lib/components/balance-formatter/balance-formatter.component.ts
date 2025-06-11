import { Component, Input, OnInit } from '@angular/core';
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
export class DsBalanceFormatterComponent implements OnInit {
  @Input() isDiscrete: boolean = false;
  @Input() variant: keyof typeof theme = 'default';
  @Input() balance: number = 0;
  @Input() currency?: string;
  @Input() className?: string;
  @Input() currencyClassName?: string;
  @Input() noIcon: boolean = false;

  num: number = Math.abs(this.balance);

  theme = theme;

  ngOnInit(): void {
    if (this.balance < 0) {
      this.num = Math.abs(this.balance);
    } else {
      this.num = this.balance;
    }
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
