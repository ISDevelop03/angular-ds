import { Component } from '@angular/core';
import { convertArrayToObject } from 'utils';
import { controls } from './controls';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsStoryComponent {
  isDrawerOpen = true;
  controls = controls;
  props = convertArrayToObject(this.controls);

  onDrawerClosed() {
    this.isDrawerOpen = false;
  }

  onControlChanged({ name, value }) {
    this.props[name] = value;
  }
}
