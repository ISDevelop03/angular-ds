import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  HostListener,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';
import { defaultTheme } from './theme';

/**
 * TooltipComponent
 *
 * Live demo:
 * <example-url>/demo/ds-tooltip.component.html</example-url>
 */
@Component({
  selector: 'ds-tooltip',
  templateUrl: './tooltip.component.html',
  animations: [
    trigger('tooltipAnim', [
      state('hidden', style({ opacity: 0, transform: 'scale(0.95)' })),
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      transition('hidden => visible', [
        animate('150ms ease-out'),
      ]),
      transition('visible => hidden', [
        animate('100ms ease-in'),
      ]),
    ]),
  ],
})
export class TooltipComponent implements OnInit, OnDestroy, AfterViewChecked {
  @Input() content: TemplateRef<any> | string;
  @Input() position: 'top' | 'topRight' | 'topLeft' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'left' | 'right' = 'top';
  @Input() className?: string = '';
  @Input() disabled: boolean = false;
  @Input() delay: number = 200;
  @Input() theme: any;
  @Input() style: Record<string, string> = {};

  

  isVisible = false;
  defaultTheme = defaultTheme;
  private timeoutId: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Set up the wrapper element
    const nativeElement = this.el.nativeElement;
    this.renderer.setStyle(nativeElement, 'position', 'relative');
    this.renderer.setStyle(nativeElement, 'display', 'inline-block');
  }

  ngAfterViewChecked() {
    this.applyStylesToTooltip();
  }

  private applyStylesToTooltip() {
    const tooltipElement = this.el.nativeElement.querySelector('#ds-tooltip');
    if (tooltipElement) {
      for(const key in this.style) {
        if(this.style[key]) {
          this.renderer.setStyle(tooltipElement, key, this.style[key]);
        }
      }
    }
  }

  ngOnDestroy() {
    this.clearTimeout();
  }

  // Use the provided theme or fall back to the default one
  get appliedTheme() {
    return this.theme || this.defaultTheme;
  }

  // Compute the CSS class string
  get computedClass(): string {
    const theme = this.appliedTheme;
    const classes = [];

    classes.push(theme.base);
    classes.push(theme.positions[this.position]);
    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  get animationState(): string {
    return this.isVisible ? 'visible' : 'hidden';
  }

  get arrowClass(): string {
    const theme = this.appliedTheme;
    return `${theme.arrow.base} ${theme.arrow.positions[this.position]}`;
  }

  get isStringContent(): boolean {
    return typeof this.content === 'string';
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    if (!this.disabled) {
      this.clearTimeout();
      this.timeoutId = setTimeout(() => {
        this.showTooltip();
      }, this.delay);
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.clearTimeout();
    this.hideTooltip();
  }

  @HostListener('focusin', ['$event'])
  onFocusIn(event: FocusEvent) {
    if (!this.disabled) {
      this.clearTimeout();
      this.timeoutId = setTimeout(() => {
        this.showTooltip();
      }, this.delay);
    }
  }

  @HostListener('focusout', ['$event'])
  onFocusOut(event: FocusEvent) {
    this.clearTimeout();
    this.hideTooltip();
  }

  private showTooltip() {
    if (!this.disabled) {
      this.isVisible = true;
      this.cdr.detectChanges();
      // Apply styles after tooltip becomes visible
      setTimeout(() => this.applyStylesToTooltip(), 0);
    }
  }

  private hideTooltip() {
    this.isVisible = false;
    this.cdr.detectChanges();
  }

  private clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
}
