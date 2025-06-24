import { Component, OnInit } from '@angular/core';
import { INode, parse } from 'svgson';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.stories.html',
})
export class IconStoryComponent implements OnInit {
  icons: string[] = [];

  ngOnInit(): void {
    fetch('/assets/icons.svg')
      .then((res) => res.text())
      .then((svgText) => parse(svgText))
      .then((json) => {
        this.icons = json.children.map((child: INode) => {
          if (child.attributes.id) {
            return child.attributes.id;
          }
        });
      });
  }

  copyToClipboard(name: string) {
    const textarea = document.createElement('textarea');
    textarea.value = name;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(`Copied '${name}' to clipboard`);
  }
}
