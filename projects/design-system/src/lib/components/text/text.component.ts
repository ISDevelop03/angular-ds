import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { typography } from './theme';

/**
 * TextComponent
 *
 * Live demo:
 * <example-url>/demo/ds-text.component.html</example-url>
 */
@Component({
  selector: 'ds-text',
  template: '',
})
export class DsTextComponent implements OnChanges, AfterViewInit {
  @Input() variant: keyof typeof typography = 'text-base/Regular';
  @Input() tag: string = 'p';
  @Input() className: string = '';
  @Input() content: string = '';

  private tagElement: any;
  private currentTag: string = 'p';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.createElement(); // Initial render
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.tagElement) return;

    // If tag name changed, replace the element
    if (changes['tag'] && changes['tag'].currentValue !== this.currentTag) {
      this.replaceElement();
    } else {
      this.updateElement(); // just update class/content
    }
  }

  private createElement(): void {
    this.currentTag = this.tag || 'p';
    this.tagElement = this.renderer.createElement(this.currentTag);

    this.renderer.appendChild(this.el.nativeElement, this.tagElement);
    this.updateElement();
  }

  private replaceElement(): void {
    if (this.tagElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tagElement);
    }
    this.createElement();
  }

  private updateElement(): void {
    const variantClass = typography[this.variant] || '';
    const allClasses = `${variantClass} ${this.className}`.trim();

    this.renderer.setAttribute(this.tagElement, 'class', allClasses || '');
    this.renderer.setProperty(this.tagElement, 'innerHTML', this.content || '');
  }
}
