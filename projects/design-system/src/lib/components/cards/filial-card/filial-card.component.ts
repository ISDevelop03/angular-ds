import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  onClick() {
    const item = {
      icon: this.icon,
      sector: this.sector,
      name: this.name,
      id: this.id,
    };
    this.setSelected.emit(item);
  }
}
