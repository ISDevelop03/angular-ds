import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
})
export class BadgeStoryComponent {
  variants = [
    'default',
    'active',
    'base',
    'primary',
    'info',
    'danger',
    'warning',
    'success',
    'indigo',
    'purple',
    'pink',
    'recommanded',
    'outline',
  ];

  sizes = ['sm', 'md', 'lg', 'badge'];
}
