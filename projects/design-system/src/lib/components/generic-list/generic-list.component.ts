import { Component, Input } from '@angular/core';

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
  @Input() items: GenericListItem[] = [];
}
