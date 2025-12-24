import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

/**
 * LayerComponent
 *
 * Live demo:
 * <example-url>/demo/ds-layer.component.html</example-url>
 */
@Component({
  selector: 'ds-layer',
  templateUrl: './layer.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-20px)' })
        ),
      ]),
    ]),
  ],
})
export class LayerComponent {
  @Input() className?: string = '';
  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  onClose() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
  }
}
