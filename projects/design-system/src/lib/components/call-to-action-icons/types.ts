import { DropdownItem } from '../dropdown/types';

export interface ICallToActionIcons {
  className?: string;
  actions: ICallToActionIcon[];
}

export interface ICallToActionIcon {
  icon: string;
  onClick?: (item?: any) => void;
  buttonClassName?: string;
  dropdownItems?: DropdownItem[];
}
