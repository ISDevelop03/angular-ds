import { Component, Input } from '@angular/core';

interface IErrorCard {
  label: string;
  value?: string;
  className?: string;
}
/**
 * ErrorCardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-error-card.component.html</example-url>
 */
@Component({
  selector: 'ds-error-card',
  templateUrl: './error-card.component.html',
})
export class ErrorCardComponent {
  @Input() items: IErrorCard[] = [];
  @Input() className?: string = '';
}
