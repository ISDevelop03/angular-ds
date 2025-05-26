import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.stories.html',
})
export class TextStoryComponent {
  variants: string[] = [
    'text-3xs/Light',
    'text-3xs/Regular',
    'text-xs/Regular',
    'text-sm/Medium',
    'text-base/Bold',
    'text-lg/Light',
    'text-xl/Semibold',
    'text-2xl/Bold',
    'paragraph-title',
    'nostyle',
  ];
}
