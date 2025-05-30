export interface Menu {
  key: string;
  name: string;
  path: string;
  hide?: boolean;
}

export const menus: Menu[] = [
  {
    key: 'button',
    name: 'Button',
    path: '/button',
  },
  {
    name: 'Badge',
    key: 'badge',
    path: '/badge',
  },
  {
    name: 'Icon',
    path: '/icon',
    key: 'icon',
  },
  {
    name: 'Accordion',
    path: '/accordion',
    key: 'accordion',
  },
  {
    name: 'Avatar',
    path: '/avatar',
    key: 'avatar',
  },
  {
    name: 'Tabs',
    path: '/tabs',
    key: 'tabs',
  },

  {
    name: 'Text',
    path: '/text',
    key: 'text',
  },
  {
    name: 'Breadcrumb',
    path: '/breadcrumb',
    key: 'breadcrumb',
  },
  {
    name: 'Toggle',
    path: '/toggle',
    key: 'toggle',
  },
  {
    name: 'Empty Card',
    path: '/empty-card',
    key: 'empty-card',
  },
  {
    name: 'Dropdown',
    path: '/dropdown',
    key: 'dropdown',
  },
  {
    name: 'Popup',
    path: '/popup',
    key: 'popup',
  },
  {
    name: 'Sidebar',
    path: '/sidebar',
    key: 'sidebar',
  },
  {
    name: 'Checkbox',
    path: '/checkbox',
    key: 'checkbox',
  },
  {
    name: 'Input',
    path: '/input',
    key: 'input',
  },
  {
    name: 'Radio',
    path: '/radio',
    key: 'radio',
  },
  {
    name: 'Range',
    path: '/range',
    key: 'range',
  },
  {
    name: 'Textarea',
    path: '/textarea',
    key: 'textarea',
  },
  {
    name: 'Select',
    path: '/select',
    key: 'select',
  },
  {
    name: 'Pagination',
    path: '/pagination',
    key: 'pagination',
  },

  //-------
  //-------
  // MyBusiness Related Components
  {
    name: 'Actions Layout',
    path: '/actions-layout',
    key: 'actionsLayout',
  },
  {
    name: 'Call To Action Icons',
    path: '/call-to-action-icons',
    key: 'call-to-action-icons',
  },
  {
    name: 'Shortcuts',
    path: '/shortcuts',
    key: 'shortcuts',
  },
  {
    name: 'Filial Card',
    path: '/filial-card',
    key: 'filial-card',
  },
  {
    name: 'Holding Card',
    path: '/holding-card',
    key: 'holding-card',
  },
  {
    name: 'Inbox Card',
    path: '/inbox-card',
    key: 'inbox-card',
  },
  {
    name: 'Notification Card',
    path: '/notification-card',
    key: 'notification-card',
  },
  {
    name: 'Numbers Card',
    path: '/numbers-card',
    key: 'numbers-card',
  },
  {
    name: 'Progress',
    path: '/progress',
    key: 'progress',
  },
  {
    name: 'Currency Converter',
    path: '/currency-converter',
    key: 'currency-converter',
  },
  {
    name: 'Profile Dropdown',
    path: '/profile-dropdown',
    key: 'profile-dropdown',
  },
  {
    name: 'Account Grid Card',
    path: '/account-grid-card',
    key: 'account-grid-card',
  },
  {
    name: 'Account Grid Holding Card',
    path: '/account-grid-holding-card',
    key: 'account-grid-holding-card',
  },
  {
    name: 'Account Filial Holding Card',
    path: '/account-filial-holding-card',
    key: 'account-filial-holding-card',
  },
  {
    name: 'Account Slider Card',
    path: '/account-slider-card',
    key: 'account-slider-card',
  },
  {
    name: 'Account Selected Card',
    path: '/account-selected-card',
    key: 'account-selected-card',
  },
  {
    name: 'Account Holding Selected Card',
    path: '/account-holding-selected-card',
    key: 'account-holding-selected-card',
  },

  {
    name: 'Account Holding Card',
    path: '/account-holding-card',
    key: 'account-holding-card',
  },

  //Sheet Cards
  {
    name: 'Sheet Card',
    path: '/sheet-card',
    key: 'sheet-card',
  },

  {
    name: 'Portfolio Item Card',
    path: '/portfolio-item-card',
    key: 'portfolio-item-card',
  },
  {
    name: 'Portfolio Select Card',
    path: '/portfolio-select-card',
    key: 'portfolio-select-card',
  },
  {
    name: 'Portfolio Vision Card',
    path: '/portfolio-vision-card',
    key: 'portfolio-vision-card',
  },
  {
    name: 'Ticker Card',
    path: '/ticker-card',
    key: 'ticker-card',
  },
  {
    name: 'Balance Formatter',
    path: '/balance-formatter',
    key: 'balance-formatter',
  },
  {
    key: 'sheet-latest-ops',
    name: 'SheetLatestOps',
    path: '/sheet-latest-ops',
  },
  { key: 'invoice-card', name: 'InvoiceCard', path: '/invoice-card' },
  { key: 'payment-card', name: 'PaymentCard', path: '/payment-card' },
  {
    key: 'payment-details-card',
    name: 'PaymentDetailsCard',
    path: '/payment-details-card',
  },
  { key: 'table', name: 'Table', path: '/table' },
  { key: 'steps', name: 'Steps', path: '/steps' },
  { key: 'accounts-select', name: 'AccountsSelect', path: '/accounts-select' },
  { key: 'upload-file', name: 'UploadFile', path: '/upload-file' },
  { key: 'date-picker', name: 'DatePicker', path: '/date-picker' },
  { key: 'todo-tab', name: 'TodoTab', path: '/todo-tab' },
  { key: 'todo-card', name: 'TodoCard', path: '/todo-card' },
];
