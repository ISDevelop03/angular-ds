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
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  state,
  AnimationEvent,
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
export class TooltipComponent implements OnInit, OnDestroy, AfterViewChecked, OnChanges {
  @Input() content: TemplateRef<any> | string;
  @Input() position: 'top' | 'topRight' | 'topLeft' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'left' | 'right' = 'top';
  @Input() className?: string = '';
  @Input() disabled: boolean = false;
  @Input() delay: number = 200;
  @Input() theme: any;
  @Input() style: Record<string, string> = {};

  readonly wordLimit = 10;
  isExpanded = false;



  isVisible = false;
  shouldRenderTooltip = false;
  defaultTheme = defaultTheme;
  private timeoutId: any;
  private mouseLeaveTimeoutId: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // Set up the wrapper element
    const nativeElement = this.el.nativeElement;
    this.renderer.setStyle(nativeElement, 'position', 'relative');
    this.renderer.setStyle(nativeElement, 'display', 'inline-block');
  }

  ngAfterViewChecked() {
    this.applyStylesToTooltip();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.content) {
      this.isExpanded = false;
    }
  }

  private applyStylesToTooltip() {
    const tooltipElement = this.el.nativeElement.querySelector('#ds-tooltip');
    if (tooltipElement) {
      for (const key in this.style) {
        if (this.style[key]) {
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

  get contentWordCount(): number {
    if (!this.isStringContent) return 0;
    const trimmed = (this.content as string).trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }

  get isTruncated(): boolean {
    return this.isStringContent && this.contentWordCount > this.wordLimit;
  }

  get displayedContent(): string {
    if (!this.isStringContent) return '';
    const full = this.content as string;
    if (this.isExpanded || !this.isTruncated) return full;
    const words = full.trim().split(/\s+/).slice(0, this.wordLimit);
    return `${words.join(' ')}`;
  }

  toggleExpanded(event: MouseEvent) {
    event.stopPropagation();
    this.isExpanded = !this.isExpanded;
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
    this.mouseLeaveTimeoutId = setTimeout(() => {
      this.clearTimeout();
      this.hideTooltip();
    }, 200);
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
      this.shouldRenderTooltip = true;
      this.isVisible = true;
      this.cdr.detectChanges();
      // Apply styles after tooltip becomes visible
      setTimeout(() => this.applyStylesToTooltip(), 0);
    }
  }

  private hideTooltip() {
    this.isVisible = false;
    this.isExpanded = false;
    this.cdr.detectChanges();
  }

  onTooltipAnimationDone(event: AnimationEvent) {
    if (event.toState === 'hidden') {
      this.shouldRenderTooltip = false;
      this.cdr.detectChanges();
    }
  }

  private clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  onTooltipMouseEnter(event: MouseEvent) {
    console.log('onTooltipMouseEnter', event);
    this.clearMouseLeaveTimeout();
  }

  private clearMouseLeaveTimeout() {
    if (this.mouseLeaveTimeoutId) {
      clearTimeout(this.mouseLeaveTimeoutId);
      this.mouseLeaveTimeoutId = null;
    }
  }
}
