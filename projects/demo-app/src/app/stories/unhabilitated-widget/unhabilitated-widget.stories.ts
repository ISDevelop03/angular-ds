import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unhabilitated-widget',
  templateUrl: './unhabilitated-widget.stories.html',
})
export class UnhabilitatedWidgetStoryComponent {
  @Input() label: string = 'unhabilitated-widget';
  @Input() className?: string = '';

  backgroundImage = 'assets/images/unhabilitated.png';
  modalImage = 'assets/images/search.png';
  title = 'Accès non habilité à cette fonctionnalité';
  description = "Pas d'inquiétude : vos autres services sont disponibles depuis le menu à gauche.";
}
