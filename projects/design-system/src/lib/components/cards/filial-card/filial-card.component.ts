import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  getFirstTwoLetters(title: string) {
    const titleWords = title.split(' ');
    return `${titleWords[0][0]}${titleWords[1][0]}`.toUpperCase();
  }
}
