import { Component, Input } from '@angular/core';

export interface SignataireItem {
  label: string;
  value: string;
  dateLabel: string;
  dateValue: string;
}
/**
 * SignataireListComponent
 *
 * Live demo:
 * <example-url>/demo/ds-signataire-list.component.html</example-url>
 */
@Component({
  selector: 'ds-signataire-list',
  templateUrl: './signataire-list.component.html',
})
export class SignataireListComponent {
  @Input() items: any[] = [];
}
