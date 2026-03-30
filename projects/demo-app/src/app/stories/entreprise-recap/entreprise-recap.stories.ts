import { Component, Input } from '@angular/core';
import { TEntrepriseRecapItems } from 'projects/design-system/src/lib/components/entreprise-recap/entreprise-recap.component';

@Component({
  selector: 'app-entreprise-recap',
  templateUrl: './entreprise-recap.stories.html',
})
export class EntrepriseRecapStoryComponent {
  @Input() label: string = 'entreprise-recap';
  @Input() className?: string = '';
  items: TEntrepriseRecapItems[] = [
    {
      label: 'Entreprise',
      value: 'OCP',
    },
    {
      label: 'Compte émetteur',
      value: {
        account_type: 'Compte courant',
        account_number: '011780000012345678901234',
      },
    },
    {
      label: 'Virement',
      value: 'Mes comptes',
    },
    {
      label: 'Retrait',
      value: 'Mes retraits',
    },

  ];
}
