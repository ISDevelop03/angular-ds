import { Component, Input } from '@angular/core';
import { GenericListItem } from 'projects/design-system/src/lib/components/generic-list/generic-list.component';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.stories.html',
})
export class GenericListStoryComponent {
  @Input() label: string = 'generic-list';
  @Input() className?: string = '';
  items: GenericListItem[] = [
    {
      label: 'Nom',
      value: 'John Doe',
      type: 'text',
    },
    {
      label: 'Compte',
      type: 'account',
      value: {
        accountName: 'Courant Compte N2',
        accountNumber: '007 780 00012345678 00',
      },
    },
    {
      label: 'Signataires',
      value: ['John Doe', 'Jane Doe'],
      type: 'list-badges',
    },
  ];
}
