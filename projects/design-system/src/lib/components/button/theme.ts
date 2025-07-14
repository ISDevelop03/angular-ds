export const defaultTheme = {
  base: 'relative w-fit box-border flex items-center justify-center active:outline-none transition ease-in-out duration-300 gap-3 text-center rounded',
  contentWrapper: 'flex items-center justify-center gap-3',
  disabled: {
    base: 'cursor-not-allowed',
    basic: {
      primary: 'opacity-70 hover:!border-primary hover:!bg-primary !text-white',
      secondary:
        'opacity-70 hover:!border-black hover:!bg-black hover:!text-white',
      gray: 'opacity-70 hover:!border-card-level-1 hover:!bg-card-level-1 hover:!text-neutral-700',
      white:
        'opacity-70 hover:!border-card-level-2 hover:!bg-card-level-2 hover:!text-red-500',
      neutral:
        'opacity-70 hover:!border-neutral-200 hover:!bg-neutral-200 hover:!text-neutral-700',
    },
    outlined: {
      primary: 'opacity-70 hover:!bg-transparent hover:!text-primary',
      secondary: 'opacity-70 hover:!bg-transparent hover:!text-black',
      gray: 'opacity-70 hover:!bg-transparent hover:!text-neutral-700',
      neutral: 'opacity-70 hover:!bg-transparent hover:!text-neutral-700',
      white: 'opacity-70 hover:!bg-transparent hover:!text-red-500',
    },
  },
  size: {
    small: {
      text: 'py-2 px-3 text-[0.75rem]/[1rem]',
      icon: 'p-2.5',
    },
    normal: {
      text: 'py-2.5 px-3.5 text-[0.875rem]/[1.125rem]',
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
      ' font-[700] border-2 border-red-500 bg-red-500 text-white hover:bg-red-600 hover:border-red-600',
    secondary:
      'font-[700] border-2 border-black bg-black text-white hover:bg-black/80 hover:!border-black/10',
    gray: 'font-[700] border-2 border-card-level-1 bg-card-level-1 text-neutral-700 hover:bg-card-level-1/80 hover:!border-card-level-1/10',
    neutral:
      'font-[700] border-2 border-neutral-200 bg-neutral-200 text-neutral-700 hover:bg-neutral-200/80 hover:!border-neutral-200/10',
    white:
      'font-[700] border-2 border-card-level-2 bg-card-level-2 text-red-500 hover:bg-card-level-2/80 hover:!border-card-level-2/10',
  },
  outlineVariants: {
    primary:
      'font-[700] border-2 border-primary bg-transparent hover:text-white text-primary hover:bg-primary',
    white:
      'font-[700] border-2 border-card-level-2 bg-transparent hover:text-red-500 text-card-level-2 hover:bg-card-level-2',
    secondary:
      'font-[700] border-2 border-black bg-transparent hover:text-white text-black  hover:bg-black',
    neutral:
      'font-[700] border-2 border-neutral-200 bg-transparent text-neutral-700 hover:bg-neutral-200',
    gray: 'font-[700] border-2 border-card-level-1 bg-transparent text-neutral-700 hover:bg-card-level-1',
  },
};
