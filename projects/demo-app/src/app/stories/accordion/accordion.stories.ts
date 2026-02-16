import {
  Component,
  TemplateRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { AccordionItem } from 'projects/design-system/src/lib/components/accordion/accordion.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.stories.html',
})
export class AccordionStoryComponent implements AfterViewInit {
  @ViewChild('templateOne') templateOne!: TemplateRef<any>;
  @ViewChild('templateTwo') templateTwo!: TemplateRef<any>;
  @ViewChild('templateThree') templateThree!: TemplateRef<any>;
  @ViewChild('contentTemplate') contentTemplate!: TemplateRef<any>;
  @ViewChild('buttonTemplate') buttonTemplate!: TemplateRef<any>;

  items: AccordionItem[] = [];
  itemsWithTemplate: AccordionItem[] = [];
  itemsBorderless: AccordionItem[] = [];
  itemsShadowless: AccordionItem[] = [];

  /** Code snippets for docs (used by app-story-demo-code-block) */
  snippetDefaultHtml = `<ds-accordion
  [items]="items"
  variant="default"
  (openHandler)="onAccordionOpen($event)"
></ds-accordion>`;

  snippetDefaultTs = `items: AccordionItem[] = [
  { id: '1', title: 'Section 1', content: '<p>Content 1</p>', open: true },
  { id: '2', title: 'Section 2', content: '<p>Content 2</p>' },
];

onAccordionOpen(item: AccordionItem) {
  console.log('Opened:', item);
}`;

  snippetBorderlessHtml = `<ds-accordion
  [items]="items"
  variant="borderless"
  [allowMultiple]="true"
  (openHandler)="onAccordionOpen($event)"
></ds-accordion>`;

  snippetBorderlessTs = `items: AccordionItem[] = [ /* ... */ ];

onAccordionOpen(item: AccordionItem) {
  console.log('Opened:', item);
}`;

  snippetBorderlessReversedHtml = `<ds-accordion
  [items]="items"
  variant="borderless-reversed"
  [allowMultiple]="true"
  (openHandler)="onAccordionOpen($event)"
></ds-accordion>`;

  snippetBorderlessReversedTs = `items: AccordionItem[] = [ /* ... */ ];

onAccordionOpen(item: AccordionItem) {
  console.log('Opened:', item);
}`;

  snippetShadowlessHtml = `<ds-accordion
  [items]="items"
  variant="shadowless"
  [allowMultiple]="true"
  (openHandler)="onAccordionOpen($event)"
></ds-accordion>`;

  snippetShadowlessTs = `items: AccordionItem[] = [ /* ... */ ];

onAccordionOpen(item: AccordionItem) {
  console.log('Opened:', item);
}`;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.items = [
      {
        id: 'default-1',
        title: 'Default Accordion 1',
        content: this.contentTemplate,
        count: 5,
        countColor: 'bg-yellow-500',
        open: true,
        buttonTemplate: this.buttonTemplate,
      },
      {
        id: 'default-2',
        title: 'Default Accordion 1',
        content: this.contentTemplate,
        count: 6,
        countColor: 'bg-purple-500',
        open: true,
      },
    ];
    this.cdr.detectChanges();
  }

  handleClick(event: Event) {
    event.stopPropagation();
    console.log('Button clicked:', event);
  }

  onAccordionOpen(item: AccordionItem) {
    console.log('Accordion item opened:', item);
  }
}
