export const controls = [
  {
    type: 'select',
    name: 'variant',
    options: ['default'],
    value: 'default',
    label: 'Variant',
  },
  {
    type: 'text',
    name: 'className',
    value: '',
    label: 'ClassName',
  },
  {
    label: 'Items',
    type: 'json',
    name: 'items',
    value: [
      { title: 'Tab 1', panel: 'Content 1' },
      { title: 'Tab 2', panel: 'Content 2' },
      { title: 'Tab 3', panel: 'Content 3' },
    ],
  },
];
