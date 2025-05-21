export interface DropdownItem {
  label: string;
  icon?: string;
  onClick?: () => void;
  items?: DropdownItem[];
}
