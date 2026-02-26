import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-virement-card-recap',
  templateUrl: './virement-card-recap.stories.html',
})
export class VirementCardRecapStoryComponent {
  @Input() label: string = 'virement-card-recap';
  @Input() className?: string = '';

  items = [
    {
      beneficiaryName: 'Tadlaoui Imane',
      beneficiaryAccountNumber: '12345678901234567890',
      motif: 'Transfer',
      amount: { amount: 100000, currency: 'MAD' },
    },
    {
      beneficiaryName: 'Bouchouchi Maroua',
      beneficiaryAccountNumber: '12345678901234567890',
      motif: 'Transfer',
      amount: { amount: 4000, currency: 'MAD' },
    },
    {
      beneficiaryName: 'Bouchouchi Maroua',
      beneficiaryAccountNumber: '12345678901234567890',
      motif: 'Transfer',
      amount: { amount: 300, currency: 'MAD' },
    },
  ];

  onDelete(index: number) {
    this.items.splice(index, 1);
  }
}
