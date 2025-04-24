import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AccordionItem } from 'projects/design-system/src/lib/components/accordion/accordion.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionStoryComponent {
  @ViewChild('templateOne') templateOne!: TemplateRef<any>;
  @ViewChild('templateTwo') templateTwo!: TemplateRef<any>;

  defaultItems: AccordionItem[] = [
    {
      id: 'default-1',
      title: 'Default Accordion 1',
      caption: 'This is the first default item',
      content: '<p>Default content one</p>',
    },
    {
      id: 'default-2',
      title: 'Default Accordion 2',
      content: '<p>Default content two</p>',
    },
  ];

  borderItems: AccordionItem[] = [
    {
      id: 'border-1',
      title: 'Border Accordion 1',
      caption: 'With border and multiple open',
      content: '<p>More info here</p>',
    },
    {
      id: 'border-2',
      title: 'Border Accordion 2',
      content: '<p>Additional info</p>',
    },
  ];

  whiteItems: AccordionItem[] = [];

  ngAfterViewInit() {
    this.whiteItems = [
      {
        id: 'white-1',
        title: 'White Accordion 1',
        content: this.templateOne,
      },
      {
        id: 'white-2',
        title: 'White Accordion 2',
        caption: 'With projected template',
        content: this.templateTwo,
      },
    ];
  }

  onAccordionOpen(item: AccordionItem) {
    console.log('Accordion item opened:', item);
  }
}
