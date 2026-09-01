import { Component } from '@angular/core';
import { RechargeChargerCarteData } from 'projects/design-system/src/lib/components/recharge-charger-carte/recharge-charger-carte.component';
import { MOCK_RECHARGE_CHARGER_CARTE } from './mock-data';

@Component({
  selector: 'app-recharge-charger-carte',
  templateUrl: './recharge-charger-carte.stories.html',
})
export class RechargeChargerCarteStoryComponent {
  card: RechargeChargerCarteData = MOCK_RECHARGE_CHARGER_CARTE;
  expanded = true;
  collapsed = false;

  onToggle(card: RechargeChargerCarteData) {
    this.expanded = !this.expanded;
    console.log('toggle', card);
  }

  onToggleCollapsed(card: RechargeChargerCarteData) {
    this.collapsed = !this.collapsed;
    console.log('toggle collapsed', card);
  }
}
