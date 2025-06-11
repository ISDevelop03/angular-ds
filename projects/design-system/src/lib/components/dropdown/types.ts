export interface DropdownItem {
  label: string;
  icon?: string;
  onClick?: (item: any) => void;
  items?: DropdownItem[];
}
