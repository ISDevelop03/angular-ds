import { Component } from '@angular/core';
import { CardVariant } from 'projects/design-system/src/lib/components/card-visual/card-visual.component';

@Component({
  selector: 'app-card-visual',
  templateUrl: './card-visual.stories.html',
})
export class CardVisualStoryComponent {
  variants: CardVariant[] = ['deposit', 'business', 'escale'];

  images: { [key: string]: string } = {
    deposit: 'assets/cards/card-deposit.png',
    business: 'assets/cards/card-business.png',
    escale: 'assets/cards/card-escale.png',
  };
}
