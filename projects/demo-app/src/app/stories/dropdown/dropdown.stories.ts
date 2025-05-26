import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.stories.html',
})
export class DropdownStoryComponent {
  variants = ['base', 'select'];

  items = [
    {
      label: 'Retirer',
      icon: 'trash-02',
      onClick: () => console.log('Item 1 clicked'),
    },
    {
      label: 'RIB',
      icon: 'file-up',
      onClick: () => console.log('Item 1 clicked'),
    },
    {
      label: 'Movements',
      icon: 'arrow-switch-horizontal-1',
      onClick: () => console.log('Item 2 clicked'),
    },
    {
      label: 'Effectuer un virement',
      icon: 'movements',
      onClick: () => console.log('Item 4 clicked'),
    },
  ];
}
