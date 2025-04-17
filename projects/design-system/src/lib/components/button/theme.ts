export const defaultTheme = {
  base: 'relative w-fit box-border flex items-center justify-center active:outline-none transition ease-in-out duration-300 gap-3 text-center rounded',
  contentWrapper: 'flex items-center justify-center gap-3',
  disabled: {
    base: 'cursor-not-allowed',
    basic: {
      primary: 'opacity-70 hover:!border-primary hover:!bg-primary !text-white',
      secondary:
        'opacity-70 hover:!border-black hover:!bg-black hover:!text-white',
      green:
        'opacity-70 hover:!border-green-500 hover:!bg-green-500 hover:!text-white',
      yellow:
        'opacity-70 hover:!border-yellow-500 hover:!bg-yellow-500 hover:!text-white',
      dark: '',
    },
    outlined: {
      primary: 'opacity-70 hover:!bg-transparent hover:!text-primary',
      secondary: 'opacity-70 hover:!bg-transparent hover:!text-black',
      green: 'opacity-70 hover:!bg-transparent hover:!text-green-500',
      yellow: 'opacity-70 hover:!bg-transparent hover:!text-yellow-500',
    },
  },
  size: {
    small: {
      text: 'py-2 px-4 text-[12px] leading-[14px]',
      icon: 'p-2.5',
    },
    normal: {
      text: 'py-[12px] px-4 text-[12px] leading-[14px]',
      icon: 'p-2.5',
    },
    medium: {
      text: 'py-[12px] px-[20px] text-[12px] leading-[14px]',
      icon: 'p-4',
    },
    large: {
      text: 'py-[16px] px-[24px] text-[12px] leading-[14px]',
      icon: 'p-6',
    },
  },
  variants: {
    primary:
      ' font-[700] border-2 border-red-500 bg-red-500 text-white hover:bg-red-600 hover:border-red-600',
    secondary:
      'font-[700] border-2 border-black bg-black text-white hover:bg-black/80 hover:!border-black/10',
    green:
      'font-[700] border-2 border-green-500 bg-green-500 text-white hover:bg-green-500/80 hover:!border-green-500/10',
    yellow:
      'font-[700] border-2 border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-500/80 hover:!border-yellow-500/10',
    white:
      'font-[700] border-2 border-gray-100 bg-white text-gray-900 hover:bg-primary-400 hover:border-primary-400 hover:text-white',
    dark: 'font-[700] border-2 border-gray-300 bg-gray-300 text-white hover:bg-gray-400 hover:border- hover:text-white',
  },
  outlineVariants: {
    primary:
      'text-[12px] leading-[24px] font-[700] border-2 border-primary bg-transparent hover:text-white text-primary hover:bg-primary',
    secondary:
      'text-[12px] leading-[24px] font-[700] border-2 border-black bg-transparent hover:text-white text-black  hover:bg-black',
    green:
      'text-[12px] leading-[24px] font-[700] border-2 border-green-500 bg-transparent hover:text-white  text-green-500 hover:bg-green-500',
    yellow:
      'text-[12px] leading-[24px] font-[700] border-2 border-yellow-500 bg-transparent hover:text-white text-yellow-500 hover:bg-yellow-500',
  },
};
