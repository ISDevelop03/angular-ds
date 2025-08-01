import { Component, TemplateRef, ViewChild } from '@angular/core';
import { AccordionItem } from 'projects/design-system/src/lib/components/accordion/accordion.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.stories.html',
})
export class AccordionStoryComponent {
  @ViewChild('templateOne') templateOne!: TemplateRef<any>;
  @ViewChild('templateTwo') templateTwo!: TemplateRef<any>;
  @ViewChild('templateThree') templateThree!: TemplateRef<any>;
  @ViewChild('contentTemplate') contentTemplate!: TemplateRef<any>;


  account = {
    account_number: 'ACC-24681357',
    balance: 15000,
    solde_comptable: 9823479234,
    solde_temps_reel: 20982348,
    currency: 'USD',
    type: 'Savings',
    id: 'account-123',
    date: '2025-05-02',
    isDiscrete: false,
  };

  actionsList = [
    {
      label: 'Edit',
      icon: 'pen',
      onClick: (item: any) => alert('Edit clicked ' + JSON.stringify(item)),
    },
    {
      label: 'Remove',
      icon: 'trash',
      onClick: (item: any) => alert('Remove clicked' + JSON.stringify(item)),
    },
  ];

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

  mockData = [
    {
      id: 'default-1',
      title: 'Default Accordion 1',
      content: [
        {label: 'Default content one', value: 'Default content one'},
        {label: 'Default content two', value: 'Default content two'},
        {label: 'Default content three', value: 'Default content three'},
        {label: 'Default content four', value: 'Default content four'},
      ],
      count: 6,
      open: true,
    },
    {
      id: 'default-2',
      title: 'Default Accordion 1',
      content: [
        {label: 'Default content one', value: 'Default content one'},
        {label: 'Default content two', value: 'Default content two'},
      ],
      count: 6,
      open: true,
    }
  ]

  defaultItems: AccordionItem[] = [];
  borderlessItems: AccordionItem[] = [];
  whiteItems: AccordionItem[] = [];

  ngAfterViewInit() {
    setTimeout(() => {
      this.defaultItems = this.mockData.map((item) => ({
        id: item.id,
        title: item.title,
        content: this.contentTemplate,
        context: {
          content: item.content,
        },
        count: item.count,
        open: item.open,
      }));

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

      this.borderlessItems = [
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
        {
          id: 'borderless-3',
          title: 'Borderless Accordion 3 with template',
          content: this.templateThree,
        },
      ];
    });
  }

  

  onAccordionOpen(item: AccordionItem) {
    console.log('Accordion item opened:', item);
  }
}
