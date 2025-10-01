import { Component, Input } from '@angular/core';

interface FloatedButton {
  content: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  iconRight?: boolean;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  isDelete?: boolean;
  onClick?: (event: any) => void;
}

@Component({
  selector: 'app-floated-buttons',
  templateUrl: './floated-buttons.stories.html',
})
export class FloatedButtonsStoryComponent {
  @Input() label: string = 'floated-buttons';
  @Input() className?: string = '';

  floatedButtons: FloatedButton[] = [
    {
      content: 'Add Item',
      icon: 'file',
      onClick: () => console.log('Add clicked'),
    },
    {
      content: 'Loading',
      type: 'button',
      isLoading: true,
      icon: 'Je-deviens-client',
    },
    {
      content: 'Delete',
      isDelete: true,
      icon: 'trash',
      onClick: (event) =>
        alert('This shouldn’t run—button is disabled' + JSON.stringify(event)),
    },
    {
      content: 'Disabled Button',
      iconRight: true,
      disabled: true,
      onClick: () => alert('This shouldn’t run—button is disabled'),
    },
  ];
}
