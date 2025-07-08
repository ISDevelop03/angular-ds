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
      outline: false,
      withDot: true,
      iconRight: false,
    },
    {
      label: 'Example2',
      pill: true,
      variant: 'default',
      outline: true,
      withDot: false,
      iconRight: false,
    },
    {
      label: 'Badge 3',
      pill: true,
      variant: 'green',
      outline: false,
      withDot: false,
      iconRight: true,
      icon: 'check',
    },
    {
      label: '4',
      pill: true,
      variant: 'default',
      outline: false,
      withDot: false,
      iconRight: false,
    },
    {
      label: 'Badge 5',
      pill: true,
      variant: 'violet',
      outline: false,
      withDot: false,
      iconRight: true,
      icon: 'check',
    },
    {
      label: 'Example Wbe Badge 6',
      pill: true,
      variant: 'default',
      outline: true,
      withDot: true,
      iconRight: false,
    },
    {
      label: 'Example 7',
      variant: 'blue',
      outline: false,
      withDot: false,
      iconRight: false,
    },
    {
      label: 'Web Dev',
      variant: 'default',
      outline: true,
      withDot: true,
      iconRight: false,
    },
  ];
}
