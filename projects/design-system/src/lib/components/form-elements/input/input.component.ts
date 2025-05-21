import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef,
  AfterContentInit,
} from '@angular/core';
import { input } from './theme';

@Component({
  selector: 'ds-input',
  templateUrl: './input.component.html',
})
export class DsInputComponent {
  @Input() label?: string;
  @Input() variant: keyof typeof input = 'default';
  @Input() placeholder?: string;
  @Input() prefix?: string;
  @Input() suffix?: string;
  @Input() type: string = 'text';
  @Input() hasError: boolean = false;
  @Input() errorMessage?: string;
  @Input() description?: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() value: any;
  @Input() onClick: (event: PointerEvent) => void = () => {};
  @Output() valueChange = new EventEmitter<any>();

  input = input;

  hasProjectedPrefix = false;
  hasProjectedSuffix = false;

  handleChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
