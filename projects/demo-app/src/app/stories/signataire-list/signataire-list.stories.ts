import { Component, Input } from '@angular/core';
import { SignataireItem } from 'projects/design-system/src/lib/components/signataire-list/signataire-list.component';

@Component({
  selector: 'app-signataire-list',
  templateUrl: './signataire-list.stories.html',
})
export class SignataireListStoryComponent {
  @Input() label: string = 'signataire-list';
  @Input() className?: string = '';
  items: SignataireItem[] = [
    {
      label: 'Nom',
      value: 'John Doe',
      dateLabel: 'Date de signature',
      dateValue: '2025-01-01',
    },
    {
      label: 'Nom',
      value: 'John Doe',
      dateLabel: 'Date de signature',
      dateValue: '2025-01-01',
    },
    {
      label: 'Nom',
      value: 'John Doe',
      dateLabel: 'Date de signature',
      dateValue: '2025-01-01',
    },
  ];
}
