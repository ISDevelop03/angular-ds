import { Component } from '@angular/core';

/**
 * LoaderStoryComponent
 *
 * Demonstrates the ds-loader component with its various configurations.
 * The loader component provides loading indicators with two display types:
 * - **contained**: Positioned absolutely within a parent container
 * - **fill**: Fixed position covering the entire viewport
 *
 * Features:
 * - Customizable overlay visibility
 * - Customizable spinner visibility
 * - Custom CSS class support
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.stories.html',
})
export class LoaderStoryComponent {
  /** Available loader types */
  types: ('fill' | 'contained')[] = ['contained', 'fill'];

  /** Toggle states for demo purposes */
  showFillLoader = false;
}
