import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.stories.html',
})
export class TextareaStoryComponent {
  textValue: string = '';
  tooltip: string = 'This is a tooltip';

  onTextAreaChange(newValue: string) {
    this.textValue = newValue;
  }
}
