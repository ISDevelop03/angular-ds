import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.stories.html',
})
export class PortfolioStoryComponent {
  mockData: any = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: `Item #${i + 1}`,
    reference: `ID: 00253456700009${i + 1}`,
    image: `https://placehold.co/35x35?text=Logo${i + 1}`,
  }));

  holding = null

  selected = this.mockData[10];

  perPage = 4;
  currentPage = 1;
  totalPages!: number;
  pageItems: any[] = [];

  ngOnInit() {
    this.totalPages = Math.ceil(this.mockData.length / this.perPage);
    this.loadPage(1);
  }

  onPageChange(page: number) {
    this.loadPage(page);
  }

  private loadPage(page: number) {
    this.currentPage = page;
    const start = (page - 1) * this.perPage;
    this.pageItems = this.mockData.slice(start, start + this.perPage);
  }

  onSelect(portfolio: any) {
    this.selected = portfolio;
    console.log('Selected portfolio:', portfolio);
  }
}
