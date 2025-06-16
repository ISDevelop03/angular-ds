import { ISelectItem } from '../profile-dropdown/types';
import { levels } from './theme';

export interface ISidebar {
  className?: string;
  disableMainMenus?: boolean;
  mainMenus?: Array<IMainMenu>;
  profileMenus?: Array<ISelectItem>;
}

export interface IMenus {
  title: string;
  items: Array<IMenuListItem>;
}
export interface IMainMenu {
  title: string;
  icon?: string;
  color: string;
  href: string;
  menus?: IMenus;
}

export interface IMenuItemSection {
  title: string;
  icon?: string;
  level?: keyof typeof levels;
  className?: string;
}

export interface IMenuListItem {
  title: string;
  icon?: string;
  href: string;
  isNew?: boolean;
  items?: Array<IMenuListItem>;
}
export interface IMenuList {
  data: Array<IMenuListItem>;
  className?: string;
}

export interface IBottomMenus {
  profileMenus: Array<ISelectItem>;
}

export interface IMenuItem {
  subSidebarIsOpen: boolean;
  subMenuData: IMenus;
  title: string;
  icon?: string;
  color?: string;
  menus?: IMenus;
  isFirst?: boolean;
  disableMainMenus?: boolean;
  href: string;
  onClick: () => void;
}

export interface ILanguage {
  src: string;
  alt: string;
  className?: string;
}
