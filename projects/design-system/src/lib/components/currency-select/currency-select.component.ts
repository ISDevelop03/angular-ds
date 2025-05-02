import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface OptionsProps {
  value?: string;
  label?: string;
  symbol: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'ds-currency-select',
  templateUrl: './currency-select.component.html',
})
export class CurrencySelectComponent {
  @Input() value?: number | string;
  @Input() options: OptionsProps[] = [];
  @Output() onChange = new EventEmitter<string>();

  get selectedCurrency(): OptionsProps | undefined {
    return this.options.find((option) => option.value === this.value);
  }

  handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.onChange.emit(selectElement.value);
  }
}
