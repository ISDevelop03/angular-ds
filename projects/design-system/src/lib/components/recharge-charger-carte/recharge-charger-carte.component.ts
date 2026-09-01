import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardVariant } from '../card-visual/card-visual.component';

export interface RechargeChargerCarteTile {
  label: string;
  value: string;
  /** When `green`, value uses success color (e.g. Solde chargé). */
  tint?: 'green';
}

export interface RechargeChargerCarteDetail {
  label: string;
  value: string;
}

export interface RechargeChargerCarteData {
  name: string;
  holder: string;
  numTail: string;
  expiry: string;
  variant: CardVariant;
  /** Optional override for card thumbnail */
  imageSrc?: string;
  tiles?: RechargeChargerCarteTile[];
  details?: RechargeChargerCarteDetail[];
}

/**
 * RechargeChargerCarteComponent — détail carte recharge (Escale PRO) avec Voir plus / moins
 *
 * Live demo:
 * <example-url>/demo/ds-recharge-charger-carte.component.html</example-url>
 */
@Component({
  selector: 'ds-recharge-charger-carte',
  templateUrl: './recharge-charger-carte.component.html',
})
export class RechargeChargerCarteComponent {
  @Input() card: RechargeChargerCarteData;
  @Input() expanded = false;
  @Input() expandLabel = 'Voir plus';
  @Input() collapseLabel = 'Voir moins';
  @Input() className = '';

  @Output() onToggle = new EventEmitter<RechargeChargerCarteData>();

  toggle() {
    this.onToggle.emit(this.card);
  }

  get tiles(): RechargeChargerCarteTile[] {
    return (this.card && this.card.tiles) || [];
  }

  get details(): RechargeChargerCarteDetail[] {
    return (this.card && this.card.details) || [];
  }
}
