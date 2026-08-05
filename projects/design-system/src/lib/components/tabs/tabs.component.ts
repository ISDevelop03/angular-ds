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
  panel: string | TemplateRef<any> | ITab[];
  href?: string;
  link?: string;
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
  @Input() containerClassName: string = '';
  @Input() variant: keyof typeof theme = 'default';
  @Input() rightContent?: TemplateRef<any>;
  @Input() showTabsSeparator: boolean = false;

  @Output() onSelect = new EventEmitter<any>();

  @Input() selectedIndex = 0;
  @Input() selectedSubIndex: number | null = null;

  theme = theme;
  openAccordions: { [key: number]: boolean } = {};

  selectTab(event: Event, tab: ITab, index: number) {
    if (tab.disabled || tab.href) {
      return;
    }

    // Parent with nested items → accordion; sub-items are what get selected
    if (this.isArray(tab.panel)) {
      const opening = !this.isAccordionOpen(index);
      this.toggleAccordion(index);

      // When expanding, select the first enabled child so onSelect fires
      if (opening) {
        const subIndex = tab.panel.findIndex(
          (sub) => !sub.disabled && !sub.href
        );
        if (subIndex >= 0) {
          this.selectSubTab(event, tab, index, tab.panel[subIndex], subIndex);
        }
      }
      return;
    }

    this.selectedIndex = index;
    this.selectedSubIndex = null;
    this.onSelect.emit({ event, tab, index, subIndex: null });
  }

  selectSubTab(
    event: Event,
    parentTab: ITab,
    parentIndex: number,
    subTab: ITab,
    subIndex: number
  ) {
    event.stopPropagation();

    if (parentTab.disabled || subTab.disabled || subTab.href) {
      return;
    }

    this.selectedIndex = parentIndex;
    this.selectedSubIndex = subIndex;
    this.openAccordions[parentIndex] = true;
    this.onSelect.emit({
      event,
      tab: subTab,
      index: parentIndex,
      subIndex,
      parentTab,
    });
  }

  toggleAccordion(index: number) {
    this.openAccordions[index] = !this.openAccordions[index];
  }

  isAccordionOpen(index: number): boolean {
    return !!this.openAccordions[index];
  }

  isSelected(index: number): boolean {
    return this.selectedIndex === index && this.selectedSubIndex === null;
  }

  isParentSelected(index: number): boolean {
    return this.selectedIndex === index;
  }

  isSubSelected(parentIndex: number, subIndex: number): boolean {
    return (
      this.selectedIndex === parentIndex && this.selectedSubIndex === subIndex
    );
  }

  getActivePanel(tab: ITab, index: number): string | TemplateRef<any> | null {
    if (!this.isParentSelected(index)) {
      return null;
    }

    if (this.isArray(tab.panel)) {
      if (this.selectedSubIndex === null) {
        return null;
      }
      const sub = tab.panel[this.selectedSubIndex];
      return sub && !this.isArray(sub.panel)
        ? (sub.panel as string | TemplateRef<any>)
        : null;
    }

    return tab.panel as string | TemplateRef<any>;
  }

  getTabButtonClass(selected: boolean): string {
    const button = this.theme[this.variant].list.tab['button'];
    if (!button || typeof button === 'string') {
      return typeof button === 'string' ? button : '';
    }
    const base = button.base || '';
    const state = selected
      ? button.selected || ''
      : button.unselected || '';
    return [base, state].filter(Boolean).join(' ');
  }

  getAccordionIconId(index: number): string {
    return this.isAccordionOpen(index) ? 'arrow-up' : 'arrow-down';
  }

  isTemplate(ref: any): ref is TemplateRef<any> {
    return ref instanceof TemplateRef;
  }

  isArray(value: any): value is any[] {
    return Array.isArray(value);
  }
}
