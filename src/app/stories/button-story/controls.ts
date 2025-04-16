export const controls = [
  {
    name: 'variant',
    label: 'Variant',
    type: 'select',
    value: 'primary',
    options: ['primary', 'secondary', 'green', 'yellow', 'white', 'dark'],
  },
  {
    name: 'size',
    label: 'Size',
    type: 'select',
    value: 'normal',
    options: ['small', 'normal', 'medium', 'large'],
  },
  {
    name: 'disabled',
    label: 'Disabled',
    type: 'boolean',
    value: false,
  },
  {
    name: 'outline',
    label: 'Outline',
    type: 'boolean',
    value: false,
  },
  {
    name: 'pill',
    label: 'Pill',
    type: 'boolean',
    value: false,
  },
  {
    name: 'isLoading',
    label: 'Loading',
    type: 'boolean',
    value: false,
  },
  {
    name: 'content',
    label: 'Button Text',
    type: 'text',
    value: 'Click me',
  },
  {
    name: 'icon',
    label: 'Icon',
    type: 'text',
    value: null,
  },
  {
    name: 'iconLeft',
    label: 'Button Text',
    type: 'text',
    value: 'arrow-left',
  },
  {
    name: 'iconRight',
    label: 'Icon Right',
    type: 'text',
    value: 'arrow-right',
  },
];
