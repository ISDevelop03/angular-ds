import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.stories.html',
})
export class ButtonStoryComponent {
  variants = ['primary', 'secondary', 'gray', 'neutral'];
  sizes = ['small', 'normal', 'medium', 'large'];

  handleClick(event: Event): void {
    console.log('Button clicked!', event);
  }
}
