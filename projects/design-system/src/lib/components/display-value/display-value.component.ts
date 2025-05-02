import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-display-value',
  templateUrl: './display-value.component.html',
})
export class DsDisplayValueComponent {
  @Input() value: any;
  @Input() className?: string;

  get hasValue(): boolean {
    return !!this.value;
  }
}
