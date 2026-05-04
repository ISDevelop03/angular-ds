import { AfterViewInit, Component, Input } from '@angular/core';
import { AccordionItem } from 'projects/design-system/src/lib/components/accordion/accordion.component';
import { MatriceSignatureCardContext } from 'projects/design-system/src/lib/components/matrice-signature-card/matrice-signature-card.component';

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

@Component({
  selector: 'app-matrice-signature-card',
  templateUrl: './matrice-signature-card.stories.html',
})
export class MatriceSignatureCardStoryComponent implements AfterViewInit {
  @Input() label: string = 'matrice-signature-card';
  @Input() className?: string = '';

  items: Omit<AccordionItem<MatriceSignatureCardContext>, 'content'>[] = [];

  ngAfterViewInit(): void {
    const matriceContext: MatriceSignatureCardContext = {
      groupList: ['Group 1', 'Group 2', 'Group 3'],
      userList: [
        'User 1',
        'User 2',
        'User 3',
        'User 4',
        'User 5',
        'User 6',
        'User 7',
        'User 8',
        'User 9',
        'User 10',
      ],
      validatorNumber: 3,
      order: '1er',
    };
    this.items = [
      {
        id: 'matrice-signature',
        title: 'Matrice de signature',
        context: matriceContext,
      },
    ];
  }
}
