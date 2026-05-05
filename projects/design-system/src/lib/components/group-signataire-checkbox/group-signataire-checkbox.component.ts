import { Component, EventEmitter, Input, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { getFirstTwoLetters } from '../../utils';
/**
 * GroupSignataireCheckboxComponent
 *
 * Live demo:
 * <example-url>/demo/ds-group-signataire-checkbox.component.html</example-url>
 */
@Component({
  selector: 'ds-group-signataire-checkbox',
  templateUrl: './group-signataire-checkbox.component.html',
})
export class GroupSignataireCheckboxComponent {
  @Input() className?: string = '';
  @Input() users: string[] = [];
  @Input() checked: boolean = false;

  @ViewChild('usersDropdownContent') usersDropdownContent: TemplateRef<any>;

  @Output() change = new EventEmitter<boolean>();
  @Output() toggle = new EventEmitter<boolean>();


  getFirstTwoLetters = getFirstTwoLetters;

  isChecked = this.checked;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.checked) {
      this.isChecked = this.checked;
    }
  }

  handleCheckboxChange() {
    this.isChecked = !this.isChecked;
    this.change.emit(this.isChecked);
  }

  toggleDropdown(event: boolean) {
    this.toggle.emit(event);
  }

}
