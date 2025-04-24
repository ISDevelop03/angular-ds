import { ControlConfig } from 'utils';

export const controls: ControlConfig[] = [
  {
    name: 'className',
    label: 'Class Name',
    type: 'text',
    value: 'max-w-fit',
  },
  {
    name: 'actions',
    label: 'Actions',
    type: 'json',
    value: [{ icon: 'line-chart-up-02' }, { icon: 'list' }],
  },
];
