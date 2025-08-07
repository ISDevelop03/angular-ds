import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-import-card',
  templateUrl: './import-card.stories.html',
})
export class ImportCardStoryComponent {
  @Input() label: string = 'import-card';
  @Input() className?: string = '';
  actionsList = [
    {
      label: 'Edit',
      icon: 'pen',
      onClick: () => console.log("okklk"),
    },
    {
      label: 'Remove',
      icon: 'trash',
      onClick: () => console.log("okklk"),
    },
  ]
}
