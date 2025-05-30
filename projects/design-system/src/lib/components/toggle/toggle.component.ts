import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ToggleTheme, Theme } from './theme';

/**
 * ToggleComponent
 *
 * Live demo:
 * <example-url>/demo/ds-toggle.component.html</example-url>
 */
@Component({
  selector: 'ds-toggle',
  templateUrl: './toggle.component.html',
})
export class DsToggleComponent implements OnChanges {
  @Input() variant: keyof typeof ToggleTheme = 'default';
  @Input() className: string = '';
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Output() onChange = new EventEmitter<boolean>();

  enabled = false;
  theme = Theme;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.checked) {
      this.enabled = this.checked;
      this.onChange.emit(this.enabled);
    }
  }

  toggleChecked() {
    if (!this.disabled) {
      this.enabled = !this.enabled;
      this.onChange.emit(this.enabled);
    }
  }
}
