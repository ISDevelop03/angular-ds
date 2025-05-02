import { Component, Input } from '@angular/core';
import { DropdownItem } from '../../dropdown/types';

@Component({
  selector: 'ds-account-grid-card',
  templateUrl: './account-grid-card.component.html',
})
export class DsAccountGridCardComponent {
  @Input() isDiscrete: boolean = false;
  @Input() account_number!: string;
  @Input() currency!: string;
  @Input() type!: string;
  @Input() solde_comptable?: number;
  @Input() solde_temps_reel?: number;
  @Input() date!: string;
  @Input() actionsList: DropdownItem[] = [];
  @Input() editLink?: string;
  @Input() className?: string;

  showAccordion: boolean = false;

  toggleAccordion() {
    this.showAccordion = !this.showAccordion;
  }
}
