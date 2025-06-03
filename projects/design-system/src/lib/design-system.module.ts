import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderDotsComponent } from './components/slider-dots/slider-dots.component';
import { TodoCardComponent } from './components/todo-list/todo-card/todo-card.component';
import { TodoTabComponent } from './components/todo-list/todo-tab/todo-tab.component';
import { DatePickerComponent } from './components/form-elements/date-picker/date-picker.component';

import { UploadFileComponent } from './components/form-elements/upload-file/upload-file.component';
import { AccountsSelectComponent } from './components/accounts/accounts-select/accounts-select.component';
import { PaymentDetailsCardComponent } from './components/cards/payment-details-card/payment-details-card.component';

// Contrib Components
import { ButtonComponent } from './components/button/button.component';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { DsTabsComponent } from './components/tabs/tabs.component';
import { DsTextComponent } from './components/text/text.component';
import { EmptyCardComponent } from './components/cards/empty-card/empty-card.component';
import { DsBreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DsToggleComponent } from './components/toggle/toggle.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DsDropdownComponent } from './components/dropdown/dropdown.component';
import { DsPopupComponent } from './components/popup/popup.component';
import { DsBalanceFormatterComponent } from './components/balance-formatter/balance-formatter.component';
import { DsDisplayValueComponent } from './components/display-value/display-value.component';
import { DsThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { DsPaginationComponent } from './components/pagination/pagination.component';

// sidebar
import { DsBottomMenusComponent } from './components/sidebar/bottom-menus/bottom-menus.component';
import { DsMenuItemComponent } from './components/sidebar/menu-item/menu-item.component';
import { DsMenuListComponent } from './components/sidebar/menu-list/menu-list.component';
import { DsSidebarComponent } from './components/sidebar/sidebar/sidebar.component';

// Form Elements
import { DsCheckboxComponent } from './components/form-elements/checkbox/checkbox.component';
import { DsInputComponent } from './components/form-elements/input/input.component';
import { DsRadioComponent } from './components/form-elements/radio/radio.component';
import { DsRangeComponent } from './components/form-elements/range/range.component';
import { DsTextareaComponent } from './components/form-elements/textarea/textarea.component';
import { DsSelectComponent } from './components/form-elements/select/select.component';

// Accounts
import { DsAccountGridCardComponent } from './components/accounts/account-grid-card/account-grid-card.component';
import { DsAccountGridHoldingCardComponent } from './components/accounts/account-grid-holding-card/account-grid-holding-card.component';
import { DsAccountSliderCardComponent } from './components/accounts/account-slider-card/account-slider-card.component';
import { DsAccountSelectedCardComponent } from './components/accounts/account-selected-card/account-selected-card.component';
import { AccountHoldingCardComponent } from './components/accounts/account-holding-card/account-holding-card.component';
import { AccountHoldingSelectedCardComponent } from './components/accounts/account-holding-selected-card/account-holding-selected-card.component';
import { DsAccountFilialHoldingCardComponent } from './components/accounts/account-filial-holding-card/account-filial-holding-card.component';

// Sheet Cards
import { SheetCardComponent } from './components/sheet-cards/sheet-card/sheet-card.component';

// MyBusiness Related Components
import { DsActionsLayoutComponent } from './components/actions-layout/actions-layout.component';
import { CallToActionIconsComponent } from './components/call-to-action-icons/call-to-action-icons.component';
import { DsShortcutsCardComponent } from './components/shortcuts/shortcuts.component';
import { FilialCardComponent } from './components/cards/filial-card/filial-card.component';
import { DsHoldingCardComponent } from './components/cards/holding-card/holding-card.component';
import { InboxCardComponent } from './components/cards/inbox-card/inbox-card.component';
import { NotificationCardComponent } from './components/cards/notification-card/notification-card.component';
import { NumbersCardComponent } from './components/cards/numbers-card/numbers-card.component';
import { TickerCardComponent } from './components/cards/ticker-card/ticker-card.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { ProfileDropdownComponent } from './components/profile-dropdown/profile-dropdown.component';
import { PortfolioItemCardComponent } from './components/portfolio-selection/portfolio-item-card/portfolio-item-card.component';
import { PortfolioSelectCardComponent } from './components/portfolio-selection/portfolio-select-card/portfolio-select-card.component';
import { PortfolioVisionCardComponent } from './components/portfolio-selection/portfolio-vision-card/portfolio-vision-card.component';

// Auto-import for sheet-latest-ops component
import { SheetLatestOpsComponent } from './components/sheet-cards/sheet-latest-ops/sheet-latest-ops.component';

// Auto-import for table component
import { TableComponent } from './components/table/table.component';

// Auto-import for invoice-card component
import { InvoiceCardComponent } from './components/cards/invoice-card/invoice-card.component';

// Auto-import for payment-card component
import { PaymentCardComponent } from './components/cards/payment-card/payment-card.component';

// Auto-import for steps component
import { StepsComponent } from './components/steps/steps.component';
import { StepComponent } from './components/steps/step.component';

import { FormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    ButtonComponent,
    BadgeComponent,
    IconComponent,
    AccordionComponent,
    AvatarComponent,
    DsTabsComponent,
    DsTextComponent,
    DsActionsLayoutComponent,
    DsBreadcrumbComponent,
    CallToActionIconsComponent,
    EmptyCardComponent,
    DsToggleComponent,
    DsShortcutsCardComponent,
    FilialCardComponent,
    InboxCardComponent,
    NotificationCardComponent,
    NumbersCardComponent,
    ProgressComponent,
    CurrencyConverterComponent,
    ProfileDropdownComponent,
    DsDropdownComponent,
    DsPopupComponent,
    DsCheckboxComponent,
    DsInputComponent,
    DsRadioComponent,
    DsRangeComponent,
    DsTextareaComponent,
    DsSelectComponent,
    DsBalanceFormatterComponent,
    DsDisplayValueComponent,
    DsAccountGridCardComponent,
    DsAccountSliderCardComponent,
    DsAccountSelectedCardComponent,
    DsThemeToggleComponent,
    DsBottomMenusComponent,
    DsMenuItemComponent,
    DsMenuListComponent,
    DsSidebarComponent,
    DsPaginationComponent,
    DsHoldingCardComponent,
    PortfolioItemCardComponent,
    PortfolioSelectCardComponent,
    PortfolioVisionCardComponent,
    TickerCardComponent,
    AccountHoldingCardComponent,
    AccountHoldingSelectedCardComponent,
    DsAccountGridHoldingCardComponent,
    DsAccountFilialHoldingCardComponent,
    SheetCardComponent,
    SheetLatestOpsComponent,
    TableComponent,
    InvoiceCardComponent,
    PaymentCardComponent,
    StepsComponent,
    StepComponent,
    PaymentDetailsCardComponent,
    AccountsSelectComponent,
    UploadFileComponent,
    DatePickerComponent,
    TodoTabComponent,
    TodoCardComponent,
    SliderDotsComponent,
  ],
  imports: [CommonModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  exports: [
    ButtonComponent,
    BadgeComponent,
    IconComponent,
    AccordionComponent,
    AvatarComponent,
    DsTabsComponent,
    DsTextComponent,
    DsActionsLayoutComponent,
    DsBreadcrumbComponent,
    CallToActionIconsComponent,
    EmptyCardComponent,
    DsToggleComponent,
    DsShortcutsCardComponent,
    FilialCardComponent,
    InboxCardComponent,
    NotificationCardComponent,
    NumbersCardComponent,
    ProgressComponent,
    CurrencyConverterComponent,
    ProfileDropdownComponent,
    DsDropdownComponent,
    DsPopupComponent,
    DsCheckboxComponent,
    DsInputComponent,
    DsRadioComponent,
    DsRangeComponent,
    DsTextareaComponent,
    DsSelectComponent,
    DsBalanceFormatterComponent,
    DsDisplayValueComponent,
    DsAccountGridCardComponent,
    DsAccountSliderCardComponent,
    DsAccountSelectedCardComponent,
    DsThemeToggleComponent,
    DsBottomMenusComponent,
    DsMenuItemComponent,
    DsMenuListComponent,
    DsSidebarComponent,
    DsPaginationComponent,
    DsHoldingCardComponent,
    PortfolioItemCardComponent,
    PortfolioSelectCardComponent,
    PortfolioVisionCardComponent,
    TickerCardComponent,
    AccountHoldingCardComponent,
    AccountHoldingSelectedCardComponent,
    DsAccountGridHoldingCardComponent,
    DsAccountFilialHoldingCardComponent,
    SheetCardComponent,
    SheetLatestOpsComponent,
    TableComponent,
    InvoiceCardComponent,
    PaymentCardComponent,
    StepsComponent,
    StepComponent,
    PaymentDetailsCardComponent,
    AccountsSelectComponent,
    UploadFileComponent,
    DatePickerComponent,
    TodoTabComponent,
    TodoCardComponent,
    SliderDotsComponent,
  ],
})
export class DesignSystemModule {}
