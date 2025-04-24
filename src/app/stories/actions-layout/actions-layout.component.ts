import { Component } from '@angular/core';
import { convertArrayToObject } from 'utils';
import { controls } from './controls';

@Component({
  selector: 'app-actions-layout',
  templateUrl: './actions-layout.component.html',
})
export class ActionsLayoutStoryComponent {
  isDrawerOpen = true;
  controls = controls;

  props: any = convertArrayToObject(controls);

  onDrawerClosed() {
    this.isDrawerOpen = false;
  }

  onControlChanged({ name, value }: any) {
    this.props[name] = value;
  }
}
