import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.stories.html',
})
export class CurrencySelectStoryComponent {
  selectedCurrency = 'usd';

  currencyOptions = [
    {
      value: 'usd',
      label: 'USD',
      symbol: '$',
      color: '#000',
      image: 'https://placehold.co/18x18/orange/white',
    },
    {
      value: 'eur',
      label: 'EUR',
      symbol: '€',
      color: '#000',
      image: 'https://placehold.co/18x18/red/white',
    },
    {
      value: 'gbp',
      label: 'GBP',
      symbol: '£',
      color: '#000',
      image: 'https://placehold.co/18x18/green/white',
    },
  ];

  handleCurrencyChange(value: string) {
    console.log('Currency changed to:', value);
    this.selectedCurrency = value;
  }
}
