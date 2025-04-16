import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, BadgeComponent, IconComponent } from './components';
import { DesignSystemComponent } from './design-system.component';

@NgModule({
  declarations: [
    DesignSystemComponent,
    ButtonComponent,
    BadgeComponent,
    IconComponent,
  ],
  imports: [CommonModule],
  exports: [
    DesignSystemComponent,
    ButtonComponent,
    BadgeComponent,
    IconComponent,
  ],
})
export class DesignSystemModule {}
