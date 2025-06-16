import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.stories.html',
})
export class PortfolioStoryComponent {
  portfolios = [
    {
      id: 'id1',
      title: 'Prayon',
      reference: 'ID: 002534567000090',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id2',
      title: 'OCP Africa',
      reference: 'ID: 002534567000091',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id3',
      title: 'JESA Group',
      reference: 'ID: 002534567000092',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id4',
      title: 'TEAL Technology',
      reference: 'ID: 002534567000093',
      image: 'https://placehold.co/35x35?text=Logo',
    },
    {
      id: 'id5',
      title: 'Phosboucraa',
      reference: 'ID: 002534567000094',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id6',
      title: 'Saftco SA',
      reference: 'ID: 002534567000095',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id7',
      title: 'Jorf Fertilizers',
      reference: 'ID: 002534567000096',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id8',
      title: 'Dupont',
      reference: 'ID: 002534567000097',
      image: 'https://placehold.co/35x35?text=Logo',
    },
  ];

  holding = {
    id: 'id1hodling',
    title: 'Holding Name',
    image: 'https://placehold.co/35x35?text=Logo',
  };

  selected = this.portfolios[0];

  onSelect(portfolio: any) {
    this.selected = portfolio;
    console.log('Selected portfolio:', portfolio);
  }
}
