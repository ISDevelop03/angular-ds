import { Component } from '@angular/core';
import { controls } from './controls';
import { convertArrayToObject } from 'utils';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
})
export class AvatarStoryComponent {
  isDrawerOpen = true;

  controls = controls;

  props = convertArrayToObject(controls);

  onDrawerClosed() {
    this.isDrawerOpen = false;
  }

  onControlChanged(event: { name: string; value: any }) {
    console.log('Controls changed', event);
    this.props[event.name] = event.value;
  }
}
