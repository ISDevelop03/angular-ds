import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

interface IBadge {
  icon?: string;
  label: string;
  href?: string;
  pill: boolean;
  variant: string;
  size: string;
  outline: boolean;
  withDot: boolean;
  iconRight: boolean;
  className: string;
}
/**
 * BadgeGroupComponent
 *
 * Live demo:
 * <example-url>/demo/ds-badge-group.component.html</example-url>
 */
@Component({
  selector: 'ds-badge-group',
  templateUrl: './badge-group.component.html',
  animations: [
    trigger('dropdown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-8px) scale(0.95)' }),
        animate(
          '150ms ease-out',
          style({ opacity: 1, transform: 'translateY(0) scale(1)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '100ms ease-in',
          style({ opacity: 0, transform: 'translateY(-4px) scale(0.95)' })
        ),
      ]),
    ]),
  ],
})
export class BadgeGroupComponent {
  @Input() className = '';
  @Input() moreClassName = '';
  @Input() moreIcon = 'more';
  @Input() moreIconSize = '20px';
  @Input() tags: IBadge[] = [];
  showInvisibleTags = false;

  @ViewChild('container', { read: ElementRef })
  container!: ElementRef<HTMLDivElement>;

  visibleTags: IBadge[] = [];
  invisibleTags: IBadge[] = [];
  overflowCount = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    private host: ElementRef<HTMLElement>
  ) {}

  toggleInvisibleTags(event: Event) {
    event.preventDefault();
    this.showInvisibleTags = !this.showInvisibleTags;
  }

  private calculateOverflow() {
    const containerWidth = this.container.nativeElement.clientWidth;
    // grab only the badge elements (ignore the "+N" one)
    const badgeEls = Array.from(
      this.container.nativeElement.children
    ) as HTMLElement[];

    let total = 0;
    let fit = 0;
    const gap = 4; // px, match your CSS gap

    badgeEls.forEach((el) => (el.style.visibility = 'hidden'));

    for (let i = 0; i < badgeEls.length; i++) {
      total += badgeEls[i].offsetWidth + gap;
      if (total > containerWidth) break;
      fit++;
    }

    // 3) Now slice down to what fits...
    // this.visibleTags = this.tags.slice(0, fit);

    //get the invisibile
    this.invisibleTags = this.tags.slice(fit);
    // ...and count the overflow
    this.overflowCount = this.tags.length - fit;

    badgeEls.forEach((el) => (el.style.visibility = ''));

    // 4) Tell Angular to re-run CD so it picks up our new visibleTags/overflowCount
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    // 2) Show *all* badges first so they actually render in the DOM
    this.visibleTags = this.tags.concat();
    this.overflowCount = 0;
    // 1) Wait a tick to let Angular paint them, then measure + slice
    setTimeout(() => {
      this.calculateOverflow();
    }, 0);
  }

  @HostListener('window:resize')
  onWindowResize() {
    // optional: debounce if you see jank
    this.calculateOverflow();
  }

  // ← listen to *all* clicks on the page
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    // if the dropdown is open, but click was *not* inside this component, close it
    if (this.showInvisibleTags && !this.host.nativeElement.contains(target)) {
      this.showInvisibleTags = false;
      // if you ever see ExpressionChanged… errors here, you can:
      // this.cdr.detectChanges();
    }
  }
}
