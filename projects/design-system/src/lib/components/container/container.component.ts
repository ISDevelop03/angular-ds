import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { variants } from './theme';

@Component({
  selector: 'ds-container',
  templateUrl: './container.component.html',
})
export class DsContainerComponent implements OnChanges {
  @Input() layout: keyof typeof variants.container = 'base';
  @Input() spacing: keyof typeof variants.spacing = 'base';
  @Input() bgPadding: keyof typeof variants.background = 'none';
  @Input() className = '';
  @Input() style: any;

  computedClass = '';

  ngOnChanges(changes: SimpleChanges): void {
    this.updateClass();
  }

  private updateClass(): void {
    const layoutClass = variants.container[this.layout] || '';
    const spacingClass = variants.spacing[this.spacing] || '';
    const bgClass = variants.background[this.bgPadding] || '';

    this.computedClass = [layoutClass, spacingClass, bgClass, this.className]
      .filter(Boolean)
      .join(' ');
  }
}
