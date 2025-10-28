import { Component, EventEmitter, OnInit, Output } from '@angular/core';

type Theme = 'light' | 'dark';

/**
 * Theme-toggleComponent
 *
 * Live demo:
 * <example-url>/demo/ds-theme-toggle.component.html</example-url>
 */
@Component({
  selector: 'ds-theme-toggle',
  template: `
    <button
      id="ds-theme-toggle"
      class="flex items-center justify-center"
      (click)="toggleTheme()"
      [attr.aria-label]="
        'Toggle theme to ' + (theme === 'dark' ? 'light' : 'dark')
      "
    >
      <ds-icon [id]="theme === 'dark' ? 'sun' : 'moon'"></ds-icon>
    </button>
  `,
})
export class DsThemeToggleComponent implements OnInit {
  theme: Theme = 'light';
  @Output() onThemeChange = new EventEmitter<Theme>();

  ngOnInit(): void {
    this.initTheme();
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

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyThemeClass();
    this.onThemeChange.emit(this.theme);
    localStorage.setItem('storybook-theme', this.theme);
    console.log('Theme toggled:', this.theme);
  }
}
