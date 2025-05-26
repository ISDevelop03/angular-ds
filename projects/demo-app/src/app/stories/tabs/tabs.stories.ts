import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.stories.html',
})
export class TabsStoryComponent {
  @ViewChild('tabOne') tabOne!: TemplateRef<any>;
  @ViewChild('tabTwo') tabTwo!: TemplateRef<any>;
  @ViewChild('tabThree') tabThree!: TemplateRef<any>;
  @ViewChild('noBgTabOne') noBgTabOne!: TemplateRef<any>;
  @ViewChild('noBgTabTwo') noBgTabTwo!: TemplateRef<any>;
  @ViewChild('noBgTabThree') noBgTabThree!: TemplateRef<any>;

  tabsDefault = [
    { title: 'Liste des comptes', panel: 'This is the content for Tab 1' },
    {
      title: 'Historique des opérations',
      panel: 'Content for the second tab appears here.',
    },
    {
      title: ' Cash management',
      panel: 'Another panel of content for tab three.',
    },
  ];

  variants = ['default', 'amber', 'blue', 'green', 'red', 'neutral', 'stroke1'];

  tabsCustom = [];
  tabsNoBackground = [];

  ngAfterViewInit() {
    setTimeout(() => {
      this.tabsCustom = [
        { title: 'Overview', panel: this.tabOne },
        { title: 'Settings', panel: this.tabTwo },
        { title: 'Activity', panel: this.tabThree },
      ];
      this.tabsNoBackground = [
        { title: 'Nouveau paiement', panel: this.noBgTabOne },
        { title: 'Favoris', panel: this.noBgTabTwo },
        { title: 'Paiement en masse', panel: this.noBgTabThree },
      ];
    });
  }
}
