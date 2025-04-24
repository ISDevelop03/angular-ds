import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  BadgeComponent,
  IconComponent,
  AccordionComponent,
  AvatarComponent,
  DsTabsComponent,
  DsContainerComponent,
  DsHeadingComponent,
  DsTextComponent,
  DsActionsLayoutComponent,
  DsBreadcrumbComponent,
  CallToActionIconsComponent,
} from './components';

import { DesignSystemComponent } from './design-system.component';

@NgModule({
  declarations: [
    DesignSystemComponent,
    ButtonComponent,
    BadgeComponent,
    IconComponent,
    AccordionComponent,
    AvatarComponent,
    DsTabsComponent,
    DsContainerComponent,
    DsHeadingComponent,
    DsTextComponent,
    DsActionsLayoutComponent,
    DsBreadcrumbComponent,
    CallToActionIconsComponent,
  ],
  imports: [CommonModule],
  exports: [
    DesignSystemComponent,
    ButtonComponent,
    BadgeComponent,
    IconComponent,
    AccordionComponent,
    AvatarComponent,
    DsTabsComponent,
    DsContainerComponent,
    DsHeadingComponent,
    DsTextComponent,
    DsActionsLayoutComponent,
    DsBreadcrumbComponent,
    CallToActionIconsComponent,
  ],
})
export class DesignSystemModule {}
