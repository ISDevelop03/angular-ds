import { PaginationVariants } from './types';

export const paginationVariants: PaginationVariants = {
  default: {
    wrapper:
      'ds-pagination flex flex-wrap items-center justify-between gap-4 px-4 py-2 rounded',
    container:
      'bg-level-4 border flex flex-wrap items-center justify-center border-neutral-100 rounded-md overflow-hidden',
    nextPrevButtons: {
      base: 'inline-flex text-neutral-500 items-center gap-2 text-[0.875rem]/[1.125rem] px-3 py-2 disabled:opacity-40 disabled:cursor-not-allowed',
      prev: {
        base: '',
        id: 'arrow-left',
        size: '1rem',
      },
      next: {
        base: '',
        id: 'arrow-right',
        size: '1rem',
      },
    },

    buttons: {
      base: 'flex items-center',
      button: {
        base: ' text-[0.875rem]/[1.125rem] text-neutral-500 w-[32px] aspect-square flex items-center justify-center',
        active: 'bg-card-level-4',
        inactive: 'bg-level-4',
      },
      ellipsis: 'px-2 text-neutral-500',
    },
    info: 'inline-flex items-center gap-x-2 text-neutral-500 text-[1rem]/[1.25rem]',
    perPage: {
      wrapper: 'flex items-center gap-x-2',
      label: 'text-[1rem]/normal text-gray-600 dark:text-gray-300',
      select: {
        base: 'px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none',
        option: '',
      },
    },
  },

  // …add more variants as needed
};
