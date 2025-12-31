import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.stories.html',
})
export class CodeInputStoryComponent {
  @Input() label: string = 'code-input';
  @Input() className?: string = '';

  code = 62475;

  handleInputChange(event: any) {
    this.code = event.target.value;
  }
}
