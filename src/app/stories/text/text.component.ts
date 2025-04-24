import { Component } from '@angular/core';
import { convertArrayToObject } from 'utils';
import { controls } from './controls';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
})
export class TextStoryComponent {
  isDrawerOpen = true;

  controls = controls;

  props = convertArrayToObject(this.controls);

  onDrawerClosed() {
    this.isDrawerOpen = false;
  }

  onControlChanged(event: { name: string; value: any }) {
    console.log('Controls event', event);
    this.props[event.name] = event.value;
  }
}
