import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { theme } from './theme';

@Component({
  selector: 'ds-heading',
  templateUrl: './heading.component.html',
})
export class DsHeadingComponent implements OnChanges {
  @Input() variant: keyof typeof theme = 'default';
  @Input() textVariant: string = '';
  @Input() className = '';
  @Input('as') tagName: string = 'div';
  @Input() icon: string | null = null;
  @Input() title: string | null = null;
  @Input() titleClassName = '';
  @Input() separator = false;

  computedContainerClass = '';
  computedTextClass = '';
  computedSeparatorClass = '';
  finalTextVariant = '';

  ngOnChanges(changes: SimpleChanges): void {
    const currentTheme = theme[this.variant] || theme.default;

    this.computedContainerClass = [currentTheme.container, this.className]
      .filter(Boolean)
      .join(' ');

    this.computedTextClass = [currentTheme.text, this.titleClassName]
      .filter(Boolean)
      .join(' ');

    this.finalTextVariant = currentTheme.textVariant || this.textVariant;

    this.computedSeparatorClass = currentTheme.separator || '';
  }
}
