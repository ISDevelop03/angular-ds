import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMenus, IMenuListItem } from '../types';

/**
 * @ignore
 */
@Component({
  selector: 'ds-menu-item',
  templateUrl: './menu-item.component.html',
})
export class DsMenuItemComponent {
  @Input() subSidebarIsOpen!: boolean;
  @Input() subMenuData: any;
  @Input() title!: string;
  @Input() icon?: string;
  @Input() color?: string;
  @Input() menus?: IMenus;
  @Input() isFirst: boolean = false;
  @Input() disableMainMenus: boolean = false;
  @Input() href: string = '#';
  @Input() isActif: string = '/';

  @Output() onClick = new EventEmitter<void>();
  @Output() onLinkClick = new EventEmitter<string>();

  get isActive(): boolean {
    if (!this.menus || !this.menus.items || !this.menus.items.length) {
      return this.isActif === this.href;
    }
    return this.containsHref(this.menus.items, this.isActif);
  }

  private containsHref(items: IMenuListItem[], url: string): boolean {
    for (const item of items) {
      if (item.href === url) {
        return true;
      }
      if (item.items && item.items.length && this.containsHref(item.items, url)) {
        return true;
      }
    }
    return false;
  }

  get wrapperClass(): string {
    let base =
      'px-4 py-2.5 relative after:absolute flex justify-center items-center after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-t-[6px] after:border-t-transparent after:border-r-[6px] after:border-b-[6px] after:border-b-transparent ';

    if (this.isActive) {
      base += this.subSidebarIsOpen
        ? 'after:border-r-white dark:after:border-r-white'
        : 'after:border-r-white dark:after:border-r-white-bg-dark';
    } else {
      base += 'after:border-r-transparent';
    }

    if (!this.subSidebarIsOpen && this.title) {
      base += ' group-hover:after:border-r-white';
    }

    return base;
  }

  handleClick() {
    if (!this.disableMainMenus) {
      this.onClick.emit();
    }
  }

  handleLinkClick(): void {
    if (!this.disableMainMenus) {
      this.onLinkClick.emit(this.href);
    }
  }
}
