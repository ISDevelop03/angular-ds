import { Component, Input } from '@angular/core';


export type TAction = {
  actionDate: string;
  actionLabel: string;
  actionAgent: TAgent;
}
export type TAgent = {
  name: string;
  role: string;
}
/**
 * HistoriqueSignataireComponent
 *
 * Live demo:
 * <example-url>/demo/ds-historique-signataire.component.html</example-url>
 */
@Component({
  selector: 'ds-historique-signataire',
  templateUrl: './historique-signataire.component.html',
})
export class HistoriqueSignataireComponent {
  @Input() className?: string = '';
  @Input() title?: string;
  @Input() initiation?: TAction;
  @Input() actions?: TAction[];
}
