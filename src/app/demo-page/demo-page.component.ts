import { Component } from '@angular/core';
import { ButtonComponent } from '../../../projects/design-system/src/lib/components/button/button.component';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
