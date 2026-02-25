import { Component, Input } from '@angular/core';
import { TTransfer } from 'projects/design-system/src/lib/components/virement-card/virement-card.component';

@Component({
  selector: 'app-virement-card',
  templateUrl: './virement-card.stories.html',
})
export class VirementCardStoryComponent {
  @Input() className?: string = '';

  onSave(transfer: TTransfer) {
    console.log(transfer);
  }
  onDelete() {
    console.log('onDelete');
  }
}
