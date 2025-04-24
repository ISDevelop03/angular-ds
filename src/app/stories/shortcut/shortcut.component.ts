import { Component } from '@angular/core';

@Component({
  selector: 'app-shortcut',
  templateUrl: './shortcut.component.html',
})
export class ShortcutCardStoryComponent {
  shortcuts = [
    {
      icon: 'home',
      title: 'Home',
      link: '/home',
    },
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
      icon: 'element-plus',
      title: 'Dashboard',
      link: '/dashboard',
    },
  ];

  shortcut = this.shortcuts[0]; // Default shortcut for the story
}
