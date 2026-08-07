// ds-sidebar.component.ts
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IMenus, IMainMenu, ILanguage, Cap, IDisableBottomMenus } from '../types';
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
export class DsSidebarComponent implements OnInit, OnDestroy {
  @Input() className: string = '';
  @Input() profileMenus: ISelectItem[] = [];
  @Input() mainMenus: IMainMenu[] = [];
  @Input() disableMainMenus: boolean = false;
  @Input() disableBottomMenus: IDisableBottomMenus = {};
  @Input() sizes: Cap[] = [];
  @Input() defaultCap: Cap = { name: 'L', size: 18 };
  @Input() logo: string = '/assets/logo-mybusiness.svg';
  @Input() miniLogo: string = '/assets/mini-logo.svg';
  @Input() language: ILanguage = {
    src: '/assets/france-flag.svg',
    alt: 'Français',
  };
  @Output() onThemeChange = new EventEmitter();

  @Input() subSidebarIsOpen: boolean = false;

  @Output() callingOnClick = new EventEmitter();
  @Output() reclamationOnClick = new EventEmitter();
  @Output() languageOnClick = new EventEmitter();
  @Output() settingsOnClick = new EventEmitter();
  @Output() onOpenSidebar = new EventEmitter();

  openMainMenuIndex: number = -1;
  isActif: string = '/';

  private routerSub: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // On refresh, router.url is often still "/" in ngOnInit because the
    // initial navigation has not finished yet — wait for NavigationEnd.
    this.setActif(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.setActif(event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  setActif(url: string): void {
    this.isActif = url;
  }



  _onThemeChange(theme: any): void {
    console.log('theme sidebar', theme);
    this.onThemeChange.emit(theme);
  }

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
