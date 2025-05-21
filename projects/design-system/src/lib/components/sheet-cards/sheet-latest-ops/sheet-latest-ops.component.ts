import { Component, Input } from '@angular/core';

@Component({
  selector: 'ds-sheet-latest-ops',
  templateUrl: './sheet-latest-ops.component.html',
})
export class SheetLatestOpsComponent {
  @Input() isDiscrete: boolean = false;
  @Input() title: string = '';
  @Input() currency: string;
  @Input() price: number;
  @Input() dateOperation!: string;
  @Input() dateValue!: string;
  @Input() className?: string = '';
}
