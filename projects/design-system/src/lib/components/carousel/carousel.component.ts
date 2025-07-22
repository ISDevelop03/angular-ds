import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
/**
 * CarouselComponent
 *
 * Live demo:
 * <example-url>/demo/ds-carousel.component.html</example-url>
 */
@Component({
  selector: 'ds-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @Input() className = '';
  @Input() wrapperClass = 'w-full';
  @Input() itemCount = 0;
  @Input() itemClass = 'carousel-item';

  @ViewChild('carousel')
  carouselRef!: ElementRef<HTMLDivElement>;

  activeIndex = 0;
  visibleSlides: number[] = [];
  private visibleCount = 1;
  private items: HTMLElement[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const carouselEl = this.carouselRef.nativeElement;
    this.items = Array.from(
      carouselEl.querySelectorAll(`.${this.itemClass}`)
    ) as HTMLElement[];

    if (!this.items.length) {
      return;
    }

    const itemWidth = this.items[0].offsetWidth;
    this.visibleCount = Math.floor(carouselEl.offsetWidth / itemWidth) || 1;

    // Delay initial rendering to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.updateVisibleSlides();
      this.cd.detectChanges();
    });

    // Update activeIndex on manual scroll
    carouselEl.addEventListener('scroll', () => {
      const scrollLeft = carouselEl.scrollLeft;
      const width = this.items[0].offsetWidth || carouselEl.offsetWidth;
      this.activeIndex = Math.round(scrollLeft / width);
      this.updateVisibleSlides();
      this.cd.detectChanges();
    });
  }

  private updateVisibleSlides(): void {
    const remaining = this.itemCount - this.visibleCount;
    const total = remaining > 0 ? remaining + 1 : 1;
    this.visibleSlides = Array.from({ length: total }, (_, i) => i);
  }

  private scrollToIndex(index: number): void {
    const item = this.items[index];
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      this.activeIndex = index;
      this.updateVisibleSlides();
      this.cd.detectChanges();
    }
  }

  scrollNext(): void {
    const maxIndex = this.itemCount - this.visibleCount;
    const next = this.activeIndex >= maxIndex ? 0 : this.activeIndex + 1;
    this.scrollToIndex(next);
  }

  scrollPrev(): void {
    const maxIndex = this.itemCount - this.visibleCount;
    const prev = this.activeIndex <= 0 ? maxIndex : this.activeIndex - 1;
    this.scrollToIndex(prev);
  }

  onSelect(index: number): void {
    if (index >= 0 && index < this.itemCount) {
      this.scrollToIndex(index);
    }
  }
}
