import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { AccordionItem } from '../accordion/accordion.component';

export type MatriceSignatureCardContext = {
  groupList: string[];
  userList: string[];
  validatorNumber: number;
  order: string;
};

/**
 * MatriceSignatureCardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-matrice-signature-card.component.html</example-url>
 */
@Component({
  selector: 'ds-matrice-signature-card',
  templateUrl: './matrice-signature-card.component.html',
})
export class MatriceSignatureCardComponent
  implements AfterViewInit, OnChanges
{
  @Input() className?: string = '';
  @Input() items: AccordionItem<MatriceSignatureCardContext>[] = [];
  /** Items passed to the accordion, with `content` set from the view template. */
  accordionItems: AccordionItem<MatriceSignatureCardContext>[] = [];

  @ViewChild('matriceSignatureCardContent')
  private matriceSignatureCardContent?: TemplateRef<unknown>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.syncItemsWithTemplate();
    }
  }

  ngAfterViewInit(): void {
    this.syncItemsWithTemplate();
  }

  private syncItemsWithTemplate(): void {
    const tpl = this.matriceSignatureCardContent;
    if (!tpl) {
      return;
    }
    this.accordionItems = this.items.map(item => ({
      ...item,
      content: tpl,
    }));
  }
}
