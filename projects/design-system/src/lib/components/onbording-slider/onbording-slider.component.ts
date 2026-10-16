import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { OnbordingSlideComponent } from './onbording-slide.component';
import { ONBORDING_SLIDER_THEME } from './theme';

/**
 * OnbordingSliderComponent
 *
 * Shows one projected slide at a time. Each `ds-onbording-slide` can host any component.
 *
 * Live demo:
 * <example-url>/demo/ds-onbording-slider.component.html</example-url>
 */
@Component({
  selector: 'ds-onbording-slider',
  templateUrl: './onbording-slider.component.html',
})
export class OnbordingSliderComponent implements AfterContentInit {
  @Input() className = '';
  @Input() showDots = true;

  @ContentChildren(OnbordingSlideComponent)
  slides!: QueryList<OnbordingSlideComponent>;

  theme = ONBORDING_SLIDER_THEME.default;
  activeIndex = 0;
  dotIndexes: number[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngAfterContentInit(): void {
    this.bindSlides();
    this.syncSlides(true);
    this.slides.changes.subscribe(() => {
      this.bindSlides();
      this.syncSlides(true);
      this.cd.detectChanges();
    });
    // Visibility is assigned after the first content check.
    setTimeout(() => this.cd.detectChanges());
  }

  get slideList(): OnbordingSlideComponent[] {
    return this.slides ? this.slides.toArray() : [];
  }

  goTo(index: number): void {
    const total = this.slideList.length;
    if (index < 0 || index >= total) {
      return;
    }
    this.activeIndex = index;
    this.syncSlides();
  }

  prev(): void {
    this.goTo(this.activeIndex - 1);
  }

  next(): void {
    this.goTo(this.activeIndex + 1);
  }

  private bindSlides(): void {
    this.slideList.forEach((slide) => {
      slide.onActivated = () => {
        const index = this.slideList.indexOf(slide);
        if (index >= 0) {
          this.goTo(index);
        }
      };
    });
  }

  private syncSlides(useActiveInput = false): void {
    const list = this.slideList;
    if (useActiveInput) {
      const requestedIndex = list.findIndex((slide) => slide.active);
      if (requestedIndex >= 0) {
        this.activeIndex = requestedIndex;
      }
    }

    if (this.activeIndex > list.length - 1) {
      this.activeIndex = 0;
    }

    this.dotIndexes = list.map(function (_, index) {
      return index;
    });

    list.forEach((slide, index) => {
      slide.setActiveFromParent(index === this.activeIndex);
    });
  }
}
