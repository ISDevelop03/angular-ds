export const radio = {
  default: {
    wrapper: 'flex gap-x-2 items-center',
    base: 'text-neutral-900 relative flex h-4 w-4 items-center justify-center rounded-full border cursor-pointer',
    enabled: {
      checked: 'border-red-500 bg-red-50',
      unchecked: 'border-neutral-300 bg-transparent dark:border-neutral-500',
    },
    disabled: {
      checked: 'cursor-not-allowed border-red-500 opacity-50 bg-red-500',
      unchecked:
        'cursor-not-allowed border-neutral-300 opacity-50 bg-neutral-300',
    },
    icon: {
      base: 'h-1.5 w-1.5 rounded-full',
      enabled: 'bg-red-500',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    error: 'border-error-500',
    label: {
      disabled: 'text-neutral-900 cursor-not-allowed opacity-50 hob',
      unchecked: 'text-black dark:text-white cursor-pointer',
      checked: 'text-red-500 cursor-pointer',
      error: 'text-error-500',
    },
  },
};
