import { Component } from '@angular/core';

@Component({
  selector: 'app-ticker-card',
  templateUrl: './ticker-card.stories.html',
})
export class TickerCardStoryComponent {
  item = {
    title: 'SEK',
    image: 'https://placehold.co/24?text=Ticker',
    price: 98.99,
    className: 'ticker-card',
  };
}
