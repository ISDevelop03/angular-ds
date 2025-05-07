import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() menus?: any;
  @Input() isFirst: boolean = false;
  @Input() disableMainMenus: boolean = false;
  @Input() href: string = '#';

  @Output() onClick = new EventEmitter<void>();

  get isActive(): boolean {
    return (
      (this.subMenuData && this.subMenuData.title) ===
      (this.menus && this.menus.title)
    );
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
}
