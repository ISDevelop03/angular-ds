import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.stories.html',
})
export class PortfolioStoryComponent {
  mockData = [
    {
      id: 1,
      title: 'Prayon',
      reference: 'ID: 002534567000090',
      image: 'https://placehold.co/35x35?text=Logo',
    },
    {
      id: 2,
      title: 'OCP Africa OCP OCP Africa OCP',
      reference: 'ID: 002534567000091',
      image: 'https://placehold.co/35x35?text=Logo',
    },
  ];

  holding = this.mockData[10];

  selected = this.mockData[10];

  perPage = 4;
  currentPage = 1;

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onSelect(portfolio: any) {
    this.selected = portfolio;
    console.log('Selected portfolio:', portfolio);
  }
}
