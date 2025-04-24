import { AccordionItem } from 'projects/design-system/src/lib/components/accordion/accordion.component';

const SAMPLE_ITEMS: AccordionItem[] = [
  {
    id: '1',
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet.',
    open: true,
  },
  { id: '2', title: 'Section 2', content: 'Consectetur adipiscing elit.' },
];

export const controls = [
  {
    name: 'variant',
    label: 'Variant',
    type: 'select',
    value: 'default',
    options: ['default', 'withBorder', 'white'],
  },
  {
    name: 'allowMultiple',
    label: 'Allow Multiple',
    type: 'boolean',
    value: false,
  },
  {
    name: 'textClassName',
    label: 'Text Class',
    type: 'text',
    value: '',
  },
  {
    name: 'className',
    label: 'Container Class',
    type: 'text',
    value: '',
  },
  {
    name: 'items',
    label: 'Items (JSON)',
    type: 'json',
    value: JSON.stringify(SAMPLE_ITEMS, null, 2),
  },
];
