import { Component, Input } from '@angular/core';
import { theme } from './theme';

/**
 * ProgressComponent
 *
 * Live demo:
 * <example-url>/demo/ds-progress.component.html</example-url>
 */
@Component({
  selector: 'ds-progress',
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  @Input() variant: 'neutral' | 'success' | 'warning' | 'error' = 'neutral';
  @Input() type: 'inline' | 'block' = 'block';
  @Input() label?: string;
  @Input() percentage: number = 0;
  @Input() suffix: string = '';
  @Input() total?: number;
  @Input() className?: string = '';

  appliedTheme = theme;

  get calcPercentage(): number {
    if (!this.total) {
      return this.percentage;
    }
    return (this.percentage / this.total) * 100;
  }
}
