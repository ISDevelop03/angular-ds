import { IMainMenu } from 'projects/design-system/src/lib/components/sidebar/types';
import {
  mainMenusMOCKDATA,
  LIST_MOCKDATA,
  portfolios,
  holding,
  accounts,
  actionsList,
} from './data';
import { OnInit, Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

export type CapsSize = 'S' | 'M' | 'L';

export interface Cap {
  name: CapsSize;
  size: number;
}

@Component({
  selector: 'app-sidebar-story',
  templateUrl: './sidebar.stories.html',
})
export class SidebarStoryComponent implements OnInit, OnDestroy {
  profileMenus = LIST_MOCKDATA;
  mainMenus: IMainMenu[] = mainMenusMOCKDATA;
  hideWrapperBackground = false;

  logo = '/assets/mybusiness.svg';
  miniLogo = '/assets/mini-logo.svg';
  subSidebarIsOpen = false;

  subMenuData = mainMenusMOCKDATA[1].menus;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  sizes: Cap[] = [
    { name: 'S', size: 14 },
    { name: 'M', size: 16 },
    { name: 'L', size: 18 },
  ];

  portfolios = portfolios;
  holding = holding;
  // actionsList = actionsList;
  // accounts = accounts;

  accounts = [
    {
      account_number: '01178000001234567890770487',
      balance: 224641.75,
      currency: 'MAD',
      type: 'Compte annexe 01',
      date: '2023-05-23',
      id: 'account-1',
      solde_comptable: 241550.5,
      solde_temps_reel: -255108.146,
    },
    {
      account_number: '01178000001234567890809570',
      balance: 7147345.191,
      currency: 'MAD',
      type: 'Compte annexe 02',
      date: '2023-02-02',
      id: 'account-2',
      solde_comptable: 45366.534,
      solde_temps_reel: 90492.512,
    },
    {
      account_number: '01178000001234567890366262',
      balance: 7411971.152,
      currency: 'JPY',
      type: 'Compte annexe Compte annexe Compte annexe',
      date: '2025-02-12',
      id: 'account-3',
      solde_comptable: -137882.378,
      solde_temps_reel: 158203.352,
    },
    {
      account_number: '01178000001234567890157409',
      balance: -453431.867,
      currency: 'EUR',
      type: 'Compte annexe 04',
      date: '2024-07-22',
      id: 'account-4',
      solde_comptable: -221480.217,
      solde_temps_reel: 382341.678,
    },
    {
      account_number: '01178000001234567890554798',
      balance: 4904385.884,
      currency: 'USD',
      type: 'Compte annexe 05',
      date: '2023-10-09',
      id: 'account-5',
      solde_comptable: 32198.717,
      solde_temps_reel: -99231.442,
    },
    {
      account_number: '01178000001234567890867061',
      balance: 998123.463,
      currency: 'JPY',
      type: 'Compte annexe 06',
      date: '2024-11-15',
      id: 'account-6',
      solde_comptable: 159042.88,
      solde_temps_reel: 21423.106,
    },
    {
      account_number: '01178000001234567890605321',
      balance: -522045.128,
      currency: 'MAD',
      type: 'Compte annexe 07',
      date: '2024-01-23',
      id: 'account-7',
      solde_comptable: -40575.12,
      solde_temps_reel: -375173.837,
    },
    {
      account_number: '01178000001234567890678856',
      balance: 2224961.095,
      currency: 'EUR',
      type: 'Compte annexe 08',
      date: '2024-01-06',
      id: 'account-8',
      solde_comptable: 128639.799,
      solde_temps_reel: 385451.748,
    },
  ];

  selected = this.accounts[0];

  actionsList = [
    {
      label: 'Edit',
      icon: 'pen',
      onClick: (item: any) => alert('Edit clicked' + JSON.stringify(item)),
    },
    {
      label: 'Remove',
      icon: 'trash',
      onClick: (item: any) => alert('Remove clicked' + JSON.stringify(item)),
    },
  ];

  onOpenSidebar(payload: any) {
    console.log('onOpenSidebar payload: ', payload);
    this.subSidebarIsOpen = payload.open;
    this.subMenuData = payload.subMenuData;
  }

  currentCapSize: Cap = {
    name: 'M',
    size: 16,
  };
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [`<`, '>'],
    dotsEach: true,
    items: 3,
  };

  onClick(event: any) {
    this.selected = event.data;
    console.log('Calling onClick with item: ', event);
  }

  actionsBasic = [
    {
      icon: 'star',
      onClick: () => console.log('Star clicked'),
    },
    {
      icon: 'layout-grid-01',
      onClick: () => console.log('Grid clicked'),
    },
  ];

  callingOnClick = (event: any) => {
    console.log('Calling onClick with item: ', event);
  };

  private bodyClassObserver: MutationObserver;

  ngOnInit() {
    // Create an observer instance, passing a callback
    this.bodyClassObserver = new MutationObserver((mutations) => {
      for (let m of mutations) {
        const className = (m.target as HTMLElement).className;
        this.hideWrapperBackground = className.includes('main-menu-open');
      }
    });

    // Start observing document.body for attribute changes, filtered to "class"
    this.bodyClassObserver.observe(this.document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    //font size

    const el = this.document.body;
    const obs = new MutationObserver(() => {
      const raw = el.getAttribute('data-fontsize');
      if (raw) {
        const parsed = JSON.parse(raw);
        this.currentCapSize = parsed;
        this.customOptions = {
          ...this.customOptions,
          items:
            this.currentCapSize.name === 'M'
              ? 4
              : this.currentCapSize.name === 'L'
              ? 3
              : 1,
        };
      }
    });
    obs.observe(el, { attributes: true, attributeFilter: ['data-fontsize'] });
  }

  ngOnDestroy() {
    // clean up when the component is torn down
    this.bodyClassObserver.disconnect();
  }

  cardOnClick(accountId: string) {
    alert(`Card with ID ${accountId} clicked`);
  }
}
