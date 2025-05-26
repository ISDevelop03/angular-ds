import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.stories.html',
})
export class CurrencyConverterStoryComponent {
  currencies = [
    {
      value: 'EUR',
      label: 'Euro',
      image: 'https://placehold.co/18/red/white',
    },
    {
      value: 'MAD',
      label: 'Dirham',
      image: 'https://placehold.co/18/green/white',
    },
    {
      value: 'USD',
      label: 'Dollar',
      image: 'https://placehold.co/18/orange/white',
    },
  ];

  conversionRates = {
    'EUR-MAD': 11,
    'MAD-EUR': 0.09,
    'EUR-USD': 1.1,
    'USD-EUR': 0.91,
  };

  chartData = [{ value: 100 }, { value: 200 }];
}
