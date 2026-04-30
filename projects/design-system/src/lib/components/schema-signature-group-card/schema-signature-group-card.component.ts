import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * SchemaSignatureGroupCardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-schema-signature-group-card.component.html</example-url>
 */
@Component({
  selector: 'ds-schema-signature-group-card',
  templateUrl: './schema-signature-group-card.component.html',
})
export class SchemaSignatureGroupCardComponent {
  @Input() className?: string = '';
  @Input() groupName?: string = '';
  @Input() numberOfUsers?: number = 0;

  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();

  handleEdit() {
    this.onEdit.emit();
  }

  handleDelete() {
    this.onDelete.emit();
  }
}
