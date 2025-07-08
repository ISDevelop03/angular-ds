import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.stories.html',
})
export class AutocompleteStoryComponent {
  @Input() label: string = 'autocomplete';
  @Input() className?: string = '';
  //generate real data of some kind

  items = [
    { label: 'Afghanistan', value: 'AF' },
    { label: 'Albania', value: 'AL' },
    { label: 'Algeria', value: 'DZ' },
    { label: 'Argentina', value: 'AR' },
    { label: 'Australia', value: 'AU' },
    { label: 'Belgium', value: 'BE' },
    { label: 'Brazil', value: 'BR' },
    { label: 'Canada', value: 'CA' },
    { label: 'China', value: 'CN' },
    { label: 'Egypt', value: 'EG' },
    { label: 'France', value: 'FR' },
    { label: 'Germany', value: 'DE' },
    { label: 'India', value: 'IN' },
    { label: 'Japan', value: 'JP' },
    { label: 'Morocco', value: 'MA' },
    { label: 'Nigeria', value: 'NG' },
    { label: 'Russia', value: 'RU' },
    { label: 'South Africa', value: 'ZA' },
    { label: 'United Kingdom', value: 'GB' },
    { label: 'United States', value: 'US' },
  ];

  values = [
    { label: 'Value 1', value: 'value1' },
    { label: 'Value 2', value: 'value2' },
  ];
}
