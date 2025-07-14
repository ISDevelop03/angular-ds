import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  holding,
  leftMenus,
  LIST_MOCKDATA,
  mainMenusMOCKDATA,
  actions,
  portfolios,
  rightMenus,
} from './data';
import { IMainMenu } from 'projects/design-system/src/lib/components/sidebar/types';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mybusiness-app';

  profileMenus = LIST_MOCKDATA;
  mainMenus: IMainMenu[] = mainMenusMOCKDATA;
  hideWrapperBackground = false;
  language = {
    src: '/assets/france-flag.svg',
    alt: 'Français QWERTYUIOP',
  };

  currentUrl: string;
  private bodyClassObserver: MutationObserver;

  leftMenus = leftMenus;
  rightMenus = rightMenus;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(Router) private router: Router
  ) {}

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

    // initial URL
    this.currentUrl = this.router.url;

    // subscribe to future changes
    this.router.events
      .pipe(
        // only act on completed navigation events
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((evt: NavigationEnd) => {
        this.currentUrl = evt.urlAfterRedirects;
      });
  }

  ngOnDestroy() {
    // clean up when the component is torn down
    this.bodyClassObserver.disconnect();
  }

  callingOnClick(event: MouseEvent) {
    console.log('Calling clicked', event);
  }

  cardOnClick(accountId: string) {
    alert(`Card with ID ${accountId} clicked`);
  }
}
