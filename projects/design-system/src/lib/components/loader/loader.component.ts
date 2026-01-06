import { Component, Input } from '@angular/core';
/**
 * LoaderComponent
 *
 * Live demo:
 * <example-url>/demo/ds-loader.component.html</example-url>
 */
@Component({
  selector: 'ds-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent {
  @Input() className?: string = '';
  @Input() showLoader: boolean = true;
  @Input() showOverlay: boolean = true;
  @Input() type: 'fill' | 'contained' = 'contained';
}
