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
    { label: 'Option 2', value: 'option2', icon: 'vide' },
    {
      label: 'Option 3',
      value: 'option3',
      unavailable: true,
      icon: 'vide',
      iconClass: 'text-amber-400',
    },
    {
      label: 'This is a long label Option 4',
      value: 'option4',
      unavailable: true,
      image: 'https://placehold.co/20',
      imageClass: 'rounded-full',
    },
    {
      label: 'Option 5',
      value: 'option5',
      image: 'https://placehold.co/20',
      imageClass: 'rounded-full',
    },
  ];

  handleChangeClick(){
    this.options=[
      { label: 'Option 8', value: 'option8' },
      { label: 'Option 9', value: 'option9', icon: 'vide' }
    ]
  }
  
  options1: SelectItem[] = [
    {
      label: 'Lorem ipsum dolor sit amet',
      value: 'option1',
      isAccount: true,
      image: 'https://placehold.co/400',
    },
    {
      label: 'Lorem ipsum dolor sit amet',
      value: 'option2',
      isAccount: true,
      image: 'https://placehold.co/400',
    },
    {
      label: 'Lorem ipsum dolor sit amet',
      value: 'option3',
      isAccount: true,
      image: 'https://placehold.co/400',
    },
  ];





  handleValueChange(value: string | string[]) {
    this.selectedValue = value;
  }
  valueChange(data: any) {
    console.log('data.valuedata.value', data);
    this.selectedValue = data.value;
  }

  onSearchValueChange(value: string) {
    console.log('value', value);
  }

}
