import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-holder',
  templateUrl: './dropdown-holder.stories.html',
})
export class DropdownHolderStoryComponent {
  @Input() label: string = 'dropdown-holder';
  @Input() className?: string = '';

  isOpen = false;

  toggleDropdown(open: boolean): void {
    this.isOpen = open;
  }
}
