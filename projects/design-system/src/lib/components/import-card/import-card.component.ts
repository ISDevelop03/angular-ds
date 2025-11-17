import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ImportCardAction {
  label: string;
  icon: string;
  onClick: () => void;
}

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
  @Input() actions: ImportCardAction[] = [];
  @Input() icon?: string;
}
