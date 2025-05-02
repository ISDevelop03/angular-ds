import { Component } from '@angular/core';
import { IMainMenu } from 'projects/design-system/src/lib/components/sidebar/types';
import { mainMenusMOCKDATA, LIST_MOCKDATA } from './data';

@Component({
  selector: 'app-sidebar-story',
  templateUrl: './sidebar.stories.html',
})
export class SidebarStoryComponent {
  profileMenus = LIST_MOCKDATA;

  mainMenus: IMainMenu[] = mainMenusMOCKDATA;
}
