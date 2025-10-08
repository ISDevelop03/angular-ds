import { Component } from '@angular/core';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.stories.html',
})
export class ShortcutsCardStoryComponent {
  items = [
    {
      icon: 'home',
      title: 'Recharge de cartes',
      href: '/shortcuts',
      isShortcut: true,
    },
    {
      icon: 'plus',
      title: 'Ajouter un service favori',
      href: '/shortcuts',
    },
    {
      icon: 'plus',
      title: 'Ajouter un service favori',
    },
    {
      icon: 'plus',
      title: 'Ajouter un service favori',
    },
  ];

  shortcuts = [
    {
      title: 'Recharge de cartes',
      href: '/shortcuts',
      isSelected: true,
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'Prélèvement de masse',
      href: '/shortcuts',
      isSelected: true,
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'SOGE Cash Net',
      href: '/shortcuts',
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'SOGE Trade',
      href: '/shortcuts',
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'Settings',
      href: '/shortcuts',
      onClick: (item: any) => {
        console.log('item', item);
      },
    },
    {
      title: 'Help',
      href: '/shortcuts',
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
        href: '/shortcuts',
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
}
