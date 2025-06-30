import { Component, Input, OnInit } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

/**
 * Account-grid-holding-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-account-grid-holding-card.component.html</example-url>
 */
@Component({
  selector: 'ds-account-grid-holding-card',
  templateUrl: './account-grid-holding-card.component.html',
})
export class DsAccountGridHoldingCardComponent implements OnInit {
  @Input() id: any;
  @Input() title: string;
  @Input() accountNumber: number;
  @Input() currency: string;
  @Input() soldeComptable: number;
  @Input() soldeReel: number;
  @Input() actionsList?: ICallToActionIcon[] = [];
  @Input() editLink?: string;
  @Input() className?: string = '';
  @Input() isDiscrete: boolean = false;
  @Input() data?: any;
  @Input() copyToClipboard?: (accountNumber: number) => void;

  ngOnInit() {
    this.actionsList =
      this.actionsList
        .map((action) => ({
          ...action,
          onClick: (event: any) =>
            action.onClick && action.onClick({ data: this.data, event: event }),
          dropdownItems: action.dropdownItems
            ? action.dropdownItems.map((item) => ({
                ...item,
                onClick: (event: any) =>
                  item.onClick &&
                  item.onClick({ data: this.data, event: event }),
              }))
            : null,
        }))
        .concat({
          icon: 'arrow-down',
          onClick: () => this.toggleAccordion(),
          dropdownItems: null,
        }) || [];
  }

  showAccordion: boolean = false;

  toggleAccordion() {
    this.showAccordion = !this.showAccordion;
  }
}
