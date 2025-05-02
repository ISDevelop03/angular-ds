import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.stories.html',
})
export class TabsStoryComponent {
  tabsDefault = [
    { title: 'Tab 1', panel: 'This is the content for Tab 1' },
    { title: 'Tab 2', panel: 'Content for the second tab appears here.' },
    { title: 'Tab 3', panel: 'Another panel of content for tab three.' },
  ];

  tabsCustom = [
    { title: 'Overview', panel: 'Welcome to the overview section.' },
    { title: 'Settings', panel: 'Adjust your preferences here.' },
    { title: 'Activity', panel: 'Latest activity will be shown here.' },
  ];
}
