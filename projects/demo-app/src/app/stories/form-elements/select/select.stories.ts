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
    { label: 'The first option', value: 'option1' },
    { label: 'The second option', value: 'option2', icon: 'vide' },
    {
      label: 'The third option',
      value: 'option3',
      unavailable: true,
      icon: 'vide',
      iconClass: 'text-amber-400',
    },
    {
      label: 'The fourth option',
      value: 'option4',
      unavailable: true,
      image: 'https://placehold.co/20',
      imageClass: 'rounded-full',
    },
    {
      label: 'The fifth option',
      value: 'option5',
      image: 'https://placehold.co/20',
      imageClass: 'rounded-full',
    },
    {
      label: 'The sixth option',
      value: 'option6',
      image: 'https://placehold.co/20',
      imageClass: 'rounded-full',
    },
    {
      label: 'The seventh option',
      value: 'option7',
      image: 'https://placehold.co/20',
      imageClass: 'rounded-full',
    },
    {
      label: 'The eighth option',
      value: 'option8',
      image: 'https://placehold.co/20',
      imageClass: 'rounded-full',
    },
    {
      label: 'The ninth option',
      value: 'option9',
      image: 'https://placehold.co/20',
      imageClass: 'rounded-full',
    },
    {
      label: 'The tenth option',
      value: 'option10',
      image: 'https://placehold.co/20',
      imageClass: 'rounded-full',
    },
  ];

  handleChangeClick() {
    this.options = [];
  }

  autoCompleteOptions: SelectItem[] = [
    {
      label: 'auto complete option 1',
      value: 'auto 1',
      image: 'https://flagcdn.com/w40/pl.png',
      imageClass: 'rounded-full',
    },
    {
      label: 'auto complete option 2',
      value: 'auto 2',
      image: 'https://flagcdn.com/w40/mr.png',
      imageClass: 'rounded-full',
    },
    {
      label: 'auto complete option 3',
      value: 'auto 3',
      image: 'https://flagcdn.com/w40/mr.png',
      imageClass: 'rounded-full',
    },
    {
      label: 'auto complete option 4',
      value: 'auto 4',
      image: 'https://flagcdn.com/w40/fr.png',
      imageClass: 'rounded-full',
    },
    {
      label: 'auto complete option 5',
      value: 'auto 5',
      image: 'https://flagcdn.com/w40/us.png',
      imageClass: 'rounded-full',
    },
  ];

  options1: SelectItem[] = [
    {
      label: 'Lorem ipsum dolor sit amedk ud odui odu t',
      value: 'option1',
    },
    {
      label: 'Lorem ipsum dolor sit amet',
      value: 'option2',
    },
    {
      label: 'Lorem ipsum dolor sit amet',
      value: 'option3',
    },
  ];

  handleValueChange(value: string | string[]) {
    this.selectedValue = value;
  }
  valueChange(data: any) {
    console.log('data.valuedata.value', data);
    if (data !== null) {
      this.selectedValue = data.value;
    }
  }

  onSearchValueChange(value: string) {
    console.log('value', value);
  }
}
