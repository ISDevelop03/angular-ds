import { Component, Input } from '@angular/core';
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

  showAccordion: boolean = false;

  toggleAccordion() {
    this.showAccordion = !this.showAccordion;
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
          icon: 'arrow-down',
          onClick: () => this.toggleAccordion(),
        }) || [];
  }

  getFirstTwoLetters = getFirstTwoLetters;
}
