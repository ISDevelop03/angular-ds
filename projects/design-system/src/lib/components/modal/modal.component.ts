import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
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
export class ModalComponent
  implements AfterViewInit, AfterContentChecked, OnChanges {
  @Input() isShown: boolean = false;
  @Input() icon?: string = '';
  @Input() type?: 'success' | 'warning' | 'error' | 'info' = 'info';
  @Input() title?: string;
  @Input() description?: string;
  @Input() mainAction?: string;
  @Input() isMainActionDisabled?: boolean
  @Input() secondaryAction?: string;
  @Input() isSecondaryActionDisabled?: boolean
  @Input() className?: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() mainActionOnClick = new EventEmitter<void>();
  @Output() secondaryActionOnClick = new EventEmitter<void>();

  @ViewChild('contentContainer') contentContainer?: ElementRef<HTMLElement>;

  hasProjectedContent: boolean = false;
  theme = theme;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isShown']) {
      if (changes['isShown'].currentValue) {
        setTimeout(() => {
          this.updateProjectedContentPresence();
          this.cdr.markForCheck();
        });
      } else {
        this.hasProjectedContent = false;
      }
    }
  }

  ngAfterViewInit() {
    this.updateProjectedContentPresence();
  }

  ngAfterContentChecked() {
    if (this.isShown) {
      this.updateProjectedContentPresence();
    }
  }

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

  private updateProjectedContentPresence() {
    if (!this.contentContainer) {
      return;
    }

    const contentElement = this.contentContainer.nativeElement;
    const hasContent =
      contentElement.childElementCount > 0 || (contentElement.textContent).trim().length > 0;

    if (this.hasProjectedContent !== hasContent) {
      this.hasProjectedContent = hasContent;
    }
  }
}
