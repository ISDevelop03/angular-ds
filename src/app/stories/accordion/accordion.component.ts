import { Component } from '@angular/core';
import { AccordionItem } from 'projects/design-system/src/lib/components/accordion/accordion.component';
import { controls as baseControls } from './controls';
import { convertArrayToObject } from 'utils';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionStoryComponent {
  isDrawerOpen = true;
  controls = baseControls;
  props = convertArrayToObject(baseControls);

  // default items if JSON is invalid
  readonly DEFAULT_ITEMS: AccordionItem[] = [
    {
      id: '1',
      title: 'Section 1',
      content: 'Content for section 1',
      open: true,
    },
    { id: '2', title: 'Section 2', content: 'Content for section 2' },
    { id: '3', title: 'Section 3', content: 'Content for section 3' },
  ];

  /** parse the JSON from the controls into AccordionItem[] */
  get parsedItems(): AccordionItem[] {
    try {
      return JSON.parse(this.props.items);
    } catch {
      return this.DEFAULT_ITEMS;
    }
  }

  onItemToggled(item: AccordionItem) {
    console.log('Toggled:', item);
  }

  onDrawerClosed() {
    this.isDrawerOpen = false;
  }

  onControlChanged(event: { name: string; value: any }) {
    // update props; keep items as raw JSON string
    this.props = {
      ...this.props,
      [event.name]: event.value,
    };
  }
}
