import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardVariant } from '../card-visual/card-visual.component';

export interface RechargeCardRowData {
  id: string;
  holder: string;
  numTail: string;
  expiry: string;
  solde: number;
  variant?: CardVariant;
  productName?: string;
}

/**
 * RechargeCardRowComponent — ligne carte pour l'onglet Initiation (recharge Escale PRO)
 *
 * Live demo:
 * <example-url>/demo/ds-recharge-initiation-card-list.component.html</example-url>
 */
@Component({
  selector: 'ds-recharge-card-row',
  templateUrl: './recharge-card-row.component.html',
})
export class RechargeCardRowComponent {
  @Input() card: RechargeCardRowData;
  @Input() productName = 'Escale PRO';
  @Input() actionLabel = 'Recharger';
  @Input() className = '';

  @Output() onOpen = new EventEmitter<RechargeCardRowData>();

  get variant(): CardVariant {
    return (this.card && this.card.variant) || 'escale';
  }

  get positive(): boolean {
    return this.card ? this.card.solde >= 0 : true;
  }

  get resolvedProductName(): string {
    return (this.card && this.card.productName) || this.productName;
  }

  formatMad(n: number): string {
    const sign = n < 0 ? '- ' : '+ ';
    const abs = Math.abs(n)
      .toLocaleString('fr-FR', { useGrouping: true, maximumFractionDigits: 2 })
      .replace(/\u202f/g, ' ');
    return `${sign}${abs} MAD`;
  }

  handleOpen() {
    if (this.card) {
      this.onOpen.emit(this.card);
    }
  }
}
