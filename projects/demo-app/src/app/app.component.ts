// app.component.ts
import { Component, DoCheck } from '@angular/core';
import { Menu, menus } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'My Business';
  menus: Menu[] = menus.filter((menu) => !menu.hide);

  /** Track the live config export so HMR picks up newly added stories. */
  private menusSource = menus;

  ngDoCheck(): void {
    if (this.menusSource !== menus) {
      this.menusSource = menus;
      this.menus = menus.filter((menu) => !menu.hide);
    }
  }
}
