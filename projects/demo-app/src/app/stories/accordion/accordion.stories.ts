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
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.items = [
      {
        id: 'default-1',
        title: 'Default Accordion 1',
        content: this.contentTemplate,
        count: 5,
        countColor: 'bg-yellow-500',
        open: true,
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
