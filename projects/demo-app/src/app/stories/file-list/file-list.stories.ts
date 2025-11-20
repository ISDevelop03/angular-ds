import { Component, Input } from '@angular/core';
import { UploadedFiles } from 'projects/design-system/src/lib/components/file-list/file-list.component';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.stories.html',
})
export class FileListStoryComponent {
  @Input() label: string = 'file-list';
  @Input() className?: string = '';
  blob = new Blob([new Uint8Array(303039)]);

  ngOnInit(): void {
    console.log('blob', Object.assign(new File([this.blob], 'test.txt', { type: 'text/plain' }), { id: 'file-1' }));
  }


  files: UploadedFiles[] = [
    {
      file: Object.assign(new File([this.blob], 'test.txt', { type: 'text/plain' }), { id: 'file-1' }),
      status: 'error',
    },
    {
      file: Object.assign(new File([''], 'test.txt', { type: 'text/plain' }), { id: 'file-2' }),
      status: 'success',
    },
    {
      file: Object.assign(new File([''], 'test.txt', { type: 'text/plain' }), { id: 'file-3' }),
      status: 'uploading',
      progress: 50,
    },
    {
      file: Object.assign(new File([''], 'test.txt', { type: 'text/plain' }), { id: 'file-3' }),
    },
  ];

  downloadableFiles: UploadedFiles[] = [
    {
      file: Object.assign(new File([''], 'test.txt', { type: 'text/plain' }), { id: 'file-1' }),
    },
  ];

  onDownload(file: File) {
    console.log('onDownload', file);
  }
}
