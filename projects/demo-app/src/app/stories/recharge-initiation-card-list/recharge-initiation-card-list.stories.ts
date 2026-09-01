import { Component } from '@angular/core';
import { RechargeCardRowData } from 'projects/design-system/src/lib/components/recharge-card-row/recharge-card-row.component';
import { MOCK_RECHARGE_INITIATION_CARDS } from './mock-data';

@Component({
  selector: 'app-recharge-initiation-card-list',
  templateUrl: './recharge-initiation-card-list.stories.html',
})
export class RechargeInitiationCardListStoryComponent {
  cards = MOCK_RECHARGE_INITIATION_CARDS;
  singleCard = MOCK_RECHARGE_INITIATION_CARDS[0];

  onOpen(card: RechargeCardRowData) {
    console.log('open', card);
  }
}
