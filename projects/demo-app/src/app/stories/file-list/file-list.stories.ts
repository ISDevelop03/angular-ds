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
    console.log(
      'blob',
      Object.assign(
        new File([this.blob], 'Fichier des paiements en masse.txt', {
          type: 'text/plain',
        }),
        { id: 'file-1' }
      )
    );
  }

  files: UploadedFiles[] = [
    {
      file: Object.assign(
        new File([this.blob], 'Fichier des paiements en masse.txt', {
          type: 'text/plain',
        }),
        { id: 'file-1' }
      ),
      status: 'error',
      errors: ['Le champ année sur la ligne 34 doit être numérique', 'Le champ année sur la ligne 34 doit être numérique', 'Le champ puissance fiscale sur la ligne 87 ne doit pas dépasser 4 caractères', 'Format de fichier non supporté', 'Taille de fichier trop importante', 'Fichier corrompu ou endommagé', 'Erreur de validation des données', "Problème d'encodage détecté", 'Format de date invalide'],
    },

    {
      file: Object.assign(
        new File([''], 'Fichier des paiements en masse.txt', {
          type: 'text/plain',
        }),
        {
          id: 'file-3',
        }
      ),
      status: 'uploading',
      progress: 50,
    },
    {
      file: Object.assign(
        new File([''], 'Fichier des paiements en masse.txt', {
          type: 'text/plain',
        }),
        {
          id: 'file-3',
        }
      ),
    },
  ];

  downloadableFiles: UploadedFiles[] = [
    {
      file: Object.assign(
        new File([''], 'Fichier des paiements en masse.txt', {
          type: 'text/plain',
        }),
        {
          id: 'file-1',
        }
      ),
    },
  ];

  onDownload(file: File) {
    console.log('onDownload', file);
  }
}
