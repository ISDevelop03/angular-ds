import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
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
export class InputSearchComponent implements OnInit {
  @Input() className?: string = '';
  @Input() placeholder: string = 'Search';
  @Input() maxWidth: string = '280px';
  @Input() defaultOpen = false;

  @Input() value: string = '';

  isExpanded = false;

  constructor(private elementRef: ElementRef<HTMLElement>) { }

  ngOnInit() {
    if (this.defaultOpen) {
      this.isExpanded = true;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.defaultOpen) {
      return;
    }

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
