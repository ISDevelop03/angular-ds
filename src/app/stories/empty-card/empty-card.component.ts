import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-card',
  templateUrl: './empty-card.component.html',
})
export class EmptyCardStoryComponent {
  mockData = {
    isLoading: false,
    image: '/assets/search-error.svg',
    description: 'Aucun résultat trouvé.',
    title: 'Aucun résultat',
    buttonLabel: 'Réessayer',
    onClick: () => alert('Retry clicked!'),
  };

  loading = {
    ...this.mockData,
    isLoading: true,
    buttonLabel: 'Chargement...',
  };

  withTitleOnly = {
    image: '/assets/search-error.svg',
    description: 'Contenu introuvable.',
    title: 'Erreur',
  };

  withoutButton = {
    image: '/assets/search-error.svg',
    description: 'Il semble que rien ne corresponde à votre recherche.',
  };
}
