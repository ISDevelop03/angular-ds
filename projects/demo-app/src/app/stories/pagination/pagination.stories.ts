import { OnInit, Component, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'app-pagination-story',
  templateUrl: './pagination.stories.html',
})
export class PaginationStoryComponent {
  themes = [{ name: 'default', value: 'default' }];

  totalItems = 100;
  itemsPerPage = 20;
  currentPage = 1;
  showPerPage = true;

  perPageOptions = [10, 20, 25, 50, 75, 100];

  onPageChange(page: number) {
    this.currentPage = page;
    console.log('wertyuiop', page);
  }

  onPerPageChange(newPerPage: number) {
    this.itemsPerPage = newPerPage; // ← update the bound input
    this.currentPage = 1; // ← reset to first page

    console.log('first page:', newPerPage);
  }
}
