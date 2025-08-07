// theme.ts
export type TableVariant = 'default' | 'secondary' | 'bordered';

export interface TableTheme {
  table: string;
  header: string;
  headerCell: string;
  headerTh: string;
  headerText: string;
  headerIcons: string;
  headerCellSortable: string;
  headerCellButton: string;
  body: string;
  row: (index: number) => string;
  cell: string;
}

export const TableThemes: Record<TableVariant, TableTheme> = {
  default: {
    table: 'w-full text-left border-spacing-y-2 border-separate',
    header: 'bg-level-4',
    headerCell: 'px-4 py-1.5 font-normal',
    headerTh: 'inline-flex items-center my-auto gap-1',
    headerText: 'inline-flex text-[0.875rem]/[1.25rem]',
    headerIcons: 'inline-flex items-center text-gray-500',
    headerCellButton: 'w-fit',
    headerCellSortable: ' select-none',
    body: '',
    row: () => 'dark:bg-black bg-white rounded',
    cell: 'px-4 text-[1rem]/normal font-medium py-2',
  },
  secondary: {
    table: 'w-full text-left rounded-lg border border-gray-100 border-separate border-spacing-0 overflow-hidden',
    header: 'bg-gray-50 rounded-t-lg',
    headerIcons: 'inline-flex items-center text-gray-500',
    headerText: 'inline-flex text-[0.875rem]/[1.125rem]',

    headerCell: 'px-4 py-1.5 text-sm font-semibold',
    headerTh: 'inline-flex items-center gap-1 text-[0.875rem]/[1.125rem]',
    headerCellButton: 'w-fit',
    headerCellSortable: ' select-none',
    body: '',
    row: () => 'bg-white',
    cell: 'px-4 text-sm py-2 whitespace-nowrap',
  },
  bordered: {
    table: 'w-full text-left border-collapse border',
    header: 'bg-gray-100 border-b',
    headerCell: 'px-4 py-2 border-r',
    headerTh: 'inline-flex items-center gap-1 text-[0.875rem]/[1.25rem]',
    headerIcons: 'inline-flex items-center text-gray-500',
    headerText: 'inline-flex text-[0.875rem]/[1.25rem]',

    headerCellButton: 'w-fit',
    headerCellSortable: ' select-none',
    body: '',
    row: () => '',
    cell: 'px-4 py-2 border-r border-b',
  },
};
