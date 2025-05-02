import { Component, OnInit } from '@angular/core';
import { positions } from 'projects/design-system/src/lib/components/profile-dropdown/theme';
import { ISelectItem } from 'projects/design-system/src/lib/components/profile-dropdown/types';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.stories.html',
})
export class PortfolioDropdownStoryComponent implements OnInit {
  position: string = 'topLeft';
  index: number = 0;
  array: string[] = Object.keys(positions);

  list: ISelectItem[] = [
    {
      href: '/',
      label: 'Profil',
      icon: 'profile',
    },
    {
      href: '/',
      label: 'Paramétres',
      icon: 'settings',
    },
    {
      href: '/',
      label: 'Déconnexion',
      icon: 'logoutcurve',
      className: 'text-primary',
    },
  ];

  ngOnInit() {
    this.position = this.array[this.index];
  }

  changePosition() {
    if (this.index >= this.array.length - 1) {
      this.index = 0;
      return;
    }

    this.index++;
    this.position = this.array[this.index];
  }
}
