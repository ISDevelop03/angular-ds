import { Component, Input } from '@angular/core';
import { TTransferAmount } from '../virement-card/virement-card.component';

export type TRecapItems = {
  beneficiaryName: string;
  beneficiaryAccountNumber: string;
  motif: string;
  amount: TTransferAmount;
};

/**
 * VirementCardRecapComponent
 *
 * Live demo:
 * <example-url>/demo/ds-virement-card-recap.component.html</example-url>
 */
@Component({
  selector: 'ds-virement-card-recap',
  templateUrl: './virement-card-recap.component.html',
})
export class VirementCardRecapComponent {
  @Input() className?: string = '';
  @Input() items: TRecapItems[] = [];
}
