// Component (pin-input.component.ts)
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-pin-input',
  templateUrl: './pin-input.component.html',
})
export class PinInputComponent {
  @Input() isCodeHidden: boolean = false;
  @Input() codeLength: number = 4;
  @Input() isCharsCode = false;
  @Input() inputType: 'text' | 'tel' | 'password' = 'tel';
  @Input() isPrevFocusableAfterClearing: boolean = false;
  @Input() isFocusingOnLastByClickIfFilled: boolean = false;
  @Input() initialFocusField: number = 0;
  @Input() code: number | string = '';
  @Input() disabled: boolean = false;
  @Input() autocapitalize: string = '';

  @Output() onCodeChanged = new EventEmitter();
  @Output() onCodeCompleted = new EventEmitter();
}
