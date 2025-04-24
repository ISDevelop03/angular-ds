import { Component } from '@angular/core';
import { convertArrayToObject } from 'utils';
import { controls } from './controls';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
})
export class HeadingStoryComponent {
  controls = controls;
  props = convertArrayToObject(this.controls);
  isDrawerOpen = true;

  onControlChanged({ name, value }: any): void {
    this.props[name] = value;
  }

  onDrawerClosed(): void {
    this.isDrawerOpen = false;
  }
}
