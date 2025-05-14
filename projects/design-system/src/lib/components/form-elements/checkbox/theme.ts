export const checkbox = {
  default: {
    wrapper: 'flex gap-x-2 items-center',
    checkbox: {
      icon: 'text-red-500',
      base: 'relative flex h-3.5 w-3.5 items-center justify-center rounded shrink-0',
      enabled: {
        checked: 'border border-primary-500 bg-red-50 text-red-500',
        unchecked:
          'bg-white border border-red-500 hover:bg-red-50 hover:border-red-500 focus-within:border-red-500',
      },
      disabled: {
        checked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
        unchecked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
      },
      error: 'border-error-500',
      label: {
        base: 'dark:text-neutral-200 text-neutral-900',
        checked: 'dark:text-primary/90 text-primary',
        disabled: 'dark:text-neutral-500 text-neutral-400',
      },
    },
    errorMessage: 'text-sm text-red-500',
  },
  aligned: {
    wrapper: 'flex gap-x-2 items-start',
    checkbox: {
      icon: 'text-white',
      base: 'relative flex h-5 w-5 items-center justify-center rounded shrink-0',
      enabled: {
        checked: 'bg-primary-500 text-white',
        unchecked:
          'bg-white border border-gray-400 hover:bg-gray-100 hover:border-primary-500 focus-within:border-primary-500',
      },
      disabled: {
        checked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
        unchecked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
      },
      error: 'border-error-500',
      label: {
        base: 'text-black',
        checked: 'text-primary-500',
        disabled: 'text-gray-300',
      },
    },
    errorMessage: 'text-sm text-red-500',
  },
};
