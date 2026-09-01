import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export type UploadedFiles = {
  file: File & { id: string };
  progress?: number;
  status?: 'uploading' | 'success' | 'error';
  errors?: null | string[];
};

export type FilePreviewKind = 'pdf' | 'text' | 'unsupported';

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
export class FileListComponent implements OnDestroy {
  @Input() className?: string = '';
  @Input() files: UploadedFiles[] = [];
  @Input() isMultiple: boolean = false;
  @Input() isDownloadable: boolean = false;
  @Input() isPreviewable: boolean = false;
  @Input() maxHeight: number | undefined = undefined;
  @Input() showErrorButtonUpload: boolean = false;
  @Output() onDelete = new EventEmitter();
  @Output() onReUpload = new EventEmitter();
  @Output() onDownload = new EventEmitter();
  @Output() onDownloadErrors = new EventEmitter();
  @Output() onPreview = new EventEmitter<File & { id: string }>();

  isPreviewShown = false;
  previewFile: (File & { id: string }) | null = null;
  previewKind: FilePreviewKind = 'unsupported';
  previewUrl: string | null = null;
  previewText: string | null = null;
  safePreviewUrl: SafeResourceUrl | null = null;

  private errorVisibilityMap = new Map<string, boolean>();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnDestroy() {
    this.revokePreviewUrl();
  }

  isErrorVisible(fileId: string): boolean {
    return this.errorVisibilityMap.get(fileId) || false;
  }

  toggleErrors(fileId: string) {
    const currentState = this.errorVisibilityMap.get(fileId) || false;
    this.errorVisibilityMap.set(fileId, !currentState);
  }

  removeFile(fileId: string) {
    this.onDelete.emit(fileId);
  }

  openPreview(file: File & { id: string }) {
    if (!this.isPreviewable || !file) {
      return;
    }

    this.onPreview.emit(file);
    this.closePreview();

    this.previewFile = file;
    this.previewKind = this.getPreviewKind(file);

    if (this.previewKind === 'pdf') {
      const pdfBlob = new Blob([file], { type: 'application/pdf' });
      this.previewUrl = URL.createObjectURL(pdfBlob);
      // Hide Chromium PDF viewer chrome (toolbar / side panes)
      this.safePreviewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.previewUrl + '#toolbar=0&navpanes=0&scrollbar=0&view=FitH'
      );
      this.isPreviewShown = true;
      return;
    }

    if (this.previewKind === 'text') {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewText = (reader.result as string) || '';
        this.isPreviewShown = true;
      };
      reader.onerror = () => {
        this.previewKind = 'unsupported';
        this.isPreviewShown = true;
      };
      reader.readAsText(file);
      return;
    }

    this.isPreviewShown = true;
  }

  closePreview = () => {
    this.isPreviewShown = false;
    this.previewFile = null;
    this.previewText = null;
    this.previewKind = 'unsupported';
    this.revokePreviewUrl();
  };

  downloadFile(file: File) {
    if (this.onDownload.observers.length > 0) {
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

  canPreview(file: File): boolean {
    return !!file && this.getPreviewKind(file) !== 'unsupported';
  }

  private getPreviewKind(file: File): FilePreviewKind {
    const type = (file.type || '').toLowerCase();
    const name = (file.name || '').toLowerCase();

    if (type === 'application/pdf' || name.indexOf('.pdf') === name.length - 4) {
      return 'pdf';
    }

    if (type === 'text/plain' || name.indexOf('.txt') === name.length - 4) {
      return 'text';
    }

    return 'unsupported';
  }

  private revokePreviewUrl() {
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl);
    }
    this.previewUrl = null;
    this.safePreviewUrl = null;
  }
}
