// ds-sidebar.component.ts
import { Component, Input } from '@angular/core';
import { IMenus, IMainMenu } from '../types';
import { ISelectItem } from '../../profile-dropdown/types';

/**
 * SidebarComponent
 *
 * Live demo:
 * <example-url>/demo/ds-sidebar.component.html</example-url>
 */
@Component({
  selector: 'ds-sidebar',
  templateUrl: './sidebar.component.html',
})
export class DsSidebarComponent {
  @Input() className: string = '';
  @Input() profileMenus: ISelectItem[] = [];
  @Input() mainMenus: IMainMenu[] = [];
  @Input() disableMainMenus: boolean = false;

  openMainMenuIndex: number = -1;

  subSidebarIsOpen: boolean = false;
  subMenuData: IMenus = { title: '', items: [] };

  openSubSidebar(menus: IMenus | undefined, idx: number): void {
    if (menus) {
      this.subSidebarIsOpen = true;
      document.body.classList.add('main-menu-open');
      this.subMenuData = menus;
      this.openMainMenuIndex = this.openMainMenuIndex === idx ? -1 : idx;
    }
  }

  closeSubSidebar(): void {
    this.subSidebarIsOpen = false;
    document.body.classList.remove('main-menu-open');
    this.subMenuData = { title: '', items: [] };
  }

  toggleMainMenu(idx: number): void {
    console.log('idxidxidx', idx);
    this.openMainMenuIndex = this.openMainMenuIndex === idx ? -1 : idx;
    this.subMenuData = this.mainMenus[idx].menus;
  }
}
