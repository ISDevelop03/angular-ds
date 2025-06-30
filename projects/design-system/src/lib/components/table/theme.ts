// theme.ts
export type TableVariant = 'default' | 'striped' | 'bordered';

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
    headerText: 'inline-flex text-[12px] leading-[16px]',
    headerIcons: 'inline-flex items-center text-gray-500',
    headerCellButton: 'w-fit',
    headerCellSortable: ' select-none',
    body: '',
    row: () => 'dark:bg-black bg-white rounded',
    cell: 'px-4 text-sm font-medium py-2',
  },
  striped: {
    table: 'w-full text-left',
    header: 'bg-gray-200',
    headerIcons: 'inline-flex items-center text-gray-500',
    headerText: 'inline-flex text-[12px] leading-[16px]',

    headerCell: 'px-4 py-1.5 text-sm font-semibold',
    headerTh: 'inline-flex items-center gap-1 text-[12px] leading-[16px]',
    headerCellButton: 'w-fit',
    headerCellSortable: ' select-none',
    body: '',
    row: (i) => (i % 2 === 0 ? 'dark:bg-black bg-white' : 'bg-gray-50'),
    cell: 'px-4 text-sm py-2',
  },
  bordered: {
    table: 'w-full text-left border-collapse border',
    header: 'bg-gray-100 border-b',
    headerCell: 'px-4 py-2 border-r',
    headerTh: 'inline-flex items-center gap-1 text-[12px] leading-[16px]',
    headerIcons: 'inline-flex items-center text-gray-500',
    headerText: 'inline-flex text-[12px] leading-[16px]',

    headerCellButton: 'w-fit',
    headerCellSortable: ' select-none',
    body: '',
    row: () => '',
    cell: 'px-4 py-2 border-r border-b',
  },
};
