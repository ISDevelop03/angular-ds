import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export type CardVariant = 'deposit' | 'business' | 'escale';

interface VariantStyle {
  alt: string;
  gradient: string;
  accent: string;
  label: string;
  sub: string;
}

const VARIANTS: { [key: string]: VariantStyle } = {
  business: {
    alt: 'Carte VISA Platinum Business',
    gradient: 'bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900',
    accent: 'bg-red-500',
    label: 'Business',
    sub: 'VISA Platinum',
  },
  deposit: {
    alt: 'Carte Global Deposit VISA',
    gradient: 'bg-gradient-to-br from-crame-200 via-crame-100 to-amber-100',
    accent: 'bg-amber-600',
    label: 'Deposit',
    sub: 'VISA',
  },
  escale: {
    alt: 'Carte Escale Pro VISA',
    gradient: 'bg-gradient-to-br from-success-600 via-success-500 to-green-700',
    accent: 'bg-success-600',
    label: 'Escale Pro',
    sub: 'VISA',
  },
};

/**
 * CardVisualComponent — vignette carte bancaire
 *
 * Live demo:
 * <example-url>/demo/ds-card-visual.component.html</example-url>
 */
@Component({
  selector: 'ds-card-visual',
  templateUrl: './card-visual.component.html',
})
export class CardVisualComponent implements OnInit, OnChanges {
  @Input() variant: CardVariant = 'deposit';
  /** When set, renders the image instead of the CSS fallback. */
  @Input() imageSrc: string | null = null;
  @Input() alt: string | null = null;
  @Input() className = '';
  @Input() width = 104;
  @Input() height = 66;

  style: VariantStyle = VARIANTS['deposit'];
  resolvedAlt = '';

  ngOnInit() {
    this.resolve();
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.resolve();
  }

  private resolve() {
    this.style = VARIANTS[this.variant] || VARIANTS['deposit'];
    this.resolvedAlt = this.alt || this.style.alt;
  }
}
