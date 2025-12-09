export const defaultTheme = {
  base: 'relative w-fit box-border flex items-center justify-center active:outline-none transition ease-in-out duration-300 gap-3 text-center rounded',
  contentWrapper: 'flex items-center justify-center gap-3',
  disabled: {
    primary:
      'cursor-not-allowed !bg-red-200 border !border-red-200 hover:bg-red-200 hover:border-red-200 !text-white',
    secondary:
      'cursor-not-allowed !bg-neutral-50 border !border-neutral-50 hover:bg-neutral-50 hover:border-neutral-50 !text-neutral-300',
    // gray: 'cursor-not-allowed !bg-neutral-50 border !border-neutral-50 hover:bg-neutral-50 hover:border-neutral-50 !text-neutral-300',
    outline:
      'cursor-not-allowed border !border-neutral-50 hover:border-neutral-50 !text-neutral-300',
    text: 'cursor-not-allowed !text-neutral-300 hover:bg-transparent',
    link: 'cursor-not-allowed !text-neutral-300 hover:bg-transparent',
  },
  size: {
    small: {
      text: 'py-2 px-3 text-[0.75rem]/[1rem]',
      icon: 'p-2.5',
    },
    normal: {
      text: 'py-2.5 px-3.5 text-[0.875rem]/[1rem]',
      icon: 'p-2.5',
    },
    medium: {
      text: 'py-3 px-4 text-[1rem]/[1.375rem]',
      icon: 'p-4',
    },
    large: {
      text: 'py-3.5 px-[18px] text-[1.125rem]/[1.5rem]',
      icon: 'p-6',
    },
  },
  variants: {
    primary:
      'font-[700] border-2 border-red-500 bg-red-500 text-white hover:bg-red-600 hover:border-red-600',
    secondary:
      'font-[700] border-2 border-neutral-100 bg-neutral-100 text-neutral-700 hover:bg-neutral-50 hover:!border-neutral-100/10',
    // gray: 'font-[700] border-2 border-neutral-100 bg-neutral-100 text-neutral-700 hover:bg-neutral-50 hover:!border-neutral-100/10',
    outline:
      'font-[700] border-2 border-neutral-100 bg-transparent text-neutral-700 hover:bg-neutral-50 hover:!border-neutral-100/10',
    text: 'font-[700] bg-transparent text-red-500 hover:bg-neutral-25 hover:!border-neutral-100/10',
    link: 'font-[700] bg-transparent text-neutral-700 hover:bg-neutral-25 hover:!border-neutral-100/10',
  },
};
