// ds-sidebar.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenus, IMainMenu, ILanguage, Cap } from '../types';
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
  @Input() sizes: Cap[] = [
    { name: 'S', size: 14 },
    { name: 'M', size: 16 },
    { name: 'L', size: 18 },
    { name: 'XL', size: 20 },
  ];
  @Input() language: ILanguage = {
    src: '/assets/france-flag.svg',
    alt: 'Français',
  };

  @Input() subSidebarIsOpen: boolean = false;

  @Output() callingOnClick = new EventEmitter();
  @Output() reclamationOnClick = new EventEmitter();
  @Output() languageOnClick = new EventEmitter();
  @Output() settingsOnClick = new EventEmitter();
  @Output() onOpenSidebar = new EventEmitter();

  openMainMenuIndex: number = -1;

  @Input() subMenuData: IMenus = { title: '', items: [] };

  openSubSidebar(menus: IMenus | undefined, idx: number): void {
    if (menus) {
      this.subSidebarIsOpen = true;
      document.body.classList.add('main-menu-open');

      this.subMenuData = menus;
      this.openMainMenuIndex = this.openMainMenuIndex === idx ? -1 : idx;

      // Emit the event to notify the parent component
      this.onOpenSidebar.emit({
        subMenuData: menus,
        open: true,
        openMainMenuIndex: this.openMainMenuIndex === idx ? -1 : idx,
      });
    }
  }

  closeSubSidebar(): void {
    this.subSidebarIsOpen = false;
    document.body.classList.remove('main-menu-open');
    this.subMenuData = { title: '', items: [] };

    //Emiit the event to notify the parent component
    this.onOpenSidebar.emit({
      subMenuData: { title: '', items: [] },
      openMainMenuIndex: this.openMainMenuIndex,
      open: false,
    });
  }

  toggleMainMenu(idx: number): void {
    console.log('idxidxidx', idx);
    this.openMainMenuIndex = this.openMainMenuIndex === idx ? -1 : idx;

    this.subMenuData = this.mainMenus[idx].menus;

    //Emiit the event to notify the parent component
    this.onOpenSidebar.emit({
      subMenuData: this.mainMenus[idx].menus,
      openMainMenuIndex: this.openMainMenuIndex === idx ? -1 : idx,
      open: this.subSidebarIsOpen,
    });
  }
}
