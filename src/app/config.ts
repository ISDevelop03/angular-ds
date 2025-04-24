export interface Menu {
  key: string;
  name: string;
  path: string;
  hide?: boolean;
}

export const menus: Menu[] = [
  {
    key: 'button',
    name: 'Button',
    path: '/button',
  },
  {
    name: 'Badge',
    key: 'badge',
    path: '/badge',
  },
  {
    name: 'Icon',
    path: '/icon',
    key: 'icon',
  },
  {
    name: 'Accordion',
    path: '/accordion',
    key: 'accordion',
  },
  {
    name: 'Avatar',
    path: '/avatar',
    key: 'avatar',
  },
  {
    name: 'Tabs',
    path: '/tabs',
    key: 'tabs',
  },
  {
    name: 'Container',
    path: '/container',
    key: 'container',
  },
  {
    name: 'ActionsLayout',
    path: '/actions-layout',
    key: 'actionsLayout',
  },
  {
    name: 'Heading',
    path: '/heading',
    key: 'heading',
  },
  {
    name: 'Text',
    path: '/text',
    key: 'text',
  },
  {
    name: 'Breadcrumb',
    path: '/breadcrumb',
    key: 'breadcrumb',
  },
  {
    name: 'Call-to-action-icons',
    path: '/call-to-action-icons',
    key: 'call-to-action-icons',
  },
];
