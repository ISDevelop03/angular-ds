// ds-portfolio-selection.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ISelectionItem } from '../types';
import { Theme } from '../theme';

@Component({
  selector: 'ds-portfolio-selection',
  templateUrl: './portfolio-selection-list.component.html',
})
export class DsPortfolioSelectionComponent implements OnInit {
  @Input() list: ISelectionItem[] = [];
  @Input() className?: string;
  @Input() selectedItem?: ISelectionItem;
  @Input() setSelectedItem!: (item: Partial<ISelectionItem>) => void;

  showList = false;
  selectedPortfolio: Partial<ISelectionItem> | undefined;
  theme = Theme;

  ngOnInit() {
    this.selectedPortfolio = this.selectedItem || this.list[0];
  }

  toggleList() {
    this.showList = !this.showList;
  }

  closeList() {
    this.showList = false;
  }

  onSelect(item: Partial<ISelectionItem>) {
    this.selectedPortfolio = item;
    this.closeList();
    if (this.setSelectedItem) {
      this.setSelectedItem(item);
    }
  }
}
