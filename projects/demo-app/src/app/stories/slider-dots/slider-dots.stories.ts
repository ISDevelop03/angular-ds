import { Component, Input } from '@angular/core';

interface Slide {
  id: number;
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-slider-dots',
  templateUrl: './slider-dots.stories.html',
})
export class SliderDotsStoryComponent {
  @Input() label: string = 'slider-dots';
  @Input() className?: string = '';

  slides: Slide[] = [];
  activeIndex = 0;

  ngOnInit(): void {
    // Replace this with a real API fetch if you want
    this.slides = [
      { id: 1, title: 'Slide One', imageUrl: 'https://placehold.co/400' },
      { id: 2, title: 'Slide Two', imageUrl: 'https://placehold.co/600' },
      { id: 3, title: 'Slide Three', imageUrl: 'https://placehold.co/500' },
      { id: 4, title: 'Slide Four', imageUrl: 'https://placehold.co/700' },
    ];
  }

  onPrev(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.slides.length - 1; // optional wrap
    }
  }

  onNext(): void {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0; // optional wrap
    }
  }

  onSelectDot(i: number): void {
    this.activeIndex = i;
  }
}
