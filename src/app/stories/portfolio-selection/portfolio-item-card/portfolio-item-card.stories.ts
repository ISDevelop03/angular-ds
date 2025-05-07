import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-item-card',
  templateUrl: './portfolio-item-card.stories.html',
})
export class PortfolioItemCardStory {
  title: string = 'JESA Group';
  image: string = 'https://placehold.co/41x41?text=Logo';
  isSelected: boolean = false;
  className: string = '';

  handleClick = () => {
    this.isSelected = !this.isSelected;
    console.log('Item Card clicked', this.isSelected);
  };
}
