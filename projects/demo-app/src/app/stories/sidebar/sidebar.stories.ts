import { IMainMenu } from 'projects/design-system/src/lib/components/sidebar/types';
import { mainMenusMOCKDATA, LIST_MOCKDATA } from './data';
import { OnInit, Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sidebar-story',
  templateUrl: './sidebar.stories.html',
})
export class SidebarStoryComponent implements OnInit, OnDestroy {
  profileMenus = LIST_MOCKDATA;
  mainMenus: IMainMenu[] = mainMenusMOCKDATA;
  hideWrapperBackground = false;

  portfolios = [
    {
      id: 'id1',
      title: 'Prayon',
      reference: 'ID: 002534567000090',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id2',
      title: 'OCP Africa',
      reference: 'ID: 002534567000091',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id3',
      title: 'JESA Group',
      reference: 'ID: 002534567000092',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id4',
      title: 'TEAL Technology',
      reference: 'ID: 002534567000093',
      image: 'https://placehold.co/35x35?text=Logo',
    },
    {
      id: 'id5',
      title: 'Phosboucraa',
      reference: 'ID: 002534567000094',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id6',
      title: 'Saftco SA',
      reference: 'ID: 002534567000095',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id7',
      title: 'Jorf Fertilizers',
      reference: 'ID: 002534567000096',
      image: 'https://placehold.co/35x35?text=Logo',
    },

    {
      id: 'id8',
      title: 'Dupont',
      reference: 'ID: 002534567000097',
      image: 'https://placehold.co/35x35?text=Logo',
    },
  ];
  holding = {
    id: 'id1hodling',
    title: 'Holding Name',
    image: 'https://placehold.co/35x35?text=Logo',
  };

  accounts = [
    {
      account_number: '011780000012345678901234',
      balance: 983223.883,
      currency: 'MAD',
      type: 'Compte annexe 01',
      date: '2024-05-22',
      id: 'account-1',
    },
    {
      account_number: '011780000012345678901235',
      balance: 45678,
      currency: 'EUR',
      type: 'Compte annexe 02',
      date: '2023-05-01',
      id: 'account-2',
    },
    {
      account_number: '011780000012345678901236',
      balance: 56766324.439,
      currency: 'USD',
      type: 'Compte annexe 03',
      date: '2025-04-01',
      id: 'account-3',
    },
    {
      account_number: '011780000012345678901237',
      balance: -218922.39,
      currency: 'JPY',
      type: 'Compte annexe 04',
      date: '2024-09-18',
      id: 'account-4',
    },
    {
      account_number: '011780000012345678901234',
      balance: 983223.883,
      currency: 'MAD',
      type: 'Compte annexe 05',
      date: '2024-05-22',
      id: 'account-5',
    },
    {
      account_number: '011780000012345678901235',
      balance: 45678,
      currency: 'EUR',
      type: 'Compte annexe 06',
      date: '2023-05-01',
      id: 'account-6',
    },
    {
      account_number: '011780000012345678901236',
      balance: -56766324.439,
      currency: 'USD',
      type: 'Compte annexe 07',
      date: '2025-04-01',
      id: 'account-7',
    },
    {
      account_number: '011780000012345678901237',
      balance: 218922.39,
      currency: 'JPY',
      type: 'Compte annexe 08',
      date: '2024-09-18',
      id: 'account-8',
    },
  ];

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
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: [`<`, '>'],
    dotsEach: true,
    items: 3.5,
  };

  private bodyClassObserver: MutationObserver;

  constructor(@Inject(DOCUMENT) private document: Document) {}

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
  }

  ngOnDestroy() {
    // clean up when the component is torn down
    this.bodyClassObserver.disconnect();
  }

  cardOnClick(accountId: string) {
    alert(`Card with ID ${accountId} clicked`);
  }
}
