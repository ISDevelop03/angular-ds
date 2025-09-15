import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-list',
  templateUrl: './total-list.stories.html',
})
export class TotalListStoryComponent {
  @Input() label: string = 'total-list';
  @Input() value: string = '100';
  @Input() icon: string = 'arrange-square';
  @Input() className?: string = '';
}
