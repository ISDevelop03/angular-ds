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
  ToggleStoryComponent,
  ShortcutCardStoryComponent,
  FilialCardStoryComponent,
  InboxCardStoryComponent,
  NotificationCardStoryComponent,
  NumbersCardStoryComponent,
  ProgressStoryComponent,
  CurrencySelectStoryComponent,
  CurrencyConverterStoryComponent,
  LatestOperationsCardStoryComponent,
  PortfolioDropdownStoryComponent,
  DropdownStoryComponent,
  PopupStoryComponent,
  CheckboxStoryComponent,
  InputStoryComponent,
  RadioStoryComponent,
  RangeStoryComponent,
  TextareaStoryComponent,
  SelectStoryComponent,
  BalanceFormatterStoryComponent,
  DisplayValueStoryComponent,
  AccountGridCardStoryComponent,
  AccountSliderCardStoryComponent,
  AccountSelectedCardStoryComponent,
  SidebarStoryComponent,
  PaginationStoryComponent,
  HoldingCardStoryComponent,
  PortfolioItemCardStory,
  PortfolioSelectCardStory,
  PortfolioVisionCardStory,
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
  { path: 'dropdown', component: DropdownStoryComponent },
  { path: 'popup', component: PopupStoryComponent },
  { path: 'checkbox', component: CheckboxStoryComponent },
  { path: 'input', component: InputStoryComponent },
  { path: 'radio', component: RadioStoryComponent },
  { path: 'range', component: RangeStoryComponent },
  { path: 'textarea', component: TextareaStoryComponent },
  { path: 'select', component: SelectStoryComponent },

  { path: 'balance-formatter', component: BalanceFormatterStoryComponent },
  { path: 'display-value', component: DisplayValueStoryComponent },
  { path: 'pagination', component: PaginationStoryComponent },

  { path: 'account-grid-card', component: AccountGridCardStoryComponent },
  { path: 'account-slider-card', component: AccountSliderCardStoryComponent },
  {
    path: 'account-selected-card',
    component: AccountSelectedCardStoryComponent,
  },

  { path: 'sidebar', component: SidebarStoryComponent },
  { path: 'actions-layout', component: ActionsLayoutStoryComponent },
  { path: 'call-to-action-icons', component: CallToActionIconsStoryComponent },
  { path: 'shortcut-card', component: ShortcutCardStoryComponent },
  { path: 'filial-card', component: FilialCardStoryComponent },
  { path: 'holding-card', component: HoldingCardStoryComponent },
  { path: 'inbox-card', component: InboxCardStoryComponent },
  { path: 'notification-card', component: NotificationCardStoryComponent },
  { path: 'numbers-card', component: NumbersCardStoryComponent },
  { path: 'progress', component: ProgressStoryComponent },
  { path: 'currency-select', component: CurrencySelectStoryComponent },
  { path: 'currency-converter', component: CurrencyConverterStoryComponent },
  {
    path: 'latest-operations-card',
    component: LatestOperationsCardStoryComponent,
  },
  { path: 'profile-dropdown', component: PortfolioDropdownStoryComponent },
  { path: 'portfolio-item-card', component: PortfolioItemCardStory },
  { path: 'portfolio-select-card', component: PortfolioSelectCardStory },
  { path: 'portfolio-vision-card', component: PortfolioVisionCardStory },
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
    DropdownStoryComponent,
    PopupStoryComponent,
    CheckboxStoryComponent,
    InputStoryComponent,

    ActionsLayoutStoryComponent,
    CallToActionIconsStoryComponent,

    ShortcutCardStoryComponent,
    FilialCardStoryComponent,
    InboxCardStoryComponent,
    NotificationCardStoryComponent,
    NumbersCardStoryComponent,
    ProgressStoryComponent,
    CurrencySelectStoryComponent,
    CurrencyConverterStoryComponent,
    LatestOperationsCardStoryComponent,
    PortfolioDropdownStoryComponent,
    RadioStoryComponent,
    RangeStoryComponent,
    TextareaStoryComponent,
    SelectStoryComponent,
    BalanceFormatterStoryComponent,
    DisplayValueStoryComponent,
    AccountGridCardStoryComponent,
    AccountSliderCardStoryComponent,
    AccountSelectedCardStoryComponent,
    SidebarStoryComponent,
    PaginationStoryComponent,
    HoldingCardStoryComponent,
    PortfolioItemCardStory,
    PortfolioSelectCardStory,
    PortfolioVisionCardStory,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
