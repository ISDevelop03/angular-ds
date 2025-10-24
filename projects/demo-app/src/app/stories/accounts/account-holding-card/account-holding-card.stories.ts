import { Component } from '@angular/core';

@Component({
  selector: 'app-account-holding-card',
  templateUrl: './account-holding-card.stories.html',
})
export class AccountHoldingCardStoryComponent {
  data = {
    title: 'GROUPEEGUY CHARLESPEGUY PRIVE',
    className: '',
    image: 'https://placehold.co/82',
    actionsList: [
      {
        label: 'Edit',
        icon: 'pen',
        onClick: (item) => alert('Edit clicked' + JSON.stringify(item)),
      },
      {
        label: 'Remove',
        icon: 'trash',
        onClick: (item) => alert('Remove clicked' + JSON.stringify(item)),
      },
    ],
  };

  clicked(event: any) {
    console.log('Card clicked: ' + JSON.stringify(event));
  }
}
