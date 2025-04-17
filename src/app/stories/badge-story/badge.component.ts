import { Component } from '@angular/core';
import { controls } from './controls';
import { convertArrayToObject } from 'utils';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
})
export class BadgeStoryComponent {
  isDrawerOpen = true;

  props = convertArrayToObject(controls);

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
