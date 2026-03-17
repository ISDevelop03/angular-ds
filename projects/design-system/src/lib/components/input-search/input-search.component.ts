import { Component, Input } from '@angular/core';
/**
 * InputSearchComponent
 *
 * Live demo:
 * <example-url>/demo/ds-input-search.component.html</example-url>
 */
@Component({
  selector: 'ds-input-search',
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent {
  @Input() className?: string = '';
  @Input() placeholder: string = 'Search';

  @Input() value: string = '';

  isExpanded = false;

  openSearch() {
    this.isExpanded = true;
  }

  clearSearch() {
    this.value = '';

  }
}
