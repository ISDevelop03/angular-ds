import { Component } from '@angular/core';
import { SelectItem } from 'projects/design-system/src/lib/components/accounts/accounts-select/accounts-select.component';

@Component({
  selector: 'app-accounts-select',
  templateUrl: './accounts-select.stories.html',
})
export class AccountsSelectStoryComponent {
  selectedValue: string | string[] = null;
  isLoading: boolean = false;

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.selectedValue = 'option1';
      this.isLoading = false;
    }, 3000);
  }

  options: SelectItem[] = [
    {
      value: 'option1',
      icon: 'Je-deviens-client',
      accountNumber: '123456789012345678',
      accountName: 'Account 1',
      soldeComptable: {
        value: 467949595,
        currency: 'USD',
        currency_flag: 'https://flagcdn.com/w40/us.png',
      },
      soldeTempsReel: {
        value: 467949595,
        currency: 'USD',
        currency_flag: 'https://flagcdn.com/w40/us.png',
      },
    },
    {
      value: 'option2',
      icon: 'Je-deviens-client',
      accountNumber: '123456789012345678',
      accountName: 'Courant Compte N2',
      soldeComptable: {
        value: 467995,
        currency: 'MAD',
        currency_flag: 'https://flagcdn.com/w40/ma.png',
      },
      soldeTempsReel: {
        value: -467945,
        currency: 'MAD',
        currency_flag: 'https://flagcdn.com/w40/ma.png',
      },
    },
    {
      value: 'option2',
      icon: 'Passer-un-ordre',
      accountNumber: '123456789012345678',
      accountName: 'Courant Compte N2',
      unavailable: true,
      soldeComptable: {
        value: 467949595,
        currency: 'MAD',
        currency_flag: 'https://flagcdn.com/w40/ma.png',
      },
      soldeTempsReel: {
        value: 467949595,
        currency: 'MAD',
        currency_flag: 'https://flagcdn.com/w40/ma.png',
      },
    },
  ];

  handleValueChange(value: string | string[]) {
    this.selectedValue = value;
  }
}
