import { Component, Input } from '@angular/core';
import { ISelectItem } from '../../profile-dropdown/types';

/**
 * @ignore
 */
@Component({
  selector: 'ds-bottom-menus',
  templateUrl: './bottom-menus.component.html',
})
export class DsBottomMenusComponent {
  @Input() profileMenus: ISelectItem[] = [];

  // Stub for last login info
  lastLoginDate: string = 'Le 03.10.2024, à 16h45';
}
