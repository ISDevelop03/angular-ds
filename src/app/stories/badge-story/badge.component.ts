import { Component } from '@angular/core';
import { controls } from './controls';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
})
export class BadgeStoryComponent {
  isDrawerOpen = true;

  props = {
    label: 'New',
    icon: 'check', // example icon id
    href: '',
    variant: 'default',
    size: 'sm',
    pill: false,
    className: '',
  };

  controls = controls;

  onDrawerClosed() {
    this.isDrawerOpen = false;
  }

  onControlChanged(event: any) {
    this.props = {
      ...this.props,
      [event.name]: event.value,
    };
  }
}
