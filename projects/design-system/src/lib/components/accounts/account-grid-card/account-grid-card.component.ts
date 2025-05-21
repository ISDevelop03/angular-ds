import { Component, Input } from '@angular/core';
import { DropdownItem } from '../../dropdown/types';

@Component({
  selector: 'ds-account-grid-card',
  templateUrl: './account-grid-card.component.html',
})
export class DsAccountGridCardComponent {
  @Input() isDiscrete: boolean = false;
  @Input() title: string;
  @Input() currency: string;
  @Input() price: number;
  @Input() dateOperation!: string;
  @Input() dateValue!: string;
  @Input() className?: string = '';

  showAccordion: boolean = false;

  toggleAccordion() {
    this.showAccordion = !this.showAccordion;
  }
}
