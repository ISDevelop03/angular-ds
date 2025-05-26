import { Component } from '@angular/core';
import { DropdownItem } from 'projects/design-system/src/lib/components/dropdown/types';

@Component({
  selector: 'app-account-grid-card',
  templateUrl: './account-grid-card.stories.html',
})
export class AccountGridCardStoryComponent {
  isDiscrete: boolean = false;
  price: number = 398759348.67;
  smallPrice: number = -234234893.67;
  accountNumber: string = 'ACC-1234567890';
  currency: string = 'MAD';
  title: string = 'SWIFT MT103 SHANGHAI TRADING CO';
  dateOperation: string = '2025-04-28';
  dateValue: string = '2025-04-28';
}
