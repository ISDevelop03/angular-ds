import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.stories.html',
})
export class UploadFileStoryComponent {
  @Input() label: string = 'upload-file';
  @Input() className?: string = '';
  templateLink = 'assets/template.csv';
  variant: 'light' | 'dark' = 'light';

  onFileSelected(file: File) {
    console.log('form', file);
  }
}
