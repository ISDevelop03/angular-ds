import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { textarea } from './theme';

/**
 * TextareaComponent
 *
 * Live demo:
 * <example-url>/demo/ds-textarea.component.html</example-url>
 */
@Component({
  selector: 'ds-textarea',
  templateUrl: './textarea.component.html',
})
export class DsTextareaComponent implements OnChanges {
  @Input() variant: keyof typeof textarea = 'default';
  @Input() placeholder?: string;
  @Input() name?: string;
  @Input() disabled: boolean = false;
  @Input() hasError: boolean = false;
  @Input() errorMessage?: string;
  @Input() description?: string;
  @Input() rows: number = 1;
  @Input() maxLength?: number;
  @Input() resize: boolean = true;
  @Input() label?: string;

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  textarea = textarea;

  ngOnChanges(changes: SimpleChanges) {
    // nothing needed now but structure kept for future extension
  }

  onTextareaChange(event: Event) {
    const input = event.target as HTMLTextAreaElement;
    this.valueChange.emit(input.value);
  }

  get classes() {
    return [
      textarea[this.variant].base,
      this.disabled ? textarea[this.variant].disabled : '',
      this.hasError ? textarea[this.variant].hasError : '',
      this.resize ? '' : textarea[this.variant].resize,
    ].join(' ');
  }
}
