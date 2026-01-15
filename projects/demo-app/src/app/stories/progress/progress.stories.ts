import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.stories.html',
})
export class ProgressStoryComponent {
  percentages = [25, 50, 75, 100];
  variants = ['neutral', 'success', 'warning', 'error'];
  types = ['inline', 'block'];
}
