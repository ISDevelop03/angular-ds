import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.stories.html',
})
export class PriceFilterStoryComponent {
  @Input() label: string = 'price-filter';
  @Input() className?: string = '';

  value: number | null = 1000;
  onSelect(event: any) {
    console.log('onSelect', event);
  }
}
