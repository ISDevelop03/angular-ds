import { Component, Input } from '@angular/core';

export interface FooterMenu {
  title: string;
  href: string;
  image: string;
}
/**
 * FooterComponent
 *
 * Live demo:
 * <example-url>/demo/ds-footer.component.html</example-url>
 */
@Component({
  selector: 'ds-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() leftMenus: FooterMenu[] = [];
  @Input() rightMenus: FooterMenu[] = [];
  @Input() className?: string = '';
}
