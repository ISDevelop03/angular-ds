import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @Input() menus: { key: string; name: string; path: string }[] = [];
  @Input() title = '';

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  theme: Theme = 'light';
  currentPath = '';

  showTopMask = false;
  showBottomMask = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menus = this.menus.sort((a, b) => (a.name < b.name ? -1 : 1));
    this.initTheme();
    this.trackRouteChanges();
  }

  ngAfterViewInit(): void {
    // defer to the next tick so Angular finishes its first check
    setTimeout(() => this.updateMasks(), 0);
  }

  private initTheme(): void {
    const stored = localStorage.getItem('storybook-theme') as Theme;
    this.theme = stored || 'light';
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
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentPath = e.url;
      });
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyThemeClass();
    localStorage.setItem('storybook-theme', this.theme);
  }

  onScroll(): void {
    this.updateMasks();
  }

  private updateMasks(): void {
    const el = this.scrollContainer.nativeElement;
    const { scrollTop, scrollHeight, clientHeight } = el;

    // show top mask only if you've scrolled down
    this.showTopMask = scrollTop > 0;
    // show bottom mask only if there’s more content below the fold
    this.showBottomMask = scrollTop + clientHeight < scrollHeight;
  }
}
