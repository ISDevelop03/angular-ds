import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from '../../dropdown/types';

@Component({
  selector: 'ds-account-slider-card',
  templateUrl: './account-slider-card.component.html',
})
export class DsAccountSliderCardComponent {
  @Input() isDiscrete: boolean = false;
  @Input() account_number!: string;
  @Input() balance!: number;
  @Input() currency!: string;
  @Input() type!: string;
  @Input() id?: string;
  @Input() date?: string;
  @Input() isSelected: boolean = false;
  @Input() actionsList: DropdownItem[] = [];
  @Input() className?: string = '';

  @Input() onClick: () => void;
}
