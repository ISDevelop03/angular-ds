import { Component, Input } from '@angular/core';

interface FloatedButton {
  content: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  iconRight?: boolean;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  isDelete?: boolean;
  onClick?: (event: any) => void;
}
/**
 * FloatedButtonsComponent
 *
 * Live demo:
 * <example-url>/demo/ds-floated-buttons.component.html</example-url>
 */
@Component({
  selector: 'ds-floated-buttons',
  templateUrl: './floated-buttons.component.html',
})
export class FloatedButtonsComponent {
  @Input() items: FloatedButton[] = [];
  @Input() className?: string = '';

  isAllItemsDisabled(): boolean {
    return this.items.every((item) => item.disabled);
  }
}
