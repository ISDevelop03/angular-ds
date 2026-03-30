import { Component, Input } from '@angular/core';

type TAccount = {
  account_type: string;
  account_number: string;
}
export type TEntrepriseRecapItems = {
  label: string;
  value: string | number | TAccount;
};
/**
 * EntrepriseRecapComponent
 *
 * Live demo:
 * <example-url>/demo/ds-entreprise-recap.component.html</example-url>
 */
@Component({
  selector: 'ds-entreprise-recap',
  templateUrl: './entreprise-recap.component.html',
})
export class EntrepriseRecapComponent {
  @Input() className?: string = '';
  @Input() items: TEntrepriseRecapItems[] = [];

  isScalarValue(value: string | number | TAccount): value is string | number {
    return typeof value === 'string' || typeof value === 'number';
  }

  asAccount(value: string | number | TAccount): TAccount | null {
    return this.isScalarValue(value) ? null : value;
  }
}
