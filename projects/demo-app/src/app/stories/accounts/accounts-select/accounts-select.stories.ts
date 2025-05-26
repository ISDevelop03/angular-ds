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
      image: 'https://placehold.co/20',
      accountNumber: '123456789012345678',
      price: 489384,
      currency: 'USD',
      title: 'Account 1',
    },
    {
      value: 'option2',
      icon: 'Police',
      image: 'https://placehold.co/20',
      accountNumber: '123456789012345678',
      price: 230982,
      currency: 'MAD',
      title: 'Courant Compte N2',
    },
    {
      value: 'option3',
      icon: 'book',
      image: 'https://placehold.co/20',
      accountNumber: '123456789012345678',
      price: 549445,
      currency: 'USD',
      title: 'Courant Compte N3',
    },
    {
      value: 'option4',
      unavailable: true,
      icon: 'card-02',
      image: 'https://placehold.co/20',
      accountNumber: '123456789012345678',
      price: 1000,
      currency: 'USD',
      title: 'Courant Compte N4',
    },
    {
      value: 'option5',
      unavailable: true,
      icon: 'coins-rotate',
      image: 'https://placehold.co/20',
      accountNumber: '978239832332323',
      price: 989823,
      currency: 'MAD',
      title: 'Courant Compte N5',
    },
  ];

  handleValueChange(value: string | string[]) {
    this.selectedValue = value;
  }
}
