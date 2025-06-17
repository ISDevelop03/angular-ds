import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-card',
  templateUrl: './accordion-card.stories.html',
})
export class AccordionCardStoryComponent {
  @Input() label: string = 'accordion-card';
  @Input() className?: string = '';

  items = [
    {
      label: 'Item 1',
      value: 'Content for item 1',
    },
    {
      label: 'Item 2',
      value: `<div>
      <h2>This is a title</h2>
      <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In illum ab ipsum
    repudiandae, dolore numquam sapiente commodi ullam hic officia, ex libero
    neque reprehenderit temporibus asperiores. Error ?
    <strong>voluptatem id officiis</strong>
     </p>
    </div>`,
    },
    {
      value:
        '<h2 class="text-red-400">This is a title</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
    },
    {
      label: 'Item 4',
      value: 'Content for item 4',
    },
  ];
}
