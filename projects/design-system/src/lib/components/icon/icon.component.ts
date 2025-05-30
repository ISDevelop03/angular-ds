import { Component, Input } from '@angular/core';

/**
 * IconComponent
 *
 * Live demo:
 * <example-url>/demo/ds-icon.component.html</example-url>
 */
@Component({
  selector: 'ds-icon',
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      [ngClass]="class"
      [style]="style"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use [attr.href]="'/assets/icons.svg#' + id" class="fill-current"></use>
    </svg>
  `,
})
export class IconComponent {
  @Input() id: string;
  @Input() size: string = '1rem';
  @Input() class: string = '';
  @Input() style: string = '';
}
