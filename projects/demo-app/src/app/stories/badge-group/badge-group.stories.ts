import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-group',
  templateUrl: './badge-group.stories.html',
})
export class BadgeGroupStoryComponent {
  @Input() label: string = 'badge-group';
  @Input() className?: string = '';

  tags = [
    {
      label: 'Example 1',
      href: '#',
      icon: 'check',
      pill: true,
      variant: 'red',
      withDot: true,
      iconRight: false,
    },
    {
      label: 'Example2',
      pill: true,
      variant: 'default',
      withDot: false,
      iconRight: false,
    },
    {
      label: 'Badge 3',
      pill: true,
      variant: 'green',
      withDot: false,
      iconRight: true,
      icon: 'check',
    },
    {
      label: '4',
      pill: true,
      variant: 'default',
      withDot: false,
      iconRight: false,
    },
    {
      label: 'Badge 5',
      pill: true,
      variant: 'violet',
      withDot: false,
      iconRight: true,
      icon: 'check',
    },
    {
      label: 'Example Wbe Badge 6',
      pill: true,
      variant: 'default',
      withDot: true,
      iconRight: false,
    },
    {
      label: 'Example 7',
      variant: 'blue',
      withDot: false,
      iconRight: false,
    },
    {
      label: 'Web Dev',
      variant: 'default',
      withDot: true,
      iconRight: false,
    },
  ];
}
