import { Component, Input } from '@angular/core';
/**
 * TotalListComponent
 *
 * Live demo:
 * <example-url>/demo/ds-total-list.component.html</example-url>
 */
@Component({
  selector: 'ds-total-list',
  templateUrl: './total-list.component.html',
})
export class TotalListComponent {
  @Input() className?: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
}
