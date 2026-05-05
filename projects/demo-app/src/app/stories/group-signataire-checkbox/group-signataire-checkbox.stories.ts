import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-group-signataire-checkbox',
  templateUrl: './group-signataire-checkbox.stories.html',
})
export class GroupSignataireCheckboxStoryComponent {
  @Input() label: string = 'group-signataire-checkbox';
  @Input() className?: string = '';

  users = ['utilisateur1', 'utilisateur2', 'utilisateur3', 'utilisateur4', 'utilisateur5', 'utilisateur6', 'utilisateur7', 'utilisateur8', 'utilisateur9', 'utilisateur10'];

  checked = true;

  handleToggle(event: boolean) {
    console.log('toggle', event);
  }

  handleChange(event: boolean) {
    console.log('change', event);
  }
}
