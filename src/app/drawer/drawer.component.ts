import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

interface ControlConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'boolean' | 'select';
  value: any;
  options?: any[]; // For select type
}

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
}
