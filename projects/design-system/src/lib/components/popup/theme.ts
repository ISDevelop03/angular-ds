export const theme = {
  base: 'fixed z-[1001]',
  overlay: 'fixed inset-0 dark:bg-black/60 bg-black/40 transition-opacity',
  rounded: 'rounded',
  panel:
    'mx-auto w-auto max-w-full h-auto overflow-hidden dark:bg-black bg-white',
  variants: {
    modal: {
      base: 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center max-w-fit',
      panel: 'rounded p-6 pt-7 h-fit flex flex-col items-start',
    },
    slideLeft: {
      base: 'top-0 right-0 bottom-0 fixed max-w-fit',
      panel: 'p-6 h-full',
    },
    slideRight: {
      base: 'top-0 left-0 bottom-0 fixed max-w-fit',
      panel: 'p-4 h-full',
    },
  },
};
