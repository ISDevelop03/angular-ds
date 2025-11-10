import { Component, Input, Output, EventEmitter } from '@angular/core';
import { getFirstTwoLetters } from '../../../utils';

/**
 * Filial-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-filial-card.component.html</example-url>
 */
@Component({
  selector: 'ds-filial-card',
  templateUrl: './filial-card.component.html',
})
export class FilialCardComponent {
  @Input() icon: string;
  @Input() id: number;
  @Input() sector: string;
  @Input() name: string;
  @Input() className?: string = '';
  @Input() useImageBorder: boolean = false;
  @Output() setSelected = new EventEmitter<any>();

  @Input() data?: any;

  onClick(event: Event) {
    this.setSelected.emit({ event: event, data: this.data });
  }
  getFirstTwoLetters = getFirstTwoLetters;
}
