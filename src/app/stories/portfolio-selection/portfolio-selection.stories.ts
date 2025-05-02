import { Component } from '@angular/core';
import { ISelectionItem } from 'projects/design-system/src/lib/components/portfolio-selection/types';

@Component({
  selector: 'app-portfolio-selection',
  templateUrl: './portfolio-selection.stories.html',
})
export class PortfolioSelectionStoryComponent {
  list: ISelectionItem[] = [
    {
      id: 1,
      name: 'OCP AFRICA',
      sector: 'Agriculture',
      reference: 'ICE: 001234567890123',
      image: 'https://placehold.co/41x41',
    },
    {
      id: 2,
      name: 'JESA GROUP',
      sector: 'Engineering',
      reference: 'ICE: 001234567890124',
      image: 'https://placehold.co/41x41',
    },
    {
      id: 3,
      name: 'PHOSBOUCRAA',
      sector: 'Mining',
      reference: 'ICE: 001234567890125',
      image: 'https://placehold.co/41x41',
    },
    {
      id: 4,
      name: 'TEAL TECHNOLOGY',
      sector: 'Technology',
      reference: 'ICE: 001234567890126',
      image: 'https://placehold.co/41x41',
    },
  ];

  selectedItem: ISelectionItem = this.list[0];

  updateSelection = (item: Partial<ISelectionItem>) => {
    this.selectedItem = item as ISelectionItem;
  };
}
