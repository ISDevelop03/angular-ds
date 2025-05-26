import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.stories.html',
})
export class InvoiceCardStoryComponent {
  @Input() actions?: {
    label: string;
    value: string;
    icon?: string;
    href?: string;
    onClick?: () => void;
  }[] = [
    {
      label: 'View',
      value: 'View',
      href: '/view',
      onClick: () => console.log('View clicked'),
    },
    {
      label: 'Download',
      value: 'Download',
      href: '/download',
      onClick: () => console.log('Download clicked'),
    },
    {
      label: 'Share',
      value: 'Share',
      onClick: () => console.log('Share clicked'),
    },
  ];
  @Input() href?: string = '/invoice-card';
  @Input() title: string = 'Ministère de l’Equipement et du Transport';
  @Input() image: string = 'https://placehold.co/100';
  @Input() className?: string = '';

  onClick(event: Event) {
    event.preventDefault();
    console.log('Card clicked');
  }
}
