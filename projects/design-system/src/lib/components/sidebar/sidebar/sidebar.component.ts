// ds-sidebar.component.ts
import { Component, Input } from '@angular/core';
import { IMenus, IMainMenu } from '../types';
import { ISelectItem } from '../../profile-dropdown/types';

@Component({
  selector: 'ds-sidebar',
  templateUrl: './sidebar.component.html',
})
export class DsSidebarComponent {
  @Input() className: string = '';
  @Input() profileMenus: ISelectItem[] = [];
  @Input() mainMenus: IMainMenu[] = [];
  @Input() disableMainMenus: boolean = false;

  subSidebarIsOpen: boolean = false;
  subMenuData: IMenus = { title: '', items: [] };

  openSubSidebar(menus: IMenus | undefined): void {
    if (menus) {
      this.subSidebarIsOpen = true;
      this.subMenuData = menus;
    }
  }

  closeSubSidebar(): void {
    this.subSidebarIsOpen = false;
    this.subMenuData = { title: '', items: [] };
  }
}
