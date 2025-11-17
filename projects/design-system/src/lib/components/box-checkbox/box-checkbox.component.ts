import { Component, Input, TemplateRef } from '@angular/core';
/**
 * BoxCheckboxComponent
 *
 * Live demo:
 * <example-url>/demo/ds-box-checkbox.component.html</example-url>
 */
@Component({
  selector: 'ds-box-checkbox',
  templateUrl: './box-checkbox.component.html',
})
export class BoxCheckboxComponent {
  @Input() className?: string = '';
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label?: string;
  @Input() tooltip?: string | TemplateRef<any>;
  @Input() change: () => void = () => {};
}
