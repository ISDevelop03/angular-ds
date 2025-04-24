export interface IPortfolioSelection {
  className?: string;
  list: ISelectionItem[];
  selectedItem?: ISelectionItem;
  setSelectedItem: (item: Partial<ISelectionItem>) => void;
}

export interface ISelectionItem {
  id: string | number;
  name: string;
  sector: string;
  reference: string;
  image: string;
  isActive?: boolean;
}
