import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-select-card',
  templateUrl: './portfolio-select-card.stories.html',
})
export class PortfolioSelectCardStory {
  title = 'Saftco SA';
  reference = 'ID: 002534567000090';
  image = 'https://placehold.co/35x35?text=Logo';
  isOpen = true;
  className = '';

  handleClick() {
    this.isOpen = !this.isOpen;
    console.log('Card clicked!', this.title);
  }
}
