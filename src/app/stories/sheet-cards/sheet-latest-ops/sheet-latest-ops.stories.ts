import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sheet-latest-ops',
  templateUrl: './sheet-latest-ops.stories.html',
})
export class SheetLatestOpsStoryComponent {
  @Input() isDiscrete: boolean = false;
  @Input() title: string = 'SWIFT MT103 SHANGHAI TRADING CO';
  @Input() currency: string = 'MAD';
  @Input() price: number = 2347223.33;
  @Input() dateOperation: string = '2023-10-01';
  @Input() dateValue: string = '2023-10-01';
  @Input() className?: string = '';
}
