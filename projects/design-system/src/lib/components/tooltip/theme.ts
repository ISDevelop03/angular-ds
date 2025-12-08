// theme definitions for TooltipComponent
export const defaultTheme = {
  base: 'w-max max-w-[300px] absolute z-[9999] px-3 py-2 text-sm font-medium text-white bg-neutral-900 dark:bg-[#000000] dark:bg-neutral-800 rounded-lg shadow-tooltip pointer-events-none',
  positions: {
    top: 'bottom-full left-1/2 !-translate-x-1/2 mb-2',
    topRight: 'bottom-full right-0 mb-2',
    topLeft: 'bottom-full left-0 mb-2',
    bottom: 'top-full left-1/2 !-translate-x-1/2 mt-2',
    bottomRight: 'top-full right-0 mt-2',
    bottomLeft: 'top-full left-0 mt-2',
    left: 'right-full top-1/2 !-translate-y-1/2 mr-2',
    right: 'left-full top-1/2 !-translate-y-1/2 ml-2',
  },
  arrow: {
    base: 'absolute w-0 h-0',
    positions: {
      top: 'top-full left-1/2 !-translate-x-1/2 -translate-y-[1px] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-neutral-900 dark:border-t-[#000000]',
      topRight:
        'top-full right-3 -translate-y-[1px] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-neutral-900 dark:border-t-[#000000]',
      topLeft:
        'top-full left-3 -translate-y-[1px] border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-neutral-900 dark:border-t-[#000000]',
      bottom:
        'bottom-full left-1/2 !-translate-x-1/2 translate-y-[1px] border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-neutral-900 dark:border-b-[#000000]',
      bottomRight:
        'bottom-full right-3 translate-y-[1px] border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-neutral-900 dark:border-b-[#000000]',
      bottomLeft:
        'bottom-full left-3 translate-y-[1px] border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-neutral-900 dark:border-b-[#000000]',
      left: 'left-full top-1/2 !-translate-y-1/2 -translate-x-[1px] border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent border-l-neutral-900 dark:border-l-[#000000]',
      right:
        'right-full top-1/2 !-translate-y-1/2 translate-x-[1px] border-t-[6px] border-b-[6px] border-r-[6px] border-t-transparent border-b-transparent border-r-neutral-900 dark:border-r-[#000000]',
    },
  },
};

export const theme = {
  default: defaultTheme,
};
