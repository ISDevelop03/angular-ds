import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  Renderer2,
  AfterViewInit,
  forwardRef,
  TemplateRef,
} from '@angular/core';
import { input } from './theme';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * InputComponent
 *
 * Live demo:
 * <example-url>/demo/ds-input.component.html</example-url>
 */
@Component({
  selector: 'ds-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DsInputComponent),
      multi: true,
    },
  ],
})
export class DsInputComponent implements AfterViewInit, ControlValueAccessor {
  @Input() id: string;
  @Input() name: string;
  @Input() label?: string;
  @Input() variant: keyof typeof input = 'default';
  @Input() display?: 'inline' | 'block' = 'block';
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
  @Input() className?: string = '';
  @Input() inputClassName?: string = '';
  @Input() tooltip?: string | TemplateRef<any>;

  @Output() onClick = new EventEmitter<Event>();
  @Output() onInput = new EventEmitter<Event>();
  @Output() onChange = new EventEmitter<Event>();
  @Output() onFocus = new EventEmitter<FocusEvent>();
  @Output() onBlur = new EventEmitter<FocusEvent>();
  @Output() onKeydown = new EventEmitter<KeyboardEvent>();
  @Output() onKeyup = new EventEmitter<KeyboardEvent>();
  @Output() onEnter = new EventEmitter<KeyboardEvent>();
  @Output() onEscape = new EventEmitter<KeyboardEvent>();
  @Output() onPaste = new EventEmitter<ClipboardEvent>();
  @Output() onSelect = new EventEmitter<UIEvent>();

  @ViewChild('inner', { read: ElementRef }) inner: ElementRef;

  input = input;

  hasProjectedPrefix = false;
  hasProjectedSuffix = false;

  constructor(private host: ElementRef, private renderer: Renderer2) {}

  // these will be filled in by Angular
  private _onChange: (value: any) => void = () => {};
  private _onTouched: () => void = () => {};

  // -----------------------------------------------------
  // ControlValueAccessor methods
  // -----------------------------------------------------
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // -----------------------------------------------------
  // Hook into your native <input> events
  // -----------------------------------------------------
  onNativeInput(event: Event) {
    const v = (event.target as HTMLInputElement).value;
    this.value = v;
    this._onChange(v); // notify Angular forms
    this.onInput.emit(event); // still emit your public output
  }

  onNativeBlur(event: FocusEvent) {
    this._onTouched();
    this.onBlur.emit(event);
  }

  ngAfterViewInit() {
    const hostAttrs: NamedNodeMap = this.host.nativeElement.attributes;
    for (let i = 0; i < hostAttrs.length; i++) {
      const { name, value } = hostAttrs[i];
      // skip Angular‐internal and any @Inputs you’ve explicitly declared
      if (
        name === 'class' ||
        name.startsWith('_ng') ||
        this.hasOwnProperty(name)
      )
        continue;
      this.renderer.setAttribute(this.inner.nativeElement, name, value);
    }
  }
}
