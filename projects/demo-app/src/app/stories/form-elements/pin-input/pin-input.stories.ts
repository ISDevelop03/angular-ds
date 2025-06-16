import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pin-input',
  templateUrl: './pin-input.stories.html',
})
export class PinInputStoryComponent {
  @Input() label: string = 'pin-input';
  @Input() className?: string = '';
}
