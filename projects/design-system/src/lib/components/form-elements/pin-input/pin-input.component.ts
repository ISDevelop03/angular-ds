// Component (pin-input.component.ts)
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef,
  OnInit,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'ds-pin-input',
  templateUrl: './pin-input.component.html',
})
export class PinInputComponent implements OnInit, AfterViewInit {
  @Input() length = 4;
  @Input() error = '';
  @Input() className: string = '';
  @Input() label = '';
  @Output() pinCodeChange = new EventEmitter<string>();
  @Output() submit = new EventEmitter<void>();

  @ViewChildren('pinInput') inputs!: QueryList<ElementRef>;

  pin: string[] = [];
  isMobile = false;

  ngOnInit() {
    this.pin = Array(this.length).fill('');
    this.checkMobile();
  }

  ngAfterViewInit() {
    this.focusInput(0);
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  private checkMobile() {
    this.isMobile = window.matchMedia('(max-width: 600px)').matches;
  }

  handleInput(event: any, index: number) {
    const value: string = event.target.value;

    // Clear the input first to prevent display issues
    event.target.value = '';

    if (value.length === 0) {
      // Handle deletion
      const newPin = this.pin.slice();
      newPin[index] = '';
      this.updatePin(newPin);
      return;
    }

    // Handle multiple characters (paste scenario)
    if (value.length > 1) {
      const digits = value.replace(/\D/g, '').slice(0, this.length - index);
      const newPin = this.pin.slice();

      for (let i = 0; i < digits.length && index + i < this.length; i++) {
        newPin[index + i] = digits[i];
      }

      this.updatePin(newPin);

      // Focus next empty or last filled
      const nextIndex = Math.min(index + digits.length, this.length - 1);
      setTimeout(() => this.focusInput(nextIndex), 0);
    }
    // Handle single digit
    else {
      const digit = value.replace(/\D/g, '');
      if (digit) {
        const newPin = this.pin.slice();
        newPin[index] = digit;
        this.updatePin(newPin);

        // Move to next input
        if (index < this.length - 1) {
          setTimeout(() => this.focusInput(index + 1), 0);
        }
      }
    }
  }

  handleKeyDown(event: KeyboardEvent, index: number) {
    const key = event.key;

    // Handle backspace
    if (key === 'Backspace') {
      event.preventDefault();
      const newPin = this.pin.slice();

      if (newPin[index]) {
        // Clear current field and stay focused
        newPin[index] = '';
        this.updatePin(newPin);
      } else if (index > 0) {
        // Move to previous field and clear it
        newPin[index - 1] = '';
        this.updatePin(newPin);
        this.focusInput(index - 1);
      }
      // If on first input and it's empty, stay on first input
    }
    // Handle delete key
    else if (key === 'Delete') {
      event.preventDefault();
      const newPin = this.pin.slice();
      newPin[index] = '';
      this.updatePin(newPin);
    }
    // Handle arrow keys
    else if (key === 'ArrowLeft' && index > 0) {
      event.preventDefault();
      this.focusInput(index - 1);
    } else if (key === 'ArrowRight' && index < this.length - 1) {
      event.preventDefault();
      this.focusInput(index + 1);
    }
    // Allow only digits and control keys
    else if (
      !/\d/.test(key) &&
      !['Tab', 'Enter', 'Escape', 'Home', 'End'].includes(key)
    ) {
      event.preventDefault();
    }
  }

  handleFocus(event: any, index: number) {
    // Select all content when focusing
    event.target.select();
  }

  handlePaste(event: ClipboardEvent, index: number) {
    event.preventDefault();
    const pastedText = event.clipboardData
      ? event.clipboardData.getData('text')
      : '';
    const digits = pastedText.replace(/\D/g, '').slice(0, this.length - index);

    if (digits) {
      const newPin = this.pin.slice();

      for (let i = 0; i < digits.length && index + i < this.length; i++) {
        newPin[index + i] = digits[i];
      }

      this.updatePin(newPin);

      // Focus next empty input or last filled
      const nextEmptyIndex = newPin.findIndex((c, i) => i > index && !c);
      const focusIndex =
        nextEmptyIndex >= 0
          ? nextEmptyIndex
          : Math.min(index + digits.length, this.length - 1);

      setTimeout(() => this.focusInput(focusIndex), 0);
    }
  }

  private updatePin(newPin: string[]) {
    this.pin = newPin;
    const code = this.pin.join('');
    this.pinCodeChange.emit(code);

    // Auto-submit on mobile when full
    if (this.isMobile && this.pin.every((d) => d !== '')) {
      this.submit.emit();
    }
  }

  private focusInput(idx: number) {
    if (idx >= 0 && idx < this.length) {
      const inputsArray = this.inputs.toArray();
      if (inputsArray[idx]) {
        inputsArray[idx].nativeElement.focus();
        inputsArray[idx].nativeElement.select();
      }
    }
  }
}
