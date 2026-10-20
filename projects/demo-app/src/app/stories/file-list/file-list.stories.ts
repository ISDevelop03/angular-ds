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

  // 1000 generated errors, used to test rendering of very long error lists.
  // Must be declared before `files` since property initializers run in order.
  manyErrors: string[] = Array.from(
    { length: 1000 },
    (_, i) => `Le champ année sur la ligne ${i + 1} doit être numérique`
  );

  files: UploadedFiles[] = [
    {
      file: Object.assign(
        new File(
          [
            'Référence;Montant;Bénéficiaire\nPAY-001;1500.00;Société Alpha\nPAY-002;230.50;Société Beta\nPAY-003;980.00;Société Gamma',
          ],
          'Fichier des paiements en masse.txt',
          {
            type: 'text/plain',
          }
        ),
        { id: 'file-success-1' }
      ),
      status: 'success',
    },
    {
      file: Object.assign(
        new File([this.blob], 'Fichier des paiements en masse.txt', {
          type: 'text/plain',
        }),
        { id: 'file-1' }
      ),
      status: 'error',
      errors: this.manyErrors,
      //errors: ['Le champ année sur la ligne 34 doit être numérique', 'Le champ année sur la ligne 34 doit être numérique', 'Le champ puissance fiscale sur la ligne 87 ne doit pas dépasser 4 caractères'],
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

  onDownloadErrors(fileId: string) {
    console.log('onDownloadErrors', fileId);
  }
}
