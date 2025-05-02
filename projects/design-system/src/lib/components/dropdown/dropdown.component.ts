import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { dropdown } from './theme';
import { DropdownItem } from './types';

@Component({
  selector: 'ds-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DsDropdownComponent implements OnInit, OnDestroy {
  @Input() items: DropdownItem[] = [];
  @Input() variant: keyof typeof dropdown.variants = 'base';
  @Input() anchor: string = 'bottom end';
  @Input() className: string = '';
  @Input() isOpen: boolean = false;

  dropdown = dropdown;

  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  onItemClick(callback?: () => void) {
    if (callback) {
      callback();
    }
    this.closeMenu();
  }

  handleOutsideClick = (event: MouseEvent) => {
    const clickedInside = this._elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeMenu();
    }
  };
}
