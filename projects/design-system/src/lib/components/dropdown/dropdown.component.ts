import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { dropdown } from './theme';
import { DropdownItem } from './types';

@Component({
  selector: 'ds-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DsDropdownComponent implements OnInit, OnDestroy {
  @Input() items: DropdownItem[] = [];
  @Input() variant: keyof typeof dropdown.variants = 'base';
  @Input() className = '';
  isOpen = false;

  private static zIndexCounter = 10000;

  @ViewChild('trigger') trigger: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  dropdown = dropdown;
  menuStyles: { [key: string]: string } = {};

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  toggleMenu() {
    if (!this.isOpen) {
      // 1. assign a fresh, higher z-index
      const myZ = ++DsDropdownComponent.zIndexCounter;
      this.menuStyles = {
        position: 'fixed',
        visibility: 'hidden', // measure off-screen
        top: '0px',
        left: '0px',
        zIndex: `${myZ}`,
      };

      this.isOpen = true;
      this.cd.detectChanges(); // force the menu into the DOM

      this.setMenuPosition(); // compute top/left
      this.menuStyles.visibility = 'visible';
    } else {
      this.closeMenu();
    }
  }

  private setMenuPosition() {
    if (!this.trigger || !this.menu) return;

    const t = this.trigger.nativeElement.getBoundingClientRect();
    const mEl = this.menu.nativeElement as HTMLElement;
    const mW = mEl.offsetWidth;
    const mH = mEl.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // vertical: below unless it overflows
    let top = t.bottom;
    if (t.bottom + mH > vh) {
      top = t.top - mH;
    }
    top = Math.max(0, top);

    // horizontal: align left unless it overflows right
    let left = t.left;
    if (t.left + mW > vw) {
      left = t.right - mW;
    }
    left = Math.max(0, left);

    this.menuStyles = {
      ...this.menuStyles,
      top: `${top}px`,
      left: `${left}px`,
    };
  }

  closeMenu() {
    this.isOpen = false;
    this.menuStyles = {};
  }

  onItemClick(cb?: () => void) {
    if (cb) cb();
    this.closeMenu();
  }

  handleOutsideClick = (e: MouseEvent) => {
    const tgt = e.target as Node;
    if (
      this.isOpen &&
      !this.trigger.nativeElement.contains(tgt) &&
      this.menu &&
      !this.menu.nativeElement.contains(tgt)
    ) {
      this.closeMenu();
    }
  };

  /** catch _any_ click inside this component and stop it */
  @HostListener('click', ['$event'])
  public stopEvent(event: MouseEvent) {
    event.stopPropagation();
  }
}
