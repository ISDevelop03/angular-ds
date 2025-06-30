import { Component } from '@angular/core';

@Component({
  selector: 'app-filial-card',
  templateUrl: './filial-card.stories.html',
})
export class FilialCardStoryComponent {
  item = {
    icon: 'https://placehold.co/400',
    name: 'Filial A',
    id: 1,
    sector: 'Sector A',
  };

  onFilialCardSelected(event: any) {
    console.log('Filial card selected:', event);
  }
}
