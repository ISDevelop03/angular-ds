import { Component, Input } from '@angular/core';
import { ICallToActionIcon } from 'projects/design-system/src/lib/components/call-to-action-icons/types';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.stories.html',
})
export class InvoiceCardStoryComponent {
  items?: {
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
  href?: string = '/invoice-card';
  title: string = 'Ministère de l’Equipement et du Transport';
  image: string = 'https://placehold.co/100';
  className?: string = '';

  actions: ICallToActionIcon[] = [
    {
      icon: 'eye',
      onClick: () => console.log('Eye clicked'),
    },
    {
      icon: 'pen',
      onClick: () => console.log('Edit clicked'),
    },
    {
      icon: 'trash',
      onClick: () => console.log('Trash clicked'),
    },
  ];

  onClick(event: Event) {
    event.preventDefault();
    console.log('Card clicked');
  }
}
