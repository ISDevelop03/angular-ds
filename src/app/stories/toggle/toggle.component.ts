import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
})
export class ToggleStoryComponent {
  state = false;

  handleChange(newValue: boolean) {
    this.state = newValue;
    console.log('Toggled to:', newValue);
  }
}
