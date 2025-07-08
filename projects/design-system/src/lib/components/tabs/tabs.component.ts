import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { theme } from './theme';

export interface ITab {
  title: string;
  panel: string | TemplateRef<any>;
  href?: string;
  disabled?: boolean;
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
  @Input() className: string = '';
  @Input() variant: keyof typeof theme = 'default';

  @Output() onSelect = new EventEmitter<any>();

  @Input() selectedIndex = 0;
  theme = theme;

  selectTab(event: Event, tab: ITab, index: number) {
    if (tab.disabled || tab.href) {
      return;
    }

    this.selectedIndex = index;
    this.onSelect.emit({ event, tab, index });
  }

  isSelected(index: number): boolean {
    return this.selectedIndex === index;
  }

  isTemplate(ref: any): ref is TemplateRef<any> {
    return ref instanceof TemplateRef;
  }
}
