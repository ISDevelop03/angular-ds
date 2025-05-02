import { Component } from '@angular/core';
import { Page } from 'projects/design-system/src/lib/components';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.stories.html',
})
export class BreadcrumbStoryComponent {
  pages: Page[] = [
    { id: '1', name: 'Section', href: '/section' },
    { id: '2', name: 'Category', href: '/section/category' },
    { id: '3', name: 'Item', href: '/section/category/item' },
    { id: '4', name: 'Details', href: '/section/category/item/details' },
  ];

  pagesWithCurrent: Page[] = [
    { id: '1', name: 'Section', href: '/section' },
    { id: '2', name: 'Category', href: '/section/category' },
    {
      id: '3',
      name: 'Current Item',
      href: '/section/category/item',
      current: true,
    },
  ];
}
