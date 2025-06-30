export const theme = {
  base: 'fixed',
  overlay: 'fixed inset-0 dark:bg-black/60 bg-black/40 transition-opacity',
  rounded: 'rounded-lg',
  panel:
    'mx-auto w-auto max-w-full h-auto overflow-hidden dark:bg-black bg-white',
  variants: {
    modal: {
      base: 'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center max-w-fit max-h-fit',
      panel: 'rounded-lg p-4',
    },
    slideLeft: {
      base: 'top-0 right-0 bottom-0 fixed max-w-fit max-h-fit',
      panel: 'p-4',
    },
    slideRight: {
      base: 'top-0 left-0 bottom-0 fixed max-w-fit max-h-fit',
      panel: 'p-4',
    },
  },
};
