import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-price-card',
  templateUrl: './display-price-card.stories.html',
})
export class DisplayPriceCardStoryComponent {
  @Input() label: string = 'display-price-card';

  items = [
    {
      label: 'Price',
      value: '$100.00',
    },
    {
      label: 'Discount',
      value: '$10.00',
      showLine: true,
    },
    {
      label: 'Total',
      value: '$90.00',
    },
  ];

  buttons = [
    {
      text: 'Buy Now',
      className: 'btn-primary',
      onClick: (event: Event) => console.log('Buy Now clicked', event),
      variant: 'primary',
      size: 'normal',
      type: 'button',
      isLoading: true,
      icon: '',
      iconRight: '',
      iconLeft: '',
    },
    {
      text: 'Add to Cart',
      className: 'btn-secondary',
      onClick: (event: Event) => console.log('Add to Cart clicked', event),
      variant: 'secondary',
      size: 'normal',
      type: 'button',
      isLoading: false,
      icon: '',
      iconRight: '',
      iconLeft: '',
    },
  ];
  @Input() className?: string = '';
}
