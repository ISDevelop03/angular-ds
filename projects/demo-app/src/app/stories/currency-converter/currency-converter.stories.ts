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

  value: number = 1;
  currency: string = this.currencies[0].value;

  onInput(event) {
    this.value = event.target.valueAsNumber;
  }
}
