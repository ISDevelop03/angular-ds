import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { theme } from './theme';
import { UploadedFiles } from '../file-list/file-list.component';
/**
 * FileUploaderComponent
 *
 * Live demo:
 * <example-url>/demo/ds-file-uploader.component.html</example-url>
 */
@Component({
  selector: 'ds-file-uploader',
  templateUrl: './file-uploader.component.html',
})
export class FileUploaderComponent {
  @Input() allowedExtensions: string[] = [];
  @Input() className?: string = '';
  @Input() maxFileSizeMB: number = 10;
  @Input() variant: string = 'default';
  @Input() isMultiple: boolean = false;
  @Input() files: UploadedFiles[] = [];
  @Input() disabled: boolean = false;
  @Output() onChange = new EventEmitter<File | File[]>();
  @Output() onRemove = new EventEmitter<string>();
  @Output() onReUpload = new EventEmitter<string>();

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  currentTheme = theme[this.variant];

  selectedFiles: (File & { id: string })[] = [];

  handleFile(files: File[]) {
    const errors = [];
    files.forEach((file) => {
      const ext = (file.name.split('.').pop() || '').toLowerCase();
      if (
        !this.allowedExtensions.includes(ext) &&
        this.allowedExtensions.length > 0
      ) {
        errors.push(
          `Invalid file type. Allowed: ${this.allowedExtensions.join(', ')}`
        );
      }
    });

    files.forEach((file) => {
      if (
        file.size > this.maxFileSizeMB * 1024 * 1024 &&
        this.maxFileSizeMB > 0
      ) {
        errors.push(`Max file size is ${this.maxFileSizeMB} MB`);
      }
    });

    if (!this.isMultiple && this.files.length >= 1) {
      errors.push('Multiple files are not allowed');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }

    const filesWithId = Array.from(files).map((file) => {
      const fileWithId = file as File & { id: string };
      fileWithId.id = this.generateUniqueId();
      return fileWithId;
    });
    if (filesWithId.length > 0) {
      this.onChange.emit(filesWithId);
    }
  }

  openFileInput() {
    if (this.fileInput && this.fileInput.nativeElement && !this.disabled) {
      this.fileInput.nativeElement.click();
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.handleFile(Array.from(event.dataTransfer.files) as File[]);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  private generateUniqueId(): string {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';
    for (let group = 0; group < 4; group++) {
      for (let i = 0; i < 4; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
      }
      if (group < 3) {
        id += '-';
      }
    }
    return id;
  }

  onFileChange(event: Event) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    this.handleFile(Array.from(input.files) as File[]);
  }

  removeFile(id: string) {
    this.onRemove.emit(id);
    this.fileInput.nativeElement.value = '';
  }

  reUploadFile(id: string) {
    if (!this.disabled) {
      this.fileInput.nativeElement.click();
    }
    this.onReUpload.emit(id);
    this.fileInput.nativeElement.value = '';
  }
}
