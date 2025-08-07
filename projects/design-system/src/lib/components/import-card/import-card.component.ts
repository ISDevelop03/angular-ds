import { Component, Input } from '@angular/core';
import { ICallToActionIcon } from '../call-to-action-icons/types';
/**
 * ImportCardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-import-card.component.html</example-url>
 */
@Component({
  selector: 'ds-import-card',
  templateUrl: './import-card.component.html',
})
export class ImportCardComponent {
  @Input() className?: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() actionsList: ICallToActionIcon[] = [];
}
