import { Component } from '@angular/core';
import { convertArrayToObject } from 'utils';
import { controls } from './controls';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbStoryComponent {
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
