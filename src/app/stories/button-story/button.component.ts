// button.component.ts
import { Component } from '@angular/core';
import { controls } from './controls';
import { convertArrayToObject } from 'utils';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonStoryComponent {
  isDrawerOpen = true;

  controls = controls;

  props = convertArrayToObject(controls);

  onButtonClick(event: Event): void {
    console.log('Button clicked!', event);
    alert('Button was clicked!');
  }

  onDrawerClosed(): void {
    this.isDrawerOpen = false;
  }

  onControlChanged(event) {
    console.log('Control changed', event);
    this.props = {
      ...this.props,
      [event.name]: event.value,
    };
  }
}
