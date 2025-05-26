import { Component } from '@angular/core';

@Component({
  selector: 'app-display-value',
  templateUrl: './display-value.stories.html',
})
export class DisplayValueStoryComponent {
  someValue: string = '';
  otherValue: string = '12345';
}
