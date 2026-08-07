import { Component, Input } from '@angular/core';
import { theme } from './theme';

export type GenericListTextItem = {
  label: string;
  type: 'text';
  value: string;
};

export type GenericListListItem = {
  label: string;
  type: 'list-badges';
  value: string[];
};

export type GenericListAccountItem = {
  label: string;
  type: 'account';
  value: { accountName: string; accountNumber: string };
};

export type GenericListItem =
  | GenericListTextItem
  | GenericListListItem
  | GenericListAccountItem;

export type GenericListDisplay = 'inline' | 'stacked';

export type GenericListVariant = keyof typeof theme;

export type GenericListSection = {
  title: string;
  display?: GenericListDisplay;
  items: GenericListItem[];
};

/**
 * GenericListComponent
 *
 * Live demo:
 * <example-url>/demo/ds-generic-list.component.html</example-url>
 */
@Component({
  selector: 'ds-generic-list',
  templateUrl: './generic-list.component.html',
})
export class GenericListComponent {
  @Input() className?: string = '';
  @Input() variant: GenericListVariant = 'white';
  @Input() sections: GenericListSection[] = [];

  theme = theme;

  getDisplay(section: GenericListSection): GenericListDisplay {
    return section.display || 'inline';
  }
}
