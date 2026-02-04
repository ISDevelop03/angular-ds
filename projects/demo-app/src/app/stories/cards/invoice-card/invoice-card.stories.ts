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
    onClick?: (data: any) => void;
  }[] = [
      {
        label: 'View',
        value: 'View',
        href: '/view',
        onClick: (data) => console.log('View clicked', data),
      },
      {
        label: 'Download',
        value: 'Download',
        href: '/download',
        onClick: (data) => console.log('Download clicked', data),
      },
      {
        label: 'Download',
        value: 'Download',
        href: '/download',
        onClick: (data) => console.log('Download clicked', data),
      },
      {
        label: 'Download',
        value: 'Download',
        href: '/download',
        onClick: (data) => console.log('Download clicked', data),
      },
      {
        label: 'Download',
        value: 'Download',
        href: '/download',
        onClick: (data) => console.log('Download clicked', data),
      },
      {
        label: 'Download',
        value: 'Download',
        href: '/download',
        onClick: (data) => console.log('Download clicked', data),
      },
      {
        label: 'Download',
        value: 'Download',
        href: '/download',
        onClick: (data) => console.log('Download clicked', data),
      },
      {
        label: 'Share',
        value: 'Share',
        onClick: (data) => console.log('Share clicked', data),
      },
    ];
  href?: string = '/invoice-card';
  title: string = 'Ministère de l’Equipement et du Transport';
  image: string = 'https://placehold.co/100';
  className?: string = '';

  actions: ICallToActionIcon[] = [
    {
      icon: 'eye',
      onClick: (data) => console.log('Eye clicked', data),
    },
    {
      icon: 'pen',
      onClick: (data) => console.log('Edit clicked', data),
    },
    {
      icon: 'trash',
      onClick: (data) => console.log('Trash clicked', data),
    },
  ];

  onClick(payload: { event: Event; data: any }) {
    payload.event.preventDefault();
    console.log('Card clicked', payload);
  }

  data = {
    items: this.items,
    actions: this.actions,
    id: 'invoice-card-1',
    href: this.href,
    title: this.title,
    image: this.image,
    className: this.className,
  };
}
