import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schema-signature-group-card',
  templateUrl: './schema-signature-group-card.stories.html',
})
export class SchemaSignatureGroupCardStoryComponent {
  @Input() label: string = 'schema-signature-group-card';
  @Input() className?: string = '';

  handleEdit() {
    console.log('edit');
  }

  handleDelete() {
    console.log('delete');
  }
}
