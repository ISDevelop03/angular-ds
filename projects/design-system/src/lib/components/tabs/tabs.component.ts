import { Component, Input, TemplateRef } from '@angular/core';
import { theme } from './theme';

export interface ITab {
  title: string;
  panel: string | TemplateRef<any>;
}

/**
 * TabsComponent
 *
 * Live demo:
 * <example-url>/demo/ds-tabs.component.html</example-url>
 */
@Component({
  selector: 'ds-tabs',
  templateUrl: './tabs.component.html',
})
export class DsTabsComponent {
  @Input() items: ITab[] = [];
  @Input() className: string;
  @Input() variant: keyof typeof theme = 'default';

  selectedIndex = 0;
  theme = theme;

  selectTab(index: number) {
    this.selectedIndex = index;
  }

  isSelected(index: number): boolean {
    return this.selectedIndex === index;
  }

  isTemplate(ref: any): ref is TemplateRef<any> {
    return ref instanceof TemplateRef;
  }
}
