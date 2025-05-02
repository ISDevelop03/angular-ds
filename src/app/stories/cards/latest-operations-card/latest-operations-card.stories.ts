import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-operations-card',
  templateUrl: './latest-operations-card.stories.html',
})
export class LatestOperationsCardStoryComponent {
  operations = [
    {
      title: 'Payment Received',
      value: '1200',
      isDiscrete: false,
      date_operation: '2025-04-20',
      date_value: '2025-04-21',
    },
    {
      title: 'Subscription Paid',
      value: '50',
      isDiscrete: true,
      date_operation: '2025-04-18',
      date_value: '2025-04-19',
    },
  ];
}
