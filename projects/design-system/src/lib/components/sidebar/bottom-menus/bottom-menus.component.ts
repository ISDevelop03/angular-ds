import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ISelectItem } from '../../profile-dropdown/types';
import { Cap, ILanguage } from '../types';
import { animate, style, transition, trigger } from '@angular/animations';

/**
 * @ignore
 */
@Component({
  selector: 'ds-bottom-menus',
  templateUrl: './bottom-menus.component.html',
  animations: [
    trigger('dropdown', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translate(4px, var(--tw-translate-y)) scale(0.95)',
        }),
        animate(
          '150ms ease-out',
          style({
            opacity: 1,
            transform: 'translate(0px, var(--tw-translate-y)) scale(1)',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '100ms ease-in',
          style({
            opacity: 0,
            transform: 'translate(-4px, var(--tw-translate-y)) scale(0.95)',
          })
        ),
      ]),
    ]),
  ],
})
export class DsBottomMenusComponent {
  fontSize: string = localStorage.getItem('mybusiness-fontsize') || 'M';
  showCaps: boolean = false;

  @Input() sizes: Cap[] = [
    // { name: 'S', size: 14 },
    // { name: 'M', size: 16 },
    // { name: 'L', size: 18 },
    // { name: 'XL', size: 20 },
  ];

  currentCap: Cap = this.sizes[1] || null; // Default to 'M'
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

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    // Set the initial font size based on localStorage or default to 'M'
    const storedFontSize = localStorage.getItem('mybusiness-fontsize') || 'M';
    this.currentCap =
      this.sizes.find((item) => item.name === storedFontSize) || this.sizes[1];
    document.documentElement.style.setProperty(
      '--font-size',
      `${this.currentCap.size}px`
    );
    document.body.style.setProperty('--font-size', `${this.currentCap.size}px`);
    document.body.setAttribute(
      'data-fontSize',
      `${JSON.stringify(this.currentCap)}`
    );
  }

  capsClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.showCaps = !this.showCaps;
  }

  onSizeChange(size: Cap): void {
    this.currentCap = size;
    this.showCaps = false;
    document.documentElement.style.setProperty('--font-size', `${size.size}px`);
    document.body.style.setProperty('--font-size', `${size.size}px`);
    document.body.setAttribute(
      'data-fontSize',
      `${JSON.stringify(this.currentCap)}`
    );
    localStorage.setItem('mybusiness-fontsize', size.name);
  }

  // ← listen to *all* clicks on the page
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    // if the dropdown is open, but click was *not* inside this component, close it
    if (this.showCaps && !this.host.nativeElement.contains(target)) {
      this.showCaps = false;
      // if you ever see ExpressionChanged… errors here, you can:
      // this.cdr.detectChanges();
    }
  }
}
