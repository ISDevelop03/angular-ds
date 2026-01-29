import { Component, Input } from '@angular/core';
/**
 * IllustrationComponent
 *
 * Live demo:
 * <example-url>/demo/ds-illustration.component.html</example-url>
 */
@Component({
  selector: 'ds-illustration',
  templateUrl: './illustration.component.html',
})
export class IllustrationComponent {
  @Input() className?: string = '';
  @Input() src: string = '';
  @Input() size: 'lg' | 'md' | 'sm' | 'xs' = 'lg';

  get dimensions(): {width: number, height: number} {
    return this.size === 'lg' ? 
    {width:300,height:224} : this.size === 'md' ? {width:200,height:126} : this.size === 'sm' ? {width:170,height:127} : {width:120,height:90};
  }
}
