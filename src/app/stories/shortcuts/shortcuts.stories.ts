import { Component } from '@angular/core';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.stories.html',
})
export class ShortcutsCardStoryComponent {
  items = [
    {
      icon: 'settings',
      title: 'Settings',
      link: '/settings',
    },
    {
      icon: 'help',
      title: 'Help',
      link: '/help',
    },
    {
      icon: 'plus',
      title: 'Home',
      link: '/home',
      isShortcut: true,
    },
    {
      icon: 'plus',
      title: 'Dashboard',
      link: '/dashboard',
      isShortcut: true,
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
  ];
}
