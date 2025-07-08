import { Component, Input } from '@angular/core';
/**
 * SkeletonComponent
 *
 * Live demo:
 * <example-url>/demo/ds-skeleton.component.html</example-url>
 */
@Component({
  selector: 'ds-skeleton',
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent {
  @Input() className?: string = '';
}
