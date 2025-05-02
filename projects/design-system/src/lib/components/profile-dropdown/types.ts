export interface ISelectItem {
  href?: string;
  label: string;
  isExternal?: boolean;
  icon?: string;
  className?: string;
  onClick?: () => void;
}
