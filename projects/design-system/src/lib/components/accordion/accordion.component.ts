import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  TemplateRef,
  SimpleChanges,
} from '@angular/core';
import { theme } from './theme';

export interface AccordionItem {
  id: string;
  title: string;
  caption?: string;
  /** Either a string (HTML) or an Angular `<ng-template>` */
  content: string | TemplateRef<any>;
  count?: number;
  open?: boolean;
}

type Variant = 'default' | 'borderless';

@Component({
  selector: 'ds-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionComponent implements OnInit {
  @Input() variant: Variant = 'default';
  @Input() items: AccordionItem[] = [];
  @Input() allowMultiple = false;
  @Input() textClassName = '';
  @Input() className = '';
  @Output() openHandler = new EventEmitter<AccordionItem>();

  localItems: Array<AccordionItem & { isOpen: boolean }> = [];

  /** copy of your theme object from React, trimmed to only the bits we use */
  theme = theme;

  ngOnInit() {
    this.buildLocalItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      this.buildLocalItems();
    }
  }

  private buildLocalItems() {
    this.localItems = this.items.map((it, idx) => ({
      ...it,
      isOpen: it.open ? (this.allowMultiple ? true : idx === 0) : false,
    }));
  }

  handleChange(item: AccordionItem & { isOpen: boolean }) {
    if (this.allowMultiple) {
      item.isOpen = !item.isOpen;
    } else {
      this.localItems.forEach((it) =>
        it.id === item.id ? (it.isOpen = !it.isOpen) : (it.isOpen = false)
      );
    }
    this.openHandler.emit(item);
  }

  getContainerClasses() {
    return [this.theme[this.variant].container, this.className];
  }

  getDisclosureClasses(isOpen: boolean) {
    return [
      this.theme[this.variant].disclosure,
      isOpen
        ? `${this.variant === 'default' ? 'bg-level-3 rounded-b-lg' : ''}`
        : '',
    ];
  }

  getButtonClasses(isOpen: boolean) {
    const btn = this.theme[this.variant].button;
    return [btn.base, isOpen ? btn.active : ''];
  }

  getIconId(isOpen: boolean) {
    const icon = this.theme[this.variant].button.icon;
    return isOpen ? icon.activeId : icon.inactiveId;
  }

  getIconClasses(isOpen: boolean) {
    const icon = this.theme[this.variant].button.icon;
    return [icon.base, isOpen ? icon.classActive : icon.classInactive];
  }

  getPanelClasses() {
    return this.theme[this.variant].panel.base;
  }

  isTemplate(ref: any): ref is TemplateRef<any> {
    return ref instanceof TemplateRef;
  }
}
