import { Component, OnInit } from '@angular/core';
import { INode, parse } from 'svgson';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.stories.html',
})
export class IconStoryComponent implements OnInit {
  icons: string[] = [];
  selectedIcons: Set<string> = new Set();
  isDownloading = false;
  private svgContent: string = '';

  ngOnInit(): void {
    fetch('/assets/icons.svg')
      .then((res) => res.text())
      .then((svgText) => {
        this.svgContent = svgText;
        return parse(svgText);
      })
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

  toggleSelection(icon: string, event: Event) {
    event.stopPropagation();
    if (this.selectedIcons.has(icon)) {
      this.selectedIcons.delete(icon);
    } else {
      this.selectedIcons.add(icon);
    }
  }

  isSelected(icon: string): boolean {
    return this.selectedIcons.has(icon);
  }

  selectAll() {
    this.icons.forEach((icon) => this.selectedIcons.add(icon));
  }

  deselectAll() {
    this.selectedIcons.clear();
  }

  get selectedCount(): number {
    return this.selectedIcons.size;
  }

  async downloadSelectedIcons() {
    if (this.selectedIcons.size === 0) {
      alert('Please select at least one icon to download');
      return;
    }

    this.isDownloading = true;

    try {
      const zip = new JSZip();
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(this.svgContent, 'image/svg+xml');

      for (const iconId of this.selectedIcons) {
        const symbol = svgDoc.getElementById(iconId);
        if (symbol) {
          // Get viewBox from symbol or default
          const viewBox = symbol.getAttribute('viewBox') || '0 0 24 24';

          // Create standalone SVG
          const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
${symbol.innerHTML}
</svg>`;

          zip.file(`${iconId}.svg`, svgContent);
        }
      }

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'icons.zip');
    } catch (error) {
      console.error('Error creating zip:', error);
      alert('Failed to create zip file');
    } finally {
      this.isDownloading = false;
    }
  }
}
