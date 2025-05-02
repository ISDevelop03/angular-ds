import { Component } from '@angular/core';
import { SelectItem } from 'projects/design-system/src/lib/components/form-elements/select/select.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.stories.html',
})
export class SelectStoryComponent {
  selectedValue: string | string[] = '';
  isLoading: boolean = false;

  options: SelectItem[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3', unavailable: true },
  ];

  handleValueChange(value: string | string[]) {
    this.selectedValue = value;
  }
}
