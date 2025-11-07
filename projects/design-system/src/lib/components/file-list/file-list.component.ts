import { Component, EventEmitter, Input, Output } from '@angular/core';

export type UploadedFiles = {
  file: File & { id: string };
  progress?: number;
  status?: 'uploading' | 'success' | 'error';
  errors?: null | string[];
};
/**
 * FileListComponent
 *
 * Live demo:
 * <example-url>/demo/ds-file-list.component.html</example-url>
 */
@Component({
  selector: 'ds-file-list',
  templateUrl: './file-list.component.html',
})
export class FileListComponent {
  @Input() className?: string = '';
  @Input() files: UploadedFiles[] = [];
  @Input() isMultiple: boolean = false;
  @Input() isDownloadable: boolean = false;
  @Output() onDelete = new EventEmitter(); 
  @Output() onReUpload = new EventEmitter();
  @Output() onDownload = new EventEmitter();


  private errorVisibilityMap = new Map<string, boolean>();

  isErrorVisible(fileId: string): boolean {
    return this.errorVisibilityMap.get(fileId) || false;
  }

  toggleErrors(fileId: string) {
    const currentState = this.errorVisibilityMap.get(fileId) || false;
    this.errorVisibilityMap.set(fileId, !currentState);
  }

  removeFile(fileId:string) {
    this.onDelete.emit(fileId)
  }

  reUploadFile(fileId:string) {
    this.onReUpload.emit(fileId)
  }

  downloadFile(file: File) {
    if(this.onDownload.observers.length > 0) {
      this.onDownload.emit(file);
    } else {
      const blob = new Blob([file], { type: file.type });
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }
  }

  formatFileSize(sizeInBytes: number): string {
    const sizeInMB = sizeInBytes / 1024 / 1024;
    if (sizeInMB < 1) {
      const sizeInKB = sizeInBytes / 1024;
      return `${sizeInKB.toFixed(2)} Ko`;
    }
    return `${sizeInMB.toFixed(2)} Mo`;
  }
}
