import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-vision-card',
  templateUrl: './portfolio-vision-card.stories.html',
})
export class PortfolioVisionCardStory {
  title = 'Vision holding - Groupe OCP';
  image: string = 'https://placehold.co/96?text=Logo';
  isSelected: boolean = false;
  className: string = '';

  handleClick = () => {
    this.isSelected = !this.isSelected;
    console.log('Vision Card clicked', this.isSelected);
  };
}
