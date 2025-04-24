import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ISelectionItem } from '../types';
import { Theme } from '../theme';

@Component({
  selector: 'ds-portfolio-item',
  templateUrl: './portfolio-item.component.html',
})
export class DsPortfolioItemComponent {
  @Input() id?: string | number;
  @Input() name?: string;
  @Input() image?: string;
  @Input() reference?: string;
  @Input() sector?: string;
  @Input() isActive: boolean = false;
  @Input() noSelected: boolean = false;
  @Input() showList: boolean = false;
  @Input() className?: string;

  @Output() onClick = new EventEmitter<Partial<ISelectionItem>>();

  theme = Theme;

  handleClick() {
    this.onClick.emit({
      id: this.id,
      name: this.name,
      image: this.image,
      reference: this.reference,
      sector: this.sector,
    });
  }
}
