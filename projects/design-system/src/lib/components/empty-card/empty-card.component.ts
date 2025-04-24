import { Component, Input } from '@angular/core';
import { Theme } from './theme';

@Component({
  selector: 'ds-empty-card',
  templateUrl: './empty-card.component.html',
})
export class EmptyCardComponent {
  @Input() title?: string;
  @Input() description!: string;
  @Input() buttonLabel?: string;
  @Input() onClick?: () => void;
  @Input() image!: string;
  @Input() isLoading: boolean = false;

  theme = Theme;

  handleClick(event: Event) {
    if (this.onClick) {
      event.preventDefault();
      this.onClick();
    }
  }
}
