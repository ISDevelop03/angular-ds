import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-card',
  templateUrl: './numbers-card.stories.html',
})
export class NumbersCardStoryComponent {
  items = [
    {
      title: 'Numbers A',
      number: 7,
    },
    {
      title: 'Numbers B',
      number: 10,
    },
  ];
}
