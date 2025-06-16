import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectItem } from '../../profile-dropdown/types';
import { ILanguage } from '../types';

/**
 * @ignore
 */
@Component({
  selector: 'ds-bottom-menus',
  templateUrl: './bottom-menus.component.html',
})
export class DsBottomMenusComponent {
  @Input() profileMenus: ISelectItem[] = [];
  @Input() lastLoginDate: string = 'Le 03.10.2024, à 16h45';
  @Input() language: ILanguage = {
    src: '/assets/france-flag.svg',
    alt: 'Français',
  };

  @Output() callingOnClick = new EventEmitter();
  @Output() reclamationOnClick = new EventEmitter();
  @Output() languageOnClick = new EventEmitter();
  @Output() settingsOnClick = new EventEmitter();
}
