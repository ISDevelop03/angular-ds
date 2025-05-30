import { Component, Input } from '@angular/core';
import { breadcrumb } from './theme';

export interface Page {
  id: string;
  name: string;
  href?: string;
  current?: boolean;
}

/**
 * BreadcrumbComponent
 *
 * Live demo:
 * <example-url>/demo/ds-breadcrumb.component.html</example-url>
 */
@Component({
  selector: 'ds-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class DsBreadcrumbComponent {
  @Input() nextUrl?: string = '';
  @Input() nextClassName?: string = '';
  @Input() prevUrl?: string = '';
  @Input() prevClassName?: string = '';
  @Input() homeUrl?: string = '';
  @Input() className: string = '';
  @Input() variant: keyof typeof breadcrumb = 'default';
  @Input() pages: Page[] = [];
  @Input() showLimit: boolean = false;

  get list(): Page[] {
    if (this.homeUrl && this.pages.length > 2 && this.showLimit) {
      return this.pages.slice(0, 1);
    } else if (this.pages.length > 3 && this.showLimit) {
      return this.pages.slice(0, 2);
    }
    return this.pages;
  }

  get lastPage(): Page {
    return this.pages[this.pages.length - 1];
  }

  get theme() {
    return breadcrumb[this.variant];
  }
}
