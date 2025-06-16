import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

type Theme = 'light' | 'dark';
type Menu = { key: string; name: string; path: string };
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() menus: Menu[] = [];
  @Input() title = '';

  // 1) Capture the ds-input’s native element
  @ViewChild('searchInputHost', { read: ElementRef })
  searchInputHost!: ElementRef<HTMLInputElement>;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  theme: Theme = 'light';

  currentPath = '';
  // 1) Replace the plain string with a private field + getter/setter:
  private _searchTerm = '';
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.applySearchFilter();
    this.updateMasks();
  }

  onSearch(search: string) {
    this._searchTerm = search;
    this.applySearchFilter();
    this.updateMasks();
  }

  filteredMenus: Menu[] = [];

  showTopMask = false;
  showBottomMask = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menus = this.menus.sort((a, b) => (a.name < b.name ? -1 : 1));
    this.filteredMenus = this.menus.concat(); // Initialize filteredMenus with a copy of menus
    this.initTheme();
    this.trackRouteChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.menus) {
      // When the @Input() “menus” changes from the parent:
      this.menus = this.menus.sort((a, b) => (a.name < b.name ? -1 : 1));
      this.filteredMenus = this.menus.concat();
      this.applySearchFilter();
      this.updateMasks();
    }
  }

  private applySearchFilter(): void {
    if (!this.menus) {
      this.filteredMenus = [];
      return;
    }

    const term = this.searchTerm.toLowerCase().trim();
    if (!term) {
      this.filteredMenus = this.menus.concat();
      return;
    }

    this.filteredMenus = this.menus.filter((menu) =>
      menu.name.toLowerCase().includes(term)
    );
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

  // 2) HostListener for Ctrl+K / ⌘+K:
  @HostListener('window:keydown', ['$event'])
  onWindowKeydown(event: KeyboardEvent): void {
    const isMac = navigator.platform.toUpperCase().includes('MAC');
    const modifierPressed = isMac ? event.metaKey : event.ctrlKey;

    if (modifierPressed && event.key.toLowerCase() === 'k') {
      event.preventDefault();

      // 3) Find the real <input> inside <ds-input> and focus it:
      const hostEl = this.searchInputHost.nativeElement;
      const realInput: HTMLInputElement | null = hostEl.querySelector('input');
      if (realInput) {
        realInput.focus();
      } else {
        console.warn('Could not find <input> inside <ds-input> host');
      }
    }
  }
}
