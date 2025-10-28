import { Component } from '@angular/core';
import { SelectItem } from 'projects/design-system/src/lib/components/accounts/accounts-select/accounts-select.component';

@Component({
  selector: 'app-accounts-select',
  templateUrl: './accounts-select.stories.html',
})
export class AccountsSelectStoryComponent {
  selectedValue: string | string[] = '';
  isLoading: boolean = false;

  options: SelectItem[] = [
    {
      value: 'option1',
      icon: 'Je-deviens-client',
      accountNumber: '123456789012345678',
      accountName: 'Account 1',
      soldeComptable: {
        type: 'solde_comptable',
        value: 467949595,
        currency: 'USD',
      },
      soldeTempsReel: {
        type: 'solde_temps_reel',
        value: 467949595,
        currency: 'USD',
      },
    },
    {
      value: 'option2',
      icon: 'Je-deviens-client',
      accountNumber: '123456789012345678',
      accountName: 'Account 1',
      soldeComptable: {
        type: 'solde_comptable',
        value: 467949595,
        currency: 'USD',
      },
      soldeTempsReel: {
        type: 'solde_temps_reel',
        value: 467949595,
        currency: 'USD',
      },
    },
  ];

  handleValueChange(value: string | string[]) {
    this.selectedValue = value;
  }
}
