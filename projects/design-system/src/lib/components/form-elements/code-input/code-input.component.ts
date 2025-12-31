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
/**
 * CodeInputComponent
 *
 * Live demo:
 * <example-url>/demo/ds-code-input.component.html</example-url>
 */
@Component({
  selector: 'ds-code-input',
  templateUrl: './code-input.component.html',
})
export class CodeInputComponent implements AfterViewInit {
  @Input() id: string;
  @Input() name: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() disabled: boolean = false;
  @Input() value: any = 0;
  @Input() className?: string = '';

  @Output() copied = new EventEmitter<any>();

  @ViewChild('inner', { read: ElementRef }) inner: ElementRef;

  hasProjectedPrefix = false;
  hasProjectedSuffix = false;
  isCopied = false;

  constructor(private host: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const hostAttrs: NamedNodeMap = this.host.nativeElement.attributes;
    for (let i = 0; i < hostAttrs.length; i++) {
      const { name, value } = hostAttrs[i];
      // skip Angular‐internal and any @Inputs you've explicitly declared
      if (
        name === 'class' ||
        name.startsWith('_ng') ||
        this.hasOwnProperty(name)
      )
        continue;
      this.renderer.setAttribute(this.inner.nativeElement, name, value);
    }
  }

  copyToClipboard() {
    if (this.disabled) return;

    navigator.clipboard.writeText(String(this.value)).then(() => {
      this.isCopied = true;
      this.copied.emit(this.value);
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
    });
  }
}
