import { ControlConfig } from 'utils';

export const controls: ControlConfig[] = [
  {
    name: 'homeUrl',
    label: 'Home URL',
    type: 'text',
    value: 'https://example.com',
  },
  {
    name: 'className',
    label: 'Class Name',
    type: 'text',
    value: '',
  },
  {
    name: 'variant',
    label: 'Variant',
    type: 'select',
    options: ['default'],
    value: 'default',
  },
  {
    name: 'pages',
    label: 'Pages',
    type: 'json',
    value: [
      { id: '1', name: 'Dashboard', href: '/dashboard' },
      { id: '2', name: 'Settings', href: '/settings' },
      { id: '3', name: 'Profile', href: '/profile', current: true },
    ],
  },
  {
    name: 'showLimit',
    label: 'Show Limit',
    type: 'boolean',
    value: false,
  },
];
