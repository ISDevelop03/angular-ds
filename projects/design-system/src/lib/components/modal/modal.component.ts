import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { theme } from './theme';
/**
 * ModalComponent
 *
 * Live demo:
 * <example-url>/demo/ds-modal.component.html</example-url>
 */
@Component({
  selector: 'ds-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() isShown: boolean = false;
  @Input() icon?: string = '';
  @Input() type?: 'success' | 'warning' | 'error' | 'info' = 'info';
  @Input() title?: string;
  @Input() description?: string;
  @Input() mainAction?: string;
  @Input() secondaryAction?: string;
  @Input() className?: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() mainActionOnClick = new EventEmitter<void>();
  @Output() secondaryActionOnClick = new EventEmitter<void>();

  theme = theme;

  @HostListener('document:keydown.escape', ['$event'])
  onEscPressed(_event: KeyboardEvent) {
    if (this.isShown) {
      this.close.emit();
    }
  }

  onClose() {
    this.isShown = false;
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
      this.close.emit();
    }
  }

  onSecondaryActionOnClick() {
    this.secondaryActionOnClick.emit();
  }

  onMainActionOnClick() {
    this.mainActionOnClick.emit();
  }
}
