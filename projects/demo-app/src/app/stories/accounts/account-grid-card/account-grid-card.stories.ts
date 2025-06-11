import { Component } from '@angular/core';

@Component({
  selector: 'app-account-grid-card',
  templateUrl: './account-grid-card.stories.html',
})
export class AccountGridCardStoryComponent {
  isDiscrete = false;
  accounts = [
    {
      isDiscrete: false,
      price: 398759348.12,
      smallPrice: 234234893.563,
      accountNumber: 'ACC-1234567890',
      currency: 'MAD',
      title: 'SWIFT MT103 SHANGHAI TRADING CO',
      dateOperation: '2025-04-28',
      dateValue: '2025-04-28',
    },
    {
      isDiscrete: true,
      price: 838372.7373,
      smallPrice: 3243541.0923,
      accountNumber: 'ACC-1234567891',
      currency: 'MAD',
      title: 'SWIFT MT104 TOKYO TRADING CO',
      dateOperation: '2025-04-28',
      dateValue: '2025-04-28',
    },
    {
      isDiscrete: false,
      price: -436723.121,
      smallPrice: -234234893.8672,
      accountNumber: 'ACC-1234567892',
      currency: 'MAD',
      title: 'SWIFT MT105 NEW YORK TRADING CO',
      dateOperation: '2025-04-28',
      dateValue: '2025-04-28',
    },
    {
      isDiscrete: true,
      price: 9384983.67,
      smallPrice: 6526532,
      accountNumber: 'ACC-1234567893',
      currency: 'MAD',
      title: 'SWIFT MT106 HAMBURG TRADING CO',
      dateOperation: '2025-04-28',
      dateValue: '2025-04-28',
    },
    {
      isDiscrete: false,
      price: -323242.02,
      smallPrice: 7262123.1234,
      accountNumber: 'ACC-1234567893',
      currency: 'MAD',
      title: 'SWIFT MT107 DUBAI TRADING CO',
      dateOperation: '2025-04-28',
      dateValue: '2025-04-28',
    },
  ];
}
