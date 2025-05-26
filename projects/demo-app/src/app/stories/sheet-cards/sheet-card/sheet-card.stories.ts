import { Component } from '@angular/core';

@Component({
  selector: 'app-sheet-card',
  templateUrl: './sheet-card.stories.html',
})
export class SheetCardStoryComponent {
  story1 = {
    image: 'https://picsum.photos/200/300',
    icon: '',
    label: 'Banque',
    iconRight: '',
    iconPosition: 'bottom',
  };
  story2 = {
    image: '',
    icon: 'cookie',
    label: 'Banque',
    iconRight: '',
    iconPosition: 'bottom',
  };
  story3 = {
    image: '',
    icon: 'cookie',
    label: 'Banque',
    iconRight: 'star',
    iconPosition: 'center',
  };
  story4 = {
    image: '',
    icon: 'cookie',
    label: 'Banque',
    iconRight: '',
    iconPosition: 'center',
  };

  onClick(item: any) {
    console.log('Clicked on item:', item);
  }
  startClick(item: any) {
    console.log('Start click:', item);
  }
}
