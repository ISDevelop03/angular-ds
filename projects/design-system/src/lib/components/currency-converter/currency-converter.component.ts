import { Component, Input } from '@angular/core';

interface ChartProps {
  value: number;
}

interface CurrencieProps {
  value: string;
  label: string;
  symbol: string;
  color: string;
  image: string;
}

@Component({
  selector: 'ds-currency-converter',
  templateUrl: './currency-converter.component.html',
})
export class CurrencyConverterComponent {
  @Input() chartData: ChartProps[] = [];
  @Input() showGraph: boolean = false;
  @Input() title?: string;
  @Input() date?: string;
  @Input() content?: string;
  @Input() currencies: CurrencieProps[] = [];
  @Input() conversionRates: { [key: string]: number } = {};

  isShowGraph: boolean = false;
  amount1: number = 1;
  amount2: number = 10;
  currency1: string = 'EUR';
  currency2: string = 'MAD';

  ngOnInit() {
    this.isShowGraph = this.showGraph;
  }

  handleConversion(
    amount: number,
    fromCurrency: string,
    toCurrency: string
  ): number {
    if (fromCurrency === toCurrency) return amount;

    const rate = this.conversionRates[`${fromCurrency}-${toCurrency}`];
    if (!rate) {
      const toEurRate = this.conversionRates[`${fromCurrency}-EUR`];
      const fromEurRate = this.conversionRates[`EUR-${toCurrency}`];
      if (toEurRate && fromEurRate) {
        return Number((amount * toEurRate * fromEurRate).toFixed(2));
      }
      return amount;
    }
    return Number((amount * rate).toFixed(2));
  }

  handleAmount1Change(value: number) {
    this.amount1 = value;
    this.amount2 = this.handleConversion(value, this.currency1, this.currency2);
  }

  handleAmount2Change(value: number) {
    this.amount2 = value;
    this.amount1 = this.handleConversion(value, this.currency2, this.currency1);
  }

  handleToggleShowGraph() {
    this.isShowGraph = !this.isShowGraph;
  }

  handleInverseCurrencies() {
    const tempCurrency = this.currency1;
    const tempAmount = this.amount1;

    this.currency1 = this.currency2;
    this.currency2 = tempCurrency;

    this.amount1 = this.amount2;
    this.amount2 = tempAmount;
  }

  getConversionRate(): number {
    return this.handleConversion(1, this.currency1, this.currency2);
  }

  actions = [
    {
      icon: 'link',
    },
    {
      icon: 'graph-pie',
      onClick: () => this.handleToggleShowGraph(),
      buttonClassName: this.isShowGraph && 'text-primary',
    },
  ];
}
