import { Component, Input } from '@angular/core';
import { accounts, actionsList } from './data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.stories.html',
})
export class CarouselStoryComponent {
  @Input() label: string = 'carousel';
  @Input() className?: string = '';

  accounts = accounts;

  actionsList = actionsList;

  onCardClick(data: string) {
    alert(`Card with ID ${JSON.stringify(data)} clicked`);
  }
}
