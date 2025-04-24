export type ActionItem = {
  iconId: string;
  handler: () => void;
};

export const MOCKDATA: ActionItem[] = [
  { iconId: 'eye-slash', handler: () => {} },
  { iconId: 'notification', handler: () => {} },
  { iconId: 'message', handler: () => {} },
  { iconId: 'element-plus', handler: () => {} },
];
