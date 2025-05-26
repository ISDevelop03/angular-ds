// upload-file.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { uploadFileThemes, UploadFileTheme } from './theme';

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

  @Output() fileSelected = new EventEmitter<File>();

  theme = uploadFileThemes;
  currentTheme: UploadFileTheme;

  /** for preview */
  selectedFile: File | null = null;
  previewRows: string[][] = [];

  ngOnInit() {
    this.currentTheme = this.theme[this.variant] || this.theme.light;
  }

  onFileChange(evt: Event) {
    const input = evt.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    this.handleFile(input.files[0]);
  }

  onDrop(evt: DragEvent) {
    evt.preventDefault();
    if (!evt.dataTransfer) return;
    this.handleFile(evt.dataTransfer.files[0]);
  }

  onDragOver(evt: DragEvent) {
    evt.preventDefault();
  }

  private handleFile(file: File) {
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    if (!this.allowedExtensions.includes(ext)) {
      alert(`Invalid file type. Allowed: ${this.allowedExtensions.join(', ')}`);
      return;
    }
    if (file.size > this.maxFileSizeMB * 1024 * 1024) {
      alert(`Max file size is ${this.maxFileSizeMB} MB`);
      return;
    }

    this.selectedFile = file;
    this.parsePreview(file);
    this.fileSelected.emit(file);
  }

  private parsePreview(file: File) {
    // only CSV preview
    if (file.type !== 'text/csv' && !file.name.toLowerCase().endsWith('.csv')) {
      this.previewRows = [];
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      const lines = text
        .split(/\r\n|\n/)
        .filter((l) => l.trim().length)
        .slice(0, 6); // header + 5 rows

      this.previewRows = lines.map((line) => line.split(/[,;]+/));
    };
    reader.readAsText(file);
  }
}
