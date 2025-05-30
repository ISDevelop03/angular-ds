import { Component, Input } from '@angular/core';
import { positions } from './theme';
import { ISelectItem } from './types';

/**
 * Profile-dropdownComponent
 *
 * Live demo:
 * <example-url>/demo/ds-profile-dropdown.component.html</example-url>
 */
@Component({
  selector: 'ds-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
})
export class ProfileDropdownComponent {
  @Input() className?: string;
  @Input() ulClassName?: string;
  @Input() list: ISelectItem[];
  @Input() children: string;
  @Input() position?: keyof typeof positions;
  @Input() suffix?: string;
  @Input() prefix?: string;

  isOpen: boolean = false;

  handleOpen = () => (this.isOpen = true);
  handleClose = () => (this.isOpen = false);

  //Positions
  positions = positions;
}
