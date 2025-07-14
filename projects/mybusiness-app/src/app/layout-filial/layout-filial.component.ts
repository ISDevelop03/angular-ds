import { Component, Inject, OnInit } from '@angular/core';
import { actions, holding, portfolios } from '../data';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { StateService } from '../../shared/state.service';

type SidebarType = 'main' | 'notifications' | 'messages';

@Component({
  selector: 'app-layout-filial',
  templateUrl: './layout-filial.component.html',
  animations: [
    trigger('slideInOut', [
      // closed → offscreen right, 0 opacity
      state(
        'closed',
        style({ transform: 'translateX(100%)', width: '0px', opacity: 0 })
      ),
      // open → onscreen, full opacity
      state(
        'open',
        style({ transform: 'translateX(0)', width: '400px', opacity: 1 })
      ),
      // animate between them
      transition('closed <=> open', animate('250ms ease-in-out')),
    ]),
  ],
})
export class LayoutFilialComponent implements OnInit {
  openSidebar = false;
  sidebarType: SidebarType = 'main';
  portfolios = portfolios;

  actionsBasic = [
    {
      icon: 'link-external',
      onClick: () => console.log('Star clicked'),
    },
    {
      icon: 'line-chart-up-02',
      onClick: () => console.log('Grid clicked'),
    },
  ];

  holding = holding;

  actions = actions.map((action) => {
    if (action.iconId === 'eye-open') {
      return {
        ...action,
        handler: () => {
          this.state.toggleDiscrete();
        },
      };
    }

    return action;
  });

  constructor(@Inject(StateService) private state: StateService) {}

  ngOnInit() {
    const typeMap: Record<string, SidebarType> = {
      'category-2': 'main',
      'bell-2': 'notifications',
      'messagerie-2': 'messages',
    };

    this.actions = this.actions.map((action) => {
      const target = typeMap[action.iconId];
      if (!target) return action;

      return {
        ...action,
        handler: () => {
          // if clicking the same icon that's already open, close it
          if (this.openSidebar && this.sidebarType === target) {
            this.openSidebar = false;
          } else {
            // otherwise open (or switch) to that panel
            this.openSidebar = true;
            this.sidebarType = target;
          }
        },
      };
    });
  }

  selected = this.portfolios[0];

  onSelect(portfolio: any) {
    this.selected = portfolio;
    console.log('Selected portfolio:', portfolio);
  }

  toggle() {
    this.state.toggleDiscrete();
  }

  // SHORTCUTS

  items = [
    {
      icon: 'home',
      title: 'Recharge de cartes',
      href: '/dashboard',
    },
    {
      icon: 'help',
      title: 'Prélèvement de masse',
      href: '/dashboard',
    },
    {
      icon: 'plus',
      title: 'Ajouter un service favori',
      isShortcut: true,
    },
    {
      icon: 'plus',
      title: 'Ajouter un service favori',
      isShortcut: true,
    },
  ];

  shortcuts = [
    {
      title: 'Recharge de cartes',
      href: '/dashboard',
      isSelected: true,
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'Prélèvement de masse',
      href: '/dashboard',
      isSelected: true,
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'SOGE Cash Net',
      href: '/dashboard',
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'SOGE Trade',
      href: '/dashboard',
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'Settings',
      href: '/dashboard',
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'Help',
      href: '/dashboard',
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
  ];

  // map to get icon by title
  private iconMap: Record<string, string> = {
    'Recharge de cartes': 'home',
    'Prélèvement de masse': 'help',
    'SOGE Cash Net': 'Police',
    'SOGE Trade': 'panne',
    Settings: 'settings',
    Help: 'help',
  };

  onClick(data: any) {
    const { action } = data;
    if (action === 'remove') {
      // replace removed service with add shortcut placeholder
      this.items[data.idx] = {
        icon: 'plus',
        title: 'Ajouter un service favori',
        isShortcut: true,
      };
      // also mark the removed shortcut as unselected
      const sc = this.shortcuts.find((s) => s.title === data.item.title);
      if (sc) {
        sc.isSelected = false;
      }
    } else if (action === 'add') {
      // add selected shortcut at placeholder position
      const { placeholderIdx, shortcut } = data;
      this.items[placeholderIdx] = {
        icon: this.iconMap[shortcut.title] || 'home',
        title: shortcut.title,
        href: shortcut.href,
      };
      // mark as selected in dropdown
      const sc = this.shortcuts.find((s) => s.title === shortcut.title);
      if (sc) {
        sc.isSelected = true;
      }
    } else if (action === 'navigate') {
      console.log('Navigate to:', data.item.link);
    }
  }

  // Currency converter

  currencies = [
    {
      value: 'EUR',
      label: 'Euro',
      image: 'https://placehold.co/18/red/white',
    },
    {
      value: 'MAD',
      label: 'Dirham',
      image: 'https://placehold.co/18/green/white',
    },
    {
      value: 'USD',
      label: 'Dollar',
      image: 'https://placehold.co/18/orange/white',
    },
  ];

  value: number = 1;
  currency: string = this.currencies[0].value;
  value1: number = 10;
  currency1: string = this.currencies[1].value;

  onInput(event) {
    this.value = event.target.valueAsNumber;
  }
}
