import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @Input() menus: any[] = [];
  @Input() title = '';

  theme: Theme = 'light';
  currentPath = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initTheme();
    this.trackRouteChanges();
  }

  private initTheme(): void {
    const storedTheme = localStorage.getItem('storybook-theme') as Theme;
    this.theme = storedTheme || 'light';
    this.applyThemeClass();
  }

  private applyThemeClass(): void {
    const body = document.body;
    body.classList.toggle('dark', this.theme === 'dark');
    body.classList.toggle('light', this.theme === 'light');
  }

  private trackRouteChanges(): void {
    this.currentPath = this.router.url;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.url;
      });
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyThemeClass();
    localStorage.setItem('storybook-theme', this.theme);
    console.log('Theme toggled:', this.theme);
  }
}
