import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AccordionItem } from 'projects/design-system/src/lib/components/accordion/accordion.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.stories.html',
})
export class AccordionStoryComponent {
  @ViewChild('templateOne') templateOne!: TemplateRef<any>;
  @ViewChild('templateTwo') templateTwo!: TemplateRef<any>;

  defaultItems: AccordionItem[] = [
    {
      id: 'default-1',
      title: 'Default Accordion 1',
      // caption: 'This is the first default item',
      content: '<p>Default content one</p>',
      count: 6,
    },
    {
      id: 'default-2',
      title: 'Default Accordion 2',
      content: '<p>Default content two</p>',
      count: 10,
    },
  ];

  borderlessItems: AccordionItem[] = [
    {
      id: 'borderless-1',
      title: 'Borderless Accordion 1',
      content: '<p>More info here</p>',
    },
    {
      id: 'borderless-2',
      title: 'Borderless Accordion 2',
      content: '<p>Additional info</p>',
    },
  ];

  whiteItems: AccordionItem[] = [];

  ngAfterViewInit() {
    setTimeout(() => {
      this.whiteItems = [
        {
          id: 'default-1',
          title: 'Default Accordion 1 with content',
          content: this.templateOne,
          count: '+9',
        },
        {
          id: 'default-2',
          title: 'Default Accordion 2 with content',
          content: this.templateTwo,
          count: 6,
        },
      ];
    });
  }

  onAccordionOpen(item: AccordionItem) {
    console.log('Accordion item opened:', item);
  }
}
