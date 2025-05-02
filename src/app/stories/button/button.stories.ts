import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.stories.html',
})
export class ButtonStoryComponent {
  variants = ['primary', 'secondary', 'green', 'yellow', 'white', 'dark'];
  sizes = ['small', 'normal', 'medium', 'large'];

  onButtonClick(event: Event): void {
    console.log('Button clicked!', event);
    alert('Button was clicked!');
  }
}
