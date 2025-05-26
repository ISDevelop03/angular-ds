import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.stories.html',
})
export class BadgeStoryComponent {
  variants = ['default', 'amber', 'blue', 'green', 'red', 'neutral', 'stroke1'];

  sizes = ['sm', 'md', 'lg'];
}
