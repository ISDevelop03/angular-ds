import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Portfolio-select-cardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-portfolio-select-card.component.html</example-url>
 */
@Component({
  selector: 'ds-portfolio-select-card',
  templateUrl: './portfolio-select-card.component.html',
})
export class PortfolioSelectCardComponent {
  @Input() title: string = '';
  @Input() reference: string = '';
  @Input() image: string = '';
  @Input() isOpen: boolean = false;
  @Input() className: string = '';

  @Output() click = new EventEmitter<void>();

  handleClick() {
    this.click.emit();
  }
}
