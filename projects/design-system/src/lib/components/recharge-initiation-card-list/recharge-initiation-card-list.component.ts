import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RechargeCardRowData } from '../recharge-card-row/recharge-card-row.component';

/**
 * RechargeInitiationCardListComponent — liste scrollable de cartes (onglet Initiation)
 *
 * Live demo:
 * <example-url>/demo/ds-recharge-initiation-card-list.component.html</example-url>
 */
@Component({
  selector: 'ds-recharge-initiation-card-list',
  templateUrl: './recharge-initiation-card-list.component.html',
})
export class RechargeInitiationCardListComponent {
  @Input() cards: RechargeCardRowData[] = [];
  @Input() productName = 'Escale PRO';
  @Input() actionLabel = 'Recharger';
  @Input() className = '';

  @Output() onOpen = new EventEmitter<RechargeCardRowData>();

  open(card: RechargeCardRowData) {
    this.onOpen.emit(card);
  }
}
