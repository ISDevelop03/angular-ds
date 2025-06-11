import { Component, Input } from '@angular/core';
import { ICallToActionIcon } from '../../call-to-action-icons/types';

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
          onClick: () =>
            action.onClick &&
            action.onClick({
              id: this.id,
              title: this.title,
              image: this.image,
              actionsList: this.actionsList,
              className: this.className,
            }),
        }))
        .concat({
          icon: 'arrow-down',
          onClick: () => this.toggleAccordion(),
        }) || [];
  }
}
