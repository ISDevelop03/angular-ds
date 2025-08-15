// upload-file.component.ts
import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { uploadFileThemes, UploadFileTheme } from './theme';

/**
 * Upload-fileComponent
 *
 * Live demo:
 * <example-url>/demo/ds-upload-file.component.html</example-url>
 */
@Component({
  selector: 'ds-upload-file',
  templateUrl: './upload-file.component.html',
})
export class UploadFileComponent implements OnInit {
  @Input() variant: string = 'default';
  @Input() maxFileSizeMB: number = 10;
  @Input() allowedExtensions: string[] = ['csv'];
  @Input() className = '';
  @Input() isMultiple: boolean = false;
  @Input() errors: string[] = [];
  @Input() hasError: boolean = false;
  @Input() progress: number = 0;
  @Input() loading: boolean = false;
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['progress']) {
      console.log('Progress changed:', changes['progress'].currentValue);
    }
  }

  /** If true, we'll fake the upload progress (instead of immediately reading). */
  @Input() simulateSlowUpload: boolean = false;

  @Output() fileSelected = new EventEmitter<File>();

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  theme = uploadFileThemes;
  currentTheme: UploadFileTheme;

  /** for preview */
  selectedFile: File | null = null;
  selectedFiles: (File & { uniqueId: string })[] = [];
  previewRows: string[][] = [];
  
  /** for errors accordion */
  showErrors: boolean = false;



  ngOnInit() {
    this.currentTheme = this.theme[this.variant] || this.theme.light;
  }

  openFileInput() {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.click();
    }
  }

  private generateUniqueId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private addUniqueIdToFile(file: File): File & { uniqueId: string } {
    const fileWithId = file as File & { uniqueId: string };
    fileWithId.uniqueId = this.generateUniqueId();
    return fileWithId;
  }

  onFileChange(evt: Event) {
    const input = evt.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    if(this.isMultiple) {
      this.handleMultipleFiles(Array.from(input.files));
    } else {
      this.handleFile(input.files[0]);
    }
  }

  onDrop(evt: DragEvent) {
    evt.preventDefault();
    if (!evt.dataTransfer) return;
    this.handleFile(evt.dataTransfer.files[0]);
  }

  onDragOver(evt: DragEvent) {
    evt.preventDefault();
  }

  private handleMultipleFiles(files: File[]) {
    for (const file of files) {
      this.handleFile(file);
    }
  }

  removeFile(uniqueId: string) {
    this.selectedFiles = this.selectedFiles.filter(file => file.uniqueId !== uniqueId);
  }

  toggleErrors() {
    this.showErrors = !this.showErrors;
  }

  private handleFile(file: File) {
    
    // Validate extension
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    if (!this.allowedExtensions.includes(ext)) {
      alert(`Invalid file type. Allowed: ${this.allowedExtensions.join(', ')}`);
      return;
    }

    // Validate size
    if (file.size > this.maxFileSizeMB * 1024 * 1024) {
      alert(`Max file size is ${this.maxFileSizeMB} MB`);
      return;
    }

    // Add unique ID to file
    const fileWithId = this.addUniqueIdToFile(file);

    if(this.isMultiple){
      this.selectedFiles.push(fileWithId);
      this.loading = true;
      this.progress = 0;
    }
    else{
      this.selectedFile = fileWithId;
    }

    // real‐world: immediately show preview/progress
    // this.parsePreview(fileWithId);
    this.fileSelected.emit(fileWithId);
  
  }

  getErrorsContent(): string {
    if (!this.errors || this.errors.length === 0) {
      return '';
    }
    
    const errorsList = this.errors.map(error => `<li class="text-red-600 text-sm py-1">${error}</li>`).join('');
    return `<ul class="list-disc ml-4 space-y-1">${errorsList}</ul>`;
  }
}
