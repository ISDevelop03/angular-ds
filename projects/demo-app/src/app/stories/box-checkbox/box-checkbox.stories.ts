import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-checkbox',
  templateUrl: './box-checkbox.stories.html',
})
export class BoxCheckboxStoryComponent {
  @Input() label: string = 'box-checkbox';
  @Input() className?: string = '';

  checked: boolean = false;

  toggleChecked() {
    this.checked = !this.checked;
  }

  onCheckboxChange() {
    this.checked = !this.checked;
  }
}
