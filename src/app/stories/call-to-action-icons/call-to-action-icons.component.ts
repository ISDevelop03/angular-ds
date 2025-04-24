import { Component } from '@angular/core';
import { controls } from './controls';
import { convertArrayToObject } from 'utils';

@Component({
  selector: 'app-call-to-action-icons',
  templateUrl: './call-to-action-icons.component.html',
})
export class CallToActionIconsStoryComponent {
  isDrawerOpen = true;
  controls = controls;
  props: any = convertArrayToObject(this.controls);

  onControlChanged({ name, value }: { name: string; value: any }) {
    this.props[name] = value;
  }

  onDrawerClosed() {
    this.isDrawerOpen = false;
  }
}
