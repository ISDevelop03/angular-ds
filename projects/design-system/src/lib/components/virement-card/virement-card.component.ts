import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TTransfer = {
  motif: string;
  amount: number;
};

export type TTransferAmount = {
  amount: number;
  currency: string;
};
/**
 * VirementCardComponent
 *
 * Live demo:
 * <example-url>/demo/ds-virement-card.component.html</example-url>
 */
@Component({
  selector: 'ds-virement-card',
  templateUrl: './virement-card.component.html',
})
export class VirementCardComponent {
  @Input() className?: string = '';
  @Input() beneficiaryName?: string;
  @Input() beneficiaryAccountNumber?: string;
  @Input() motif?: string;
  @Input() amount?: TTransferAmount;

  @Output() onSave = new EventEmitter<TTransfer>();
  @Output() onDelete = new EventEmitter<void>();

  mode: 'edit' | 'view' = 'view';

  motifValue: string = '';
  amountValue: number | string | null = null;

  toggleEditMode() {
    this.mode = "edit";
  }

  toggleViewMode() {
    this.mode = "view";
  }

  handleSave() {
    this.onSave.emit({ motif: this.motifValue, amount: this.amountValue as number });
  }

  handleDelete() {
    this.onDelete.emit();
  }
}
