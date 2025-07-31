// upload-file.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
  @Input() downloadTemplateLink: string;
  @Input() className = '';
  @Input() isMultiple: boolean = false;

  /** If true, we'll fake the upload progress (instead of immediately reading). */
  @Input() simulateSlowUpload: boolean = false;

  @Output() fileSelected = new EventEmitter<File>();

  theme = uploadFileThemes;
  currentTheme: UploadFileTheme;

  /** for preview */
  selectedFile: File | null = null;
  selectedFiles: (File & { uniqueId: string })[] = [];
  previewRows: string[][] = [];

  /** new: loading + (optional) progress */
  loading: boolean = false;
  progress: number = 30; // from 0 to 100

  ngOnInit() {
    this.currentTheme = this.theme[this.variant] || this.theme.light;
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
    console.log("files", files)
    for (const file of files) {
      this.handleFile(file);
    }
  }

  removeFile(uniqueId: string) {
    this.selectedFiles = this.selectedFiles.filter(file => file.uniqueId !== uniqueId);
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
      this.loading = true;
      this.progress = 0;
    }
    

    if (this.simulateSlowUpload) {
      this.mockUploadThenPreview(fileWithId);
    } else {
      // real‐world: immediately show preview/progress
      this.parsePreview(fileWithId);
      this.fileSelected.emit(fileWithId);
    }

    // If you were uploading to a server, you could also hook into
    // an XHR upload progress event here, e.g.:
    // const xhr = new XMLHttpRequest();
    // xhr.upload.onprogress = (e) => {
    //   if (e.lengthComputable) {
    //     this.progress = Math.round((e.loaded / e.total) * 100);
    //   }
    // };
    // xhr.onloadend = () => {
    //   this.loading = false;
    // };
    // ... etc.
  }


  private mockUploadThenPreview(file: File & { uniqueId: string }) {
    // How often (ms) to tick, and how many ticks total → ~3 seconds
    const totalDurationMs = 3000;
    const tickIntervalMs = 100; // every 100ms
    const totalTicks = totalDurationMs / tickIntervalMs; // e.g. 30 ticks
    let ticks = 0;

    const intervalId = window.setInterval(() => {
      ticks++;
      this.progress = Math.round((ticks / totalTicks) * 100);

      if (ticks >= totalTicks) {
        clearInterval(intervalId);

        // Ensure progress is exactly 100
        this.progress = 100;

        // Now that "upload" is "done," parse the preview and emit
        this.parsePreview(file);
        this.fileSelected.emit(file);
      }
    }, tickIntervalMs);
  }

  private parsePreview(file: File & { uniqueId: string }) {
    // only CSV preview
    if (file.type !== 'text/csv' && !file.name.toLowerCase().endsWith('.csv')) {
      // no preview; immediately clear loading
      this.previewRows = [];
      this.loading = false;
      return;
    }

    const reader = new FileReader();

    reader.onprogress = (event: ProgressEvent) => {
      if (event.lengthComputable) {
        this.progress = Math.round((event.loaded / event.total) * 100);
      }
    };

    reader.onload = () => {
      const text = reader.result as string;
      const lines = text
        .split(/\r\n|\n/)
        .filter((l) => l.trim().length)
        .slice(0, 6); // header + first 5 rows
      this.previewRows = lines.map((line) => line.split(/[,;]+/));

      // Parsing is done, turn off loading
      this.loading = false;
      this.progress = 100;
    };

    reader.onerror = () => {
      alert('Error reading file for preview.');
      this.loading = false;
      this.progress = 0;
    };

    reader.readAsText(file);
  }
}
