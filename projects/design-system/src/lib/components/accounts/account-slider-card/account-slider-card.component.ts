import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

/**
 * Account-slider-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-account-slider-card.component.html</example-url>
 */
@Component({
  selector: 'ds-account-slider-card',
  templateUrl: './account-slider-card.component.html',
})
export class DsAccountSliderCardComponent implements OnInit {
  @Input() isDiscrete: boolean = false;
  @Input() account_number!: string;
  @Input() balance!: number;
  @Input() currency!: string;
  @Input() type!: string;
  @Input() id?: string;
  @Input() date?: string;
  @Input() isSelected: boolean = false;
  @Input() actionsList: ICallToActionIcon[] = [];
  @Input() className?: string = '';

  @Input() data?: any;

  @Output() onClick = new EventEmitter<any>();

  ngOnInit() {
    this.actionsList = this.actionsList.map((action) => ({
      ...action,
      onClick: (event: any) =>
        action.onClick &&
        action.onClick({
          event: event,
          data: this.data,
        }),
    }));
  }

  handleClick(event: any) {
    this.onClick.emit({
      data: this.data,
      event: event,
    });
  }
}
