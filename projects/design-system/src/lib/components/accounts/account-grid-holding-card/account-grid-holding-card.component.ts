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
  @Input() isDiscrete: boolean = false;
  @Input() title: string;
  @Input() accountNumber: number;
  @Input() currency: string;
  @Input() soldeComptable: number;
  @Input() soldeReel: number;
  @Input() actionsList?: ICallToActionIcon[] = [];
  @Input() editLink?: string;
  @Input() className?: string = '';
  @Input() copyToClipboard?: (accountNumber: number) => void;

  ngOnInit() {
    this.actionsList =
      this.actionsList.concat({
        icon: 'arrow-down',
        onClick: () => this.toggleAccordion(),
      }) || [];
  }

  showAccordion: boolean = false;

  toggleAccordion() {
    this.showAccordion = !this.showAccordion;
  }
}
