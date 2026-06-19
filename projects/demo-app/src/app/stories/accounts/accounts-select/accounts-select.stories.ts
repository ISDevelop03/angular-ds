import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'projects/design-system/src/lib/components/accounts/accounts-select/accounts-select.component';

@Component({
  selector: 'app-accounts-select',
  templateUrl: './accounts-select.stories.html',
})
export class AccountsSelectStoryComponent implements OnInit {
  selectedValue: string | string[] = null;
  isLoading = true;
  options: SelectItem[] = [];

  ngOnInit(): void {
    this.fetchAccounts();
  }

  fetchAccounts(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.options = [
        {
          value: 'option1',
          icon: 'Je-deviens-client',
          accountNumber: '123456789012345678',
          accountName: 'Account 1',
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
          value: 'option3',
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
      this.selectedValue = 'option1';
      this.isLoading = false;
    }, 1500);
  }

  handleValueChange(value: string | string[]) {
    this.selectedValue = value;
  }
}
