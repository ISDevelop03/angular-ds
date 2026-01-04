import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { theme } from './theme';

/**
 * PopupComponent
 *
 * Live demo:
 * <example-url>/demo/ds-popup.component.html</example-url>
 */
@Component({
  selector: 'ds-popup',
  templateUrl: './popup.component.html',
})
export class DsPopupComponent implements OnDestroy {
  @Input() isShown: boolean = false;
  @Input() showModalIcon?: boolean = false;
  @Input() heading?: string;
  @Input() variant: keyof typeof theme.variants = 'modal';
  @Input() className?: string = '';
  @Input() panelClassName?: string = '';
  @Input() isFullScreen?: boolean = false;
  @Input() close: () => void = () => {};

  theme = theme;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  @HostListener('document:keydown.escape', ['$event'])
  onEscPressed(event: KeyboardEvent) {
    if (this.isShown) {
      this.close();
    }
  }

  onClose() {
    this.isShown = false;
    this.close();
  }

  ngOnDestroy() {
    this.removeListeners();
  }

  removeListeners() {
    // Cleanup logic if needed
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
      this.close();
    }
  }

  getAnimationClass(): string {
    if (this.variant === 'slideLeft') {
      return 'animate-slideInLeft';
    } else if (this.variant === 'slideRight') {
      return 'animate-slideInRight';
    } else {
      return 'animate-fadeInScale';
    }
  }
}
