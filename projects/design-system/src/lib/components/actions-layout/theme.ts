export type ActionItem = {
  iconId: string;
  iconIdFilled: string;
  handler: () => void;
  className?: string;
  badge?: boolean;
};

export const MOCKDATA: ActionItem[] = [
  { iconId: 'eye-slash', iconIdFilled: 'eye-closed-filled', handler: () => {} },
  { iconId: 'notification', iconIdFilled: 'bell-filled', handler: () => {} },
  { iconId: 'message', iconIdFilled: 'messagerie-filled', handler: () => {} },
  { iconId: 'category', iconIdFilled: 'category-filled', handler: () => {} },
];
