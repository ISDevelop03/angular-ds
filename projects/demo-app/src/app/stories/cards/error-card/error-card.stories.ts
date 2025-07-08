import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.stories.html',
})
export class ErrorCardStoryComponent {
  @Input() label: string = 'error-card';
  @Input() className?: string = '';

  items = [
    {
      label: 'Error 1',
      value: 'Something went wrong',
      className: '[&_span]:text-red-500',
    },
    { label: 'Error 2', className: '' },
    { label: 'Error 3', value: 'Please try again later', className: '' },
  ];
}
