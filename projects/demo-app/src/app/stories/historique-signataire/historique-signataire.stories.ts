import { Component, Input } from '@angular/core';
import { TAction } from 'projects/design-system/src/lib/components/historique-signataire/historique-signataire.component';

@Component({
  selector: 'app-historique-signataire',
  templateUrl: './historique-signataire.stories.html',
})
export class HistoriqueSignataireStoryComponent {
  @Input() title: string = 'Signataires';
  @Input() className?: string = '';

  initiation: TAction = {
    actionDate: '2025-01-01',
    actionLabel: 'Initiation',
    actionAgent: {
      name: 'John Doe',
      role: 'Initiator',
    },
  };
  actions: TAction[] = [
    {
      actionDate: '2025-01-01',
      actionLabel: 'Action 1',
      actionAgent: {
        name: 'John Doe',
        role: 'Initiator',
      },
    },
    {
      actionDate: '2025-01-01',
      actionLabel: 'Action 1',
      actionAgent: {
        name: 'John Doe',
        role: 'Initiator',
      },
    },
    {
      actionDate: '2025-01-01',
      actionLabel: 'Action 1',
      actionAgent: {
        name: 'John Doe',
        role: 'Initiator',
      },
    },
  ];
}
