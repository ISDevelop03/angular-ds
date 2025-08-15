import { Component, Input } from '@angular/core';
import { UploadedFiles } from 'projects/design-system/src/lib/components/file-list/file-list.component';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.stories.html',
})
export class FileListStoryComponent {
  @Input() label: string = 'file-list';
  @Input() className?: string = '';

  files: UploadedFiles[] = [
    {
      file: Object.assign(new File([''], 'test.txt', { type: 'text/plain' }), { id: 'file-1' }),
    },
    {
      file: Object.assign(new File([''], 'test.txt', { type: 'text/plain' }), { id: 'file-2' }),
    },
    {
      file: Object.assign(new File([''], 'test.txt', { type: 'text/plain' }), { id: 'file-3' }),
    }
  ];

  onDownload(file: File) {
    console.log('onDownload', file);
  }
}
