import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
})
export class ContainerStoryComponent {
  layouts = ['base', 'fluid', 'full', 'small'];
  spacings = [
    'base',
    'paragraph',
    'paragraph_background',
    'block_paragraph',
    'big_space',
    'small_space',
    'no_space',
  ];
}
