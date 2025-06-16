import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  Renderer2,
  AfterViewInit,
} from '@angular/core';
import { input } from './theme';

/**
 * InputComponent
 *
 * Live demo:
 * <example-url>/demo/ds-input.component.html</example-url>
 */
@Component({
  selector: 'ds-input',
  templateUrl: './input.component.html',
})
export class DsInputComponent implements AfterViewInit {
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
