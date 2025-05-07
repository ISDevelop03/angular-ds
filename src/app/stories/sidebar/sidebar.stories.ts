import { IMainMenu } from 'projects/design-system/src/lib/components/sidebar/types';
import { mainMenusMOCKDATA, LIST_MOCKDATA } from './data';
import { OnInit, Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidebar-story',
  templateUrl: './sidebar.stories.html',
})
export class SidebarStoryComponent implements OnInit, OnDestroy {
  profileMenus = LIST_MOCKDATA;
  mainMenus: IMainMenu[] = mainMenusMOCKDATA;
  hideWrapperBackground = false;

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
}
