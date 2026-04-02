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
 * SchemaSignatureComponent
 *
 * Live demo:
 * <example-url>/demo/ds-schema-signature.component.html</example-url>
 */
@Component({
  selector: 'ds-schema-signature',
  templateUrl: './schema-signature.component.html',
})
export class SchemaSignatureComponent {
  @Input() className?: string = '';
  @Input() title?: string;
  @Input() initiation?: TAction;
  @Input() actions?: TAction[];
}
