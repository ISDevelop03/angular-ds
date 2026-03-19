import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.stories.html',
})
export class InputSearchStoryComponent {
  @Input() label: string = 'input-search';
  @Input() className?: string = '';
  searchValue = '';
}
