import { Component, Input } from '@angular/core';
import { Theme } from './theme';

@Component({
  selector: 'ds-shortcut',
  templateUrl: './shortcut.component.html',
})
export class DsShortcutCardComponent {
  @Input() icon!: string; // Converted IconIds to string
  @Input() title?: string;
  @Input() link?: string;
  @Input() className?: string;

  theme = Theme;
}
