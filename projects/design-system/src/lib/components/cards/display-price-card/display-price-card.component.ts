import { Component, Input } from '@angular/core';

interface DisplayPriceCardItem {
  label: string;
  value: string;
  showLine?: boolean;
}

interface ButtonItem {
  text: string;
  className: string;
  onClick: (event: Event) => void;
  variant: string;
  size: string;
  type: 'submit' | 'button' | 'reset';
  isLoading: boolean;
  icon: string;
  iconRight: string;
  iconLeft: string;
}
/**
 * DisplayPriceCardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-display-price-card.component.html</example-url>
 */
@Component({
  selector: 'ds-display-price-card',
  templateUrl: './display-price-card.component.html',
})
export class DisplayPriceCardComponent {
  @Input() text: string = '';
  @Input() price: string = '';
  @Input() icon: string = 'receipt-lines';
  @Input() items: DisplayPriceCardItem[] = [];
  @Input() buttons: ButtonItem[] = [];
  @Input() className?: string = '';

  @Input() data?: any;
}
