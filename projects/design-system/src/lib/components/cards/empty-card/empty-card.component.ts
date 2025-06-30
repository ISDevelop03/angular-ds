import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Theme } from './theme';

/**
 * Empty-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-empty-card.component.html</example-url>
 */
@Component({
  selector: 'ds-empty-card',
  templateUrl: './empty-card.component.html',
})
export class EmptyCardComponent {
  @Input() title?: string;
  @Input() description!: string;
  @Input() buttonLabel?: string;
  @Input() image!: string;
  @Input() isLoading: boolean = false;

  @Input() data?: any;

  @Output() onClick = new EventEmitter<any>();

  theme = Theme;

  handleClick(event: Event) {
    event.preventDefault();
    this.onClick.emit({ event: event, data: this.data });
  }
}
