import { Component, Input } from '@angular/core';
import { theme } from './theme';

@Component({
  selector: 'ds-tabs',
  templateUrl: './tabs.component.html',
})
export class DsTabsComponent {
  @Input() items: { title: string; panel: any }[] = [];
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
}
