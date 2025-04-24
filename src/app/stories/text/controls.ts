import { typography } from 'projects/design-system/src/lib/components/text/theme';

export const controls = [
  {
    type: 'select',
    label: 'Variant',
    name: 'variant',
    value: 'text-base/Regular',
    options: Object.keys(typography),
  },
  { type: 'text', name: 'content', label: 'content', value: 'Text Sample' },
  { type: 'text', name: 'tag', label: 'tag', value: 'p' },
  { type: 'text', name: 'className', label: 'className', value: '' },
];
