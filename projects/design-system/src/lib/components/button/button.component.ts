import { Component, Input } from '@angular/core';

/**
 * A reusable button component that supports different variants and sizes.
 * 
 * @example
 * ```html
 * <ds-button variant="primary" size="medium">Click me</ds-button>
 * ```
 */
@Component({
  selector: 'ds-button',
  template: `
    <button
      [ngClass]="[
        baseClasses,
        variantClasses[variant],
        sizeClasses[size]
      ]"
      type="button"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  /**
   * The visual style variant of the button
   * @default 'primary'
   */
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * The size of the button which affects padding and font size
   * @default 'medium'
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /** Base Tailwind classes applied to all button variants */
  protected baseClasses = 'inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  /** Classes applied based on variant selection */
  protected variantClasses: Record<string, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    tertiary: 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  /** Classes applied based on size selection */
  protected sizeClasses: Record<string, string> = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
} 