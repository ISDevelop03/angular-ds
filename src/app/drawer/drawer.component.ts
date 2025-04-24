import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ControlConfig } from 'utils';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateY(0%)' })),
      state('out', style({ transform: 'translateY(100%)' })),
      transition('out => in', [animate('300ms ease-in-out')]),
      transition('in => out', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class DrawerComponent {
  @Input() title = 'Drawer';
  @Input() isOpen = false;
  @Input() controls: ControlConfig[] = [];

  @Output() closed = new EventEmitter<void>();
  @Output() controlChange = new EventEmitter<{ name: string; value: any }>();

  toggle() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.closed.emit();
    }
  }

  onControlChange(name: string, value: any) {
    this.controlChange.emit({ name, value });
  }

  toJson(val: any): string {
    try {
      return JSON.stringify(val, null, 2);
    } catch {
      return String(val);
    }
  }

  /** emit parsed JSON, or raw string if invalid */
  onJsonChange(name: string, raw: string) {
    let parsed: any = raw;
    try {
      parsed = JSON.parse(raw);
    } catch {
      // invalid JSON — you might want to show an error to user
    }
    this.controlChange.emit({ name, value: parsed });
  }
}
