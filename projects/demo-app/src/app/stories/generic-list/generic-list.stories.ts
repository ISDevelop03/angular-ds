import { Component, Input } from '@angular/core';
import { GenericListSection } from 'projects/design-system/src/lib/components/generic-list/generic-list.component';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.stories.html',
})
export class GenericListStoryComponent {
  @Input() label: string = 'generic-list';
  @Input() className?: string = '';

  inlineSections: GenericListSection[] = [
    {
      title: 'Informations générales',
      display: 'inline',
      items: [
        { label: 'Référence', value: 'VIR-2026-00482', type: 'text' },
        { label: 'Statut', value: 'En attente de signature', type: 'text' },
        { label: 'Montant', value: '125 000,00 MAD', type: 'text' },
      ],
    },
    {
      title: 'Compte débiteur',
      display: 'inline',
      items: [
        {
          label: 'Compte',
          type: 'account',
          value: {
            accountName: 'Courant Compte N2',
            accountNumber: '007 780 00012345678 00',
          },
        },
        { label: 'Titulaire', value: 'Société Atlas Trading SARL', type: 'text' },
        { label: 'Devise', value: 'MAD', type: 'text' },
      ],
    },
    {
      title: 'Signataires',
      display: 'inline',
      items: [
        {
          label: 'Signataires requis',
          value: ['John Doe', 'Jane Doe', 'Karim Benali'],
          type: 'list-badges',
        },
        { label: 'Déjà signé', value: ['John Doe'], type: 'list-badges' },
        {
          label: 'En attente',
          value: ['Jane Doe', 'Karim Benali'],
          type: 'list-badges',
        },
      ],
    },
  ];

  stackedSections: GenericListSection[] = [
    {
      title: 'Informations générales',
      display: 'stacked',
      items: [
        { label: 'Référence', value: 'VIR-2026-00482', type: 'text' },
        { label: 'Statut', value: 'En attente de signature', type: 'text' },
        { label: 'Montant', value: '125 000,00 MAD', type: 'text' },
      ],
    },
    {
      title: 'Compte débiteur',
      display: 'stacked',
      items: [
        {
          label: 'Compte',
          type: 'account',
          value: {
            accountName: 'Courant Compte N2',
            accountNumber: '007 780 00012345678 00',
          },
        },
        { label: 'Titulaire', value: 'Société Atlas Trading SARL', type: 'text' },
        { label: 'Devise', value: 'MAD', type: 'text' },
      ],
    },
    {
      title: 'Signataires',
      display: 'stacked',
      items: [
        {
          label: 'Signataires requis',
          value: ['John Doe', 'Jane Doe', 'Karim Benali'],
          type: 'list-badges',
        },
        { label: 'Déjà signé', value: ['John Doe'], type: 'list-badges' },
        {
          label: 'En attente',
          value: ['Jane Doe', 'Karim Benali'],
          type: 'list-badges',
        },
      ],
    },
  ];
}
