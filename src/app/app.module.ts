import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  ButtonStoryComponent,
  BadgeStoryComponent,
  IconStoryComponent,
  AccordionStoryComponent,
  AvatarStoryComponent,
  TabsStoryComponent,
  ContainerStoryComponent,
  TextStoryComponent,
  ActionsLayoutStoryComponent,
  HeadingStoryComponent,
  BreadcrumbStoryComponent,
  CallToActionIconsStoryComponent,
  EmptyCardStoryComponent,
  PortfolioSelectionStoryComponent,
  ToggleStoryComponent,
  ShortcutCardStoryComponent,
} from './stories';
import { DesignSystemModule } from 'projects/design-system/src/lib/design-system.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const pages = [
  { path: '', component: HomeComponent },
  { path: 'badge', component: BadgeStoryComponent },
  { path: 'button', component: ButtonStoryComponent },
  { path: 'icon', component: IconStoryComponent },
  { path: 'accordion', component: AccordionStoryComponent },
  { path: 'avatar', component: AvatarStoryComponent },
  { path: 'tabs', component: TabsStoryComponent },
  { path: 'container', component: ContainerStoryComponent },
  { path: 'heading', component: HeadingStoryComponent },
  { path: 'text', component: TextStoryComponent },
  { path: 'empty-card', component: EmptyCardStoryComponent },
  { path: 'breadcrumb', component: BreadcrumbStoryComponent },
  { path: 'toggle', component: ToggleStoryComponent },

  { path: 'actions-layout', component: ActionsLayoutStoryComponent },
  { path: 'call-to-action-icons', component: CallToActionIconsStoryComponent },
  { path: 'portfolio-selection', component: PortfolioSelectionStoryComponent },
  { path: 'shortcut-card', component: ShortcutCardStoryComponent },
  { path: '**', component: NotFoundComponent },
];

const router = RouterModule.forRoot(pages);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    router,
    DesignSystemModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    // App Pages
    AppComponent,
    HomeComponent,
    NotFoundComponent,

    // Blocks
    SidebarComponent,

    // Stories
    ButtonStoryComponent,
    BadgeStoryComponent,
    IconStoryComponent,
    AccordionStoryComponent,
    AvatarStoryComponent,
    TabsStoryComponent,
    ContainerStoryComponent,
    HeadingStoryComponent,
    TextStoryComponent,
    BreadcrumbStoryComponent,
    ToggleStoryComponent,
    EmptyCardStoryComponent,

    ActionsLayoutStoryComponent,
    CallToActionIconsStoryComponent,
    PortfolioSelectionStoryComponent,
    ShortcutCardStoryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
