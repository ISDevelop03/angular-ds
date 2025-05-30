import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Theme } from './theme';

interface Item {
  icon: string; // Converted IconIds to string
  title: string;
  link: string;
  isShortcut?: boolean;
}

interface Shortcut {
  title: string; // Converted IconIds to string
  href?: string;
  isSelected?: boolean;
  onClick?: string;
}

/**
 * ShortcutsComponent
 *
 * Live demo:
 * <example-url>/demo/ds-shortcuts.component.html</example-url>
 */
@Component({
  selector: 'ds-shortcuts',
  templateUrl: './shortcuts.component.html',
})
export class DsShortcutsCardComponent {
  @Input() items: Item[]; // Converted IconIds to string
  @Input() shortcuts: Shortcut[]; // Converted IconIds to string
  @Input() className?: string = '';

  isOpen = false;

  constructor(private host: ElementRef) {}

  // Toggle open/close and prevent this click from bubbling up
  onClick(item: Item, event: MouseEvent) {
    event.stopPropagation();
    if (item.isShortcut) {
      this.isOpen = !this.isOpen;
      console.log('item', item);
    }
  }

  // Listen for clicks anywhere in the document
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // If the click target is outside this component, close the list
    if (this.isOpen && !this.host.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  theme = Theme;
}
