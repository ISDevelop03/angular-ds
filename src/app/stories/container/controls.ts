export const controls = [
  {
    label: 'Layout',
    type: 'select',
    name: 'layout',
    value: 'base',
    options: ['base', 'fluid', 'full', 'small'],
  },
  {
    label: 'Spacing',
    type: 'select',
    name: 'spacing',
    value: 'base',
    options: [
      'base',
      'paragraph',
      'paragraph_background',
      'block_paragraph',
      'big_space',
      'small_space',
      'no_space',
    ],
  },
  {
    label: 'Background Padding',
    type: 'select',
    name: 'bgPadding',
    value: 'none',
    options: ['none', 'bgImageSpace'],
  },
  {
    label: 'Classname',
    type: 'text',
    name: 'className',
    value: '',
  },
  {
    label: 'Style',
    type: 'text',
    name: 'style',
    value: '',
  },
];
