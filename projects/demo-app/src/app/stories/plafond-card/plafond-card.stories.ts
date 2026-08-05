import { Component } from '@angular/core';
import { GaugeColor } from 'projects/design-system/src/lib/components/plafond-card/plafond-card.component';

@Component({
  selector: 'app-plafond-card',
  templateUrl: './plafond-card.stories.html',
})
export class PlafondCardStoryComponent {
  colors: GaugeColor[] = ['green', 'orange', 'red', 'olive'];

  onEdit(title: string) {
    console.log('Edit plafond:', title);
  }
}
