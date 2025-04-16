// button.component.ts
import { Component } from '@angular/core';
import { controls } from './controls';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonStoryComponent {
  isDrawerOpen = true;

  controls = controls;

  props: any = {
    variant: 'primary',
    size: 'normal',
    disabled: false,
    outline: false,
    pill: false,
    isLoading: false,
    content: 'Click me',
    icon: null,
    iconLeft: 'arrow-left',
    iconRight: 'arrow-right',
  };

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
