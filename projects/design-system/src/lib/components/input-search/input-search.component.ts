import {
  Component,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';
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
  @Input() maxWidth: string = '280px';

  @Input() value: string = '';

  isExpanded = false;

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as Node;
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside && this.isExpanded && !this.value.trim()) {
      this.isExpanded = false;
    }
  }

  openSearch() {
    this.isExpanded = true;
  }

  clearSearch() {
    this.value = '';
  }
}
