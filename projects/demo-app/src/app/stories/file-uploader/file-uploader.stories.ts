import { Component, Input } from '@angular/core';
import { UploadedFiles } from 'projects/design-system/src/lib/components/file-list/file-list.component';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.stories.html',
})
export class FileUploaderStoryComponent {
  @Input() label: string = 'file-uploader';
  @Input() className?: string = '';

  successfullFiles: UploadedFiles[] = [];
  errorFiles: UploadedFiles[] = [];
  multipleFiles: UploadedFiles[] = [];
  multipleErrorFiles: UploadedFiles[] = [];

  defaultFiles: UploadedFiles[] = [
    {
      file: Object.assign(new File([''], 'test.txt', { type: 'text/plain' }), {
        id: 'file-1',
      }),
      progress: 100,
      status: 'success',
      errors: [],
    },
    {
      file: Object.assign(new File([''], 'test.txt', { type: 'text/plain' }), {
        id: 'file-2',
      }),
      progress: 100,
      status: 'success',
      errors: [],
    },
  ];

  onFileSuccessfullChange(event: (File & { id: string })[]) {
    event.forEach((file, index) => {
      const fileItem: UploadedFiles = {
        file: file,
        progress: 0,
        status: 'uploading',
        errors: [],
      } as UploadedFiles;
      this.successfullFiles.push(fileItem);
      this.simulateSuccessfullUpload(fileItem);
    });
  }

  onFileErrorChange(event: (File & { id: string })[]) {
    const files: UploadedFiles[] = event.map((file) => {
      return {
        file: file,
        progress: 0,
        status: 'uploading',
        errors: [],
      } as UploadedFiles;
    });
    this.errorFiles = files;
    this.simulateErrorUpload(this.errorFiles[0]);
  }

  onFileMultipleChange(event: (File & { id: string })[]) {
    event.forEach((file, index) => {
      const fileItem: UploadedFiles = {
        file: file,
        progress: 0,
        status: 'uploading',
        errors: [],
      } as UploadedFiles;
      if (
        !this.multipleFiles.some(
          (existingFile) => existingFile.file.id === fileItem.file.id
        )
      ) {
        this.multipleFiles.push(fileItem);
      }
      this.simulateSuccessfullUpload(fileItem);
    });
    console.log(this.multipleFiles);
  }

  onFileMultipleRemove(id: string) {
    this.multipleFiles = this.multipleFiles.filter(
      (file) => file.file.id !== id
    );
  }

  onFileMultipleReUpload(id: string) {
    this.multipleErrorFiles = this.multipleErrorFiles.filter(
      (file) => file.file.id !== id
    );
  }

  onFileMultipleErrorChange(event: (File & { id: string })[]) {
    event.forEach((file, index) => {
      const fileItem: UploadedFiles = {
        file: file,
        progress: 0,
        status: 'uploading',
        errors: [],
      } as UploadedFiles;
      this.multipleErrorFiles.push(fileItem);
      this.simulateErrorUpload(fileItem);
    });
  }

  onFileRemove(id: string) {
    this.successfullFiles = this.successfullFiles.filter(
      (file) => file.file.id !== id
    );
  }

  onFileDefaultRemove(id: string) {
    this.defaultFiles = this.defaultFiles.filter((file) => file.file.id !== id);
  }

  onFileDefaultChange(event: (File & { id: string })[]) {
    event.forEach((file, index) => {
      const fileItem: UploadedFiles = {
        file: file,
        progress: 0,
        status: 'uploading',
        errors: [],
      } as UploadedFiles;
      if (
        !this.defaultFiles.some(
          (existingFile) => existingFile.file.id === fileItem.file.id
        )
      ) {
        this.defaultFiles.push(fileItem);
      }
      this.simulateSuccessfullUpload(fileItem);
    });
  }

  private simulateSuccessfullUpload(fileItem: UploadedFiles) {
    const uploadTime = 200 + Math.random() * 300; // 2-5 seconds
    const progressInterval = 100; // Update progress every 100ms
    const totalSteps = uploadTime / progressInterval;
    let currentStep = 0;
    const progressTimer = setInterval(() => {
      currentStep++;
      const progress = Math.min((currentStep / totalSteps) * 100, 100);

      fileItem.progress = Math.round(progress);

      // Update status based on progress
      if (progress >= 100) {
        fileItem.status = 'success';
        fileItem.progress = 100;
        clearInterval(progressTimer);
      }
    }, progressInterval);
  }

  private simulateErrorUpload(fileItem: UploadedFiles) {
    const uploadTime = 2000 + Math.random() * 3000; // 2-5 seconds
    const progressInterval = 100; // Update progress every 100ms
    const totalSteps = uploadTime / progressInterval;
    let currentStep = 0;
    const progressTimer = setInterval(() => {
      currentStep++;
      const progress = Math.min((currentStep / totalSteps) * 100, 100);

      fileItem.progress = Math.round(progress);

      // Update status based on progress
      if (progress >= 100) {
        fileItem.status = 'error';
        fileItem.progress = 100;
        fileItem.errors = [
          'Le champ année sur la ligne 34 doit être numérique',
          'Le champ puissance fiscale sur la ligne 87 ne doit pas dépasser 4 caractères',
          'Format de fichier non supporté',
          'Taille de fichier trop importante',
          'Fichier corrompu ou endommagé',
          'Erreur de validation des données',
          "Problème d'encodage détecté",
          'Format de date invalide',
        ];
        clearInterval(progressTimer);
      }
    }, progressInterval);
  }
}
