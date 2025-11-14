import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.stories.html',
})
export class BadgeStoryComponent {
  variants = ['default', 'amber', 'violet', 'blue', 'green', 'red', 'orange'];

  sizes = ['sm', 'md', 'lg'];

  onBadgeClick(event: MouseEvent): void {
    console.log('Badge clicked:', event);
  }
}
