import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Theme } from './theme';

export interface ShortcutItem {
  icon: string;
  title: string;
  href?: string;
  isShortcut?: boolean;
}

export interface DropdownShortcut {
  title: string;
  href?: string;
  isSelected?: boolean;
  onClick: (data: any) => void;
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
  @Input() items: ShortcutItem[]; // Converted IconIds to string
  @Input() shortcuts: DropdownShortcut[];
  @Input() className?: string = '';
  @Output() click = new EventEmitter<any>();

  @Output() removed = new EventEmitter<{
    item: DropdownShortcut;
    idx: number;
  }>();

  private openIdx: number | null = null;

  isOpen = false;
  theme = Theme;

  constructor(private host: ElementRef) {}

  // Toggle open/close and prevent this click from bubbling up
  onClick(data: { item: ShortcutItem; idx: number }, event: MouseEvent) {
    event.stopPropagation();
    if (data.item.isShortcut) {
      this.isOpen = !this.isOpen;
      this.click.emit({ ...data.item, idx: data.idx });
    }
  }

  removeShortcut(
    data: { item: DropdownShortcut; idx: number },
    event: MouseEvent
  ) {
    event.stopPropagation();
    this.items.splice(data.idx, 1);
    this.removed.emit(data);
  }

  onItemClick(item: ShortcutItem, idx: number, event: MouseEvent) {
    event.stopPropagation();
    if (!item.isShortcut) {
      this.isOpen = !this.isOpen;
      this.openIdx = idx;
    } else {
      this.click.emit({ action: 'navigate', item, idx });
    }
  }

  remove(item: ShortcutItem, idx: number, event: MouseEvent) {
    event.stopPropagation();
    this.click.emit({ action: 'remove', item, idx });
  }

  selectShortcut(shortcut: DropdownShortcut, idx: number, event: MouseEvent) {
    event.stopPropagation();
    if (this.openIdx === null) {
      return;
    }
    this.click.emit({
      action: 'add',
      shortcut,
      placeholderIdx: this.openIdx,
      idx,
    });
    shortcut.onClick ? shortcut.onClick({ shortcut, idx }) : null;
    this.isOpen = false;
    this.openIdx = null;
  }

  // Listen for clicks anywhere in the document
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // If the click target is outside this component, close the list
    if (this.isOpen && !this.host.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.openIdx = null;
    }
  }
}
