export const radio = {
  default: {
    wrapper: 'flex gap-x-2 items-center',
    base: 'text-neutral-900 relative flex h-4 w-4 items-center justify-center rounded-full border cursor-pointer',
    enabled: {
      checked: 'border-red-500 bg-white',
      unchecked: 'border-neutral-300 bg-white dark:border-neutral-500 hover:border-red-500',
    },
    disabled: {
      checked: 'cursor-not-allowed border-neutral-200 bg-neutral-100',
      unchecked:
        'cursor-not-allowed border-neutral-200 bg-neutral-100',
    },
    icon: {
      base: 'h-[6px] w-[6px] rounded-full',
      enabled: {
        checked: "bg-red-500",
        unchecked: "bg-transparent",
      },
      disabled: {
        checked: "cursor-not-allowed border-neutral-200 bg-neutral-200",
        unchecked: "cursor-not-allowed bg-transparent"
      },
    },
    error: 'border-error-500',
    label: {
      base: 'text-[0.875rem]/[1rem] font-normal',
      disabled: 'text-neutral-900 cursor-not-allowed',
      unchecked: 'text-black dark:text-white cursor-pointer',
      checked: 'font-semibold cursor-pointer text-primary',
      error: 'text-error-500',
    },
  },
};
