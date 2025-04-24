export interface ICallToActionIcons {
  className?: string;
  actions: ICallToActionIcon[];
}

export interface ICallToActionIcon {
  icon: string;
  onClick?: () => void;
  buttonClassName?: string;
}
