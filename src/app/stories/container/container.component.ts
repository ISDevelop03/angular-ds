import { Component } from '@angular/core';
import { convertArrayToObject } from 'utils';
import { controls } from './controls';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
})
export class ContainerStoryComponent {
  controls = controls;
  props: any = convertArrayToObject(this.controls);

  isDrawerOpen = true;

  onControlChanged({ name, value }: any): void {
    this.props[name] = value;
  }

  onDrawerClosed(): void {
    this.isDrawerOpen = false;
  }
}
