import { Component } from '@angular/core';
import { ICallToActionIcon } from 'projects/design-system/src/lib/components/call-to-action-icons/types';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-call-to-action-icons',
  templateUrl: './call-to-action-icons.stories.html',
})
export class CallToActionIconsStoryComponent {
  dropdownItems: DropdownItem[] = [
    {
      icon: 'eye',
      label: ' View',
      onClick: () => console.log('View clicked'),
    },
    {
      icon: 'pen',
      label: ' Edit',
      onClick: () => console.log('Edit clicked'),
    },
    {
      icon: 'plus',
      label: ' Add',
      onClick: () => console.log('Add clicked'),
    },
  ];
  withDropdown: ICallToActionIcon[] = [
    {
      icon: 'eye',
      onClick: () => console.log('Eye clicked'),
    },
    {
      icon: 'pen',
      onClick: () => console.log('Edit clicked'),
      dropdownItems: this.dropdownItems,
    },
    {
      icon: 'trash',
      onClick: () => console.log('Trash clicked'),
    },
  ];

  actionsBasic: ICallToActionIcon[] = [
    {
      icon: 'eye',
      onClick: () => console.log('Eye clicked'),
    },
    {
      icon: 'pen',
      onClick: () => console.log('Edit clicked'),
    },
    {
      icon: 'trash',
      onClick: () => console.log('Trash clicked'),
    },
  ];

  actionsCustom: ICallToActionIcon[] = [
    {
      icon: 'eye',
      buttonClassName: 'text-blue-600 hover:text-blue-800',
      onClick: () => console.log('Eye clicked with style'),
    },
    {
      icon: 'pen',
      buttonClassName: 'text-green-600 hover:text-green-800',
      onClick: () => console.log('Edit clicked with style'),
    },
    {
      icon: 'trash',
      buttonClassName: 'text-red-600 hover:text-red-800',
      onClick: () => console.log('Trash clicked with style'),
    },
  ];
}
