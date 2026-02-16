import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story-demo-code-block',
  templateUrl: './story-demo-code-block.component.html',
})
export class StoryDemoCodeBlockComponent {
  @Input() title = '';
  @Input() htmlSnippet = '';
  @Input() tsSnippet = '';

  mainTab: 'preview' | 'code' = 'preview';
  codeTab: 'html' | 'ts' = 'html';

  get hasCode(): boolean {
    return !!this.htmlSnippet || !!this.tsSnippet;
  }

  setMainTab(tab: 'preview' | 'code') {
    this.mainTab = tab;
  }

  setCodeTab(tab: 'html' | 'ts') {
    this.codeTab = tab;
  }
}
