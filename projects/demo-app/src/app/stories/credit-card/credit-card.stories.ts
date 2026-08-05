import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ITab } from 'projects/design-system/src/lib/components/tabs/tabs.component';
import { CardItem } from 'projects/design-system/src/lib/components/credit-card/credit-card.component';
import { MOCK_CARDS } from './mock-data';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.stories.html',
})
export class CreditCardStoryComponent {
  @ViewChild('historiqueTpl') historiqueTpl!: TemplateRef<any>;
  @ViewChild('plafondsTpl') plafondsTpl!: TemplateRef<any>;
  @ViewChild('parametresTpl') parametresTpl!: TemplateRef<any>;
  @ViewChild('oppositionTpl') oppositionTpl!: TemplateRef<any>;

  card: CardItem = MOCK_CARDS[1];
  cardCollapsed: CardItem = MOCK_CARDS[0];
  expanded = true;
  selectedIndex = 0;

  items: ITab[] = [];

  ngAfterViewInit() {
    setTimeout(() => {
      this.items = [
        { title: 'Historique', panel: this.historiqueTpl },
        { title: 'Plafonds', panel: this.plafondsTpl },
        { title: 'Paramètres', panel: this.parametresTpl },
        { title: 'Opposition', panel: this.oppositionTpl },
      ];
    });
  }

  onToggle(card: CardItem) {
    this.expanded = !this.expanded;
    console.log('toggle', card);
  }

  onTabChange(payload: { index: number; tab: ITab }) {
    this.selectedIndex = payload.index;
    console.log('tab change', payload);
  }
}
