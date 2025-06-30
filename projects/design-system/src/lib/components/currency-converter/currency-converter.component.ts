import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ChartProps {
  value: number;
}

interface CurrencyProps {
  value: string;
  label: string;
  symbol: string;
  color: string;
  image: string;
}

/**
 * Currency-converterComponent
 *
 * Live demo:
 * <example-url>/demo/ds-currency-converter.component.html</example-url>
 */
@Component({
  selector: 'ds-currency-converter',
  templateUrl: './currency-converter.component.html',
})
export class CurrencyConverterComponent {
  @Input() value: number;
  @Input() currency: string;
  @Input() currencies: CurrencyProps[] = [];

  /** emits when the number input changes */
  @Output() valueChange = new EventEmitter<number>();
  /** emits when the currency select changes */
  @Output() currencyChange = new EventEmitter<string>();

  onInput(e: Event) {
    const num = +(e.target as HTMLInputElement).value;
    this.value = num;
    this.valueChange.emit(num);
  }

  onCurrencyChange(newCur: any) {
    this.currency = newCur.value;
    this.currencyChange.emit(newCur);
  }
}
