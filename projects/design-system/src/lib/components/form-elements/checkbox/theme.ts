export const checkbox = {
  default: {
    wrapper: 'flex gap-x-2 items-center',
    checkbox: {
      icon: 'text-red-500',
      base: 'relative flex h-3.5 w-3.5 items-center justify-center rounded shrink-0',
      enabled: {
        checked: 'border border-primary-500 bg-red-50 text-red-500',
        unchecked:
          'bg-card-level-2 border border-red-500 hover:bg-red-50 hover:border-red-500 focus-within:border-red-500',
      },
      disabled: {
        checked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
        unchecked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
      },
      error: 'border-error-500',
      label: {
        base: 'text-neutral-900',
        checked: 'dark:text-primary/90 text-primary',
        disabled: 'dark:text-neutral-500 text-neutral-400',
      },
    },
    errorMessage: 'text-sm text-red-500',
  },
  autocomplete: {
    wrapper: 'flex gap-x-2 items-center',
    checkbox: {
      icon: 'text-red-500',
      base: 'relative flex size-4 items-center justify-center rounded shrink-0',
      enabled: {
        checked: 'border border-red-500 bg-red-50 text-red-500',
        unchecked:
          'bg-neutral-50 border border-neutral-200 hover:bg-red-50 hover:border-red-500 focus-within:border-red-500',
      },
      disabled: {
        checked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
        unchecked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
      },
      error: 'border-error-500',
      label: {
        base: 'text-sm font-medium text-neutral-500 inline-block',
        checked: 'dark:text-primary/90 text-primary',
        disabled: 'dark:text-neutral-500 text-neutral-400',
      },
    },
    errorMessage: 'text-sm text-red-500',
  },
};
