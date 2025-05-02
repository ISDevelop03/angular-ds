// ds-menu-list.component.ts
import { Component, Input } from '@angular/core';
import { IMenuListItem } from '../types';

@Component({
  selector: 'ds-menu-list',
  templateUrl: './menu-list.component.html',
})
export class DsMenuListComponent {
  @Input() data: IMenuListItem[] = [];

  private openMap = new WeakMap<IMenuListItem, boolean>();

  toggle(item: IMenuListItem): void {
    const isOpen = this.openMap.get(item);
    this.openMap.set(item, !isOpen);
  }

  isOpen(item: IMenuListItem): boolean {
    return this.openMap.get(item) ? true : false;
  }

  hasChildren(item: IMenuListItem): boolean {
    return Array.isArray(item.items) && item.items.length > 0;
  }
}
