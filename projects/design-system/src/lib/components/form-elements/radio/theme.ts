export const radio = {
  default: {
    wrapper: 'flex items-center gap-x-[10px]',
    base: 'relative flex h-5 w-5 items-center justify-center rounded-full border cursor-pointer',
    enabled: {
      checked: 'border-primary bg-black hover:border-primary',
      unchecked:
        'dark:border-neutral-500 dark:bg-neutral-600 border-neutral-200 bg-neutral-300 hover:border-primary',
    },
    disabled: {
      checked:
        'opacity-30 border-neutral-600 dark:border-neutral-300 cursor-not-allowed',
      unchecked:
        'opacity-30 border-neutral-600 dark:border-neutral-300 cursor-not-allowed',
    },
    icon: {
      base: ' relative after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-primary after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2',
      enabled: '',
      disabled: 'dark:bg-neutral-600 bg-neutral-100',
    },
    error: 'border-error-500',
    label: {
      disabled:
        'cursor-not-allowed text-[14px] font-medium leading-[24px] dark:text-white text-heading opacity-30',
      unchecked:
        'cursor-pointer text-[14px] font-medium leading-[24px] dark:text-white text-heading',
      checked:
        'cursor-pointer text-[14px] font-medium leading-[24px] !text-primary',
      error: 'text-[14px] font-medium leading-[24px] text-error-500',
    },
  },
  bourse: {
    wrapper: 'flex gap-x-3',
    base: 'text-black dark:text-white relative flex h-5 w-5 items-center justify-center rounded-full border cursor-pointer',
    enabled: {
      checked:
        'border-primary-500 bg-primary-500 hover:bg-primary-500 hover:border-primary-500',
      unchecked:
        'border-gray-400 bg-white hover:bg-primary-100 hover:border-primary-500',
    },
    disabled: {
      checked: 'border-gray-300 bg-gray-100  cursor-not-allowed',
      unchecked: 'border-gray-300 bg-gray-100 cursor-not-allowed',
    },
    icon: {
      base: 'h-2 w-2 rounded-full',
      enabled: 'bg-white',
      disabled: 'bg-gray-300',
    },
    error: 'border-error-500',
    label: {
      disabled: 'text-black dark:text-white cursor-not-allowed',
      unchecked: 'text-black dark:text-white cursor-pointer',
      checked: 'text-primary-500 cursor-pointer',
      error: 'text-error-500',
    },
  },
};
