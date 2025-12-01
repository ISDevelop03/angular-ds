import { Component, Input, SimpleChanges } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';
import { getFirstTwoLetters } from '../../../utils';

/**
 * Account-filial-holding-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-account-filial-holding-card.component.html</example-url>
 */
@Component({
  selector: 'ds-account-filial-holding-card',
  templateUrl: './account-filial-holding-card.component.html',
})
export class DsAccountFilialHoldingCardComponent {
  @Input() id: any;
  @Input() title: string;
  @Input() image: string;
  @Input() className?: string = '';

  @Input() data?: any;

  @Input() actionsList?: ICallToActionIcon[] = [];

  _showAccordion: boolean = false;
  showAccordionIcon: 'arrow-down' | 'arrow-up' = 'arrow-down';

  toggleAccordion() {
    this.showAccordion = !this._showAccordion;
    this.showAccordionIcon = this._showAccordion ? 'arrow-up' : 'arrow-down';
  }

  set showAccordion(value: boolean) {
    this._showAccordion = value;
    this.showAccordionIcon = this._showAccordion ? 'arrow-up' : 'arrow-down';
    this.actionsList = this.actionsList.map((action, index) => {
      if (index === this.actionsList.length - 1) {
        return {
          ...action,
          icon: this.showAccordionIcon,
        };
      } else {
        return action;
      }
    });
  }

  ngOnInit() {
    this.actionsList =
      this.actionsList
        .map((action) => ({
          ...action,
          onClick: (event: any) =>
            action.onClick &&
            action.onClick({
              event: event,
              data: this.data,
            }),
        }))
        .concat({
          icon: this.showAccordionIcon,
          onClick: () => this.toggleAccordion(),
        }) || [];
  }

  getFirstTwoLetters = getFirstTwoLetters;
}
