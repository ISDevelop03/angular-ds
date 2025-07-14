import { Component, Input, ElementRef, ViewChild } from '@angular/core';
/**
 * MarqueeComponent
 *
 * Live demo:
 * <example-url>/demo/ds-marquee.component.html</example-url>
 */
@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
})
export class MarqueeComponent {
  /** px per second */
  @Input() speed = 100;
  /** 'left' | 'right' */
  @Input() direction: 'left' | 'right' = 'left';
  /** whether to pause on hover */
  @Input() pauseOnHover = true;

  // className for custom styles
  @Input() className?: string = '';
  /** whether to duplicate the content */
  @ViewChild('marquee') marquee!: ElementRef<HTMLDivElement>;

  /** computed animation duration in seconds */
  durationSeconds = 0;

  ngAfterViewInit() {
    const el = this.marquee.nativeElement;
    // we duplicate the content once, so total scroll width is half of scrollWidth
    const singleWidth = el.scrollWidth / 2;
    // time = distance / speed
    this.durationSeconds = singleWidth / this.speed;
  }
}
