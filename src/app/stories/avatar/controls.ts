export const controls = [
  {
    name: 'variant',
    label: 'Variant',
    type: 'select',
    value: 'default',
    options: ['default', 'placeholder', 'initials'],
  },
  {
    name: 'size',
    label: 'Size',
    type: 'select',
    value: 'normal',
    options: ['small', 'normal', 'large'],
  },
  {
    name: 'alt',
    label: 'Alt Text',
    type: 'text',
    value: '',
  },
  {
    name: 'src',
    label: 'Image Source',
    type: 'text',
    value:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'children',
    label: 'Initials Text',
    type: 'text',
    value: 'AB',
  },
  {
    name: 'className',
    label: 'Extra CSS Classes',
    type: 'text',
    value: '',
  },
];
