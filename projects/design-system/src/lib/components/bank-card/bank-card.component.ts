import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardVariant } from '../card-visual/card-visual.component';

const DEFAULT_DESCRIPTION =
  "La carte Visa Business est une solution innovante, vous permettant d'optimiser vos " +
  'dépenses au Maroc et à l\'étranger et vous faire bénéficier de plafonds larges et ' +
  'personnalisables, en dirhams et en devises.';

const ALT_BY_VARIANT: { [key: string]: string } = {
  business: 'Carte VISA Platinum Business',
  deposit: 'Carte Global Deposit VISA',
  escale: 'Carte Escale Pro VISA',
};

const FALLBACK_BY_VARIANT: { [key: string]: { gradient: string; accent: string; label: string; sub: string } } = {
  business: {
    gradient: 'bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900',
    accent: 'bg-red-500',
    label: 'Business',
    sub: 'VISA Platinum',
  },
  deposit: {
    gradient: 'bg-gradient-to-br from-crame-200 via-crame-100 to-amber-100',
    accent: 'bg-amber-600',
    label: 'Deposit',
    sub: 'VISA',
  },
  escale: {
    gradient: 'bg-gradient-to-br from-success-600 via-success-500 to-green-700',
    accent: 'bg-success-600',
    label: 'Escale Pro',
    sub: 'VISA',
  },
};

/**
 * BankCardComponent — carte sélectionnable (commande de cartes)
 *
 * Live demo:
 * <example-url>/demo/ds-bank-card.component.html</example-url>
 */
@Component({
  selector: 'ds-bank-card',
  templateUrl: './bank-card.component.html',
})
export class BankCardComponent {
  @Input() variant: CardVariant = 'business';
  @Input() label = '';
  @Input() description = DEFAULT_DESCRIPTION;
  /** When true, shows the active (red) border and radio dot. */
  @Input() selected = false;
  /** Optional product image. When omitted, a CSS fallback by variant is shown. */
  @Input() imageSrc: string | null = null;
  @Input() alt: string | null = null;
  @Input() className = '';

  @Output() onSelect = new EventEmitter<CardVariant>();

  get resolvedAlt(): string {
    return this.alt || ALT_BY_VARIANT[this.variant] || ALT_BY_VARIANT['business'];
  }

  get fallback() {
    return FALLBACK_BY_VARIANT[this.variant] || FALLBACK_BY_VARIANT['business'];
  }

  select() {
    this.onSelect.emit(this.variant);
  }
}
