import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.stories.html',
})
export class LayerStoryComponent {
  @Input() label: string = 'layer';
  @Input() className?: string = '';

  isLayerOpen = false;

  handleClick() {
    this.isLayerOpen = true;
  }
}
