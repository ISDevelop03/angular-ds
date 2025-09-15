export const theme = {
  default: {
    element: {
      label: 'inline-block text-neutral-900 font-light text-xs mb-2',
      button: {
        select:
          'cursor-default border text-[1rem]/[1.125rem] border-stroke-1 h-[40px] flex items-center justify-between w-full px-3 py-2 rounded bg-level-3 placeholder:text-[1rem]/[1.125rem] focus:ring-0 focus:outline-0 focus:border-primary hover:border-primary focus:outline-0 text-left placeholder:text-gray-700',
        selected: 'flex items-center gap-2 w-full relative',
        error:
          'ring-1 ring-error-400 border-1 border-error-400 outline-1 border-1 border-error-400',
        iconeError: 'text-error-500',
        disabled:
          '!bg-neutral-100 !text-neutral-500 placeholder:!text-neutral-800 cursor-not-allowed hover:bg-transparent !border-neutral-100 hover:border-neutral-100',
        label: 'text-heading text-[12px]/normal dark:text-white !font-[400] text-neutral-900',
        placeholder: 'font-bold dark:text-white text-[12px]/normal text-neutral-900',
      },
      field: {
        activated: 'bg-gray-200 dark:bg-neutral-700',
      },
      icone: {
        arrow: 'text-heading dark:text-white w-4 h-4',
        checked: 'text-primary-500 w-5 h-5',
      },
      options: {
        selectedfont:
          'flex text-heading dark:text-white items-center justify-between w-full ',
        container:
          'absolute top-0 border border-neutral-100 bottom-0 p-1 mb-1 mt-1 min-w-32 max-h-60 overflow-y-auto w-full rounded-lg bg-level-3 py-1 text-[0.875rem]/[1rem] focus:outline-none border shadow-dropdown2',
        element:
          'w-full hover:bg-neutral-50 rounded cursor-default text-neutral-900 font-bold select-none py-3 px-4',
        fontcolor: 'white',
        available: 'cursor-pointer',
        unavailable: 'cursor-not-allowed opacity-50 hover:bg-transparent',
      },
      error: 'text-error-500 mt-1 text-xs relative text-[0.875rem]/normal',
      description: 'text-gray-500 text-xs mt-1 relative text-[0.875rem]/normal',
    },
  },
  currency: {
    element: {
      label: 'inline-block text-neutral-900 font-bold text-sm mb-2',
      button: {
        select:
          'cursor-default  text-[0.75rem]/normal flex items-center justify-end gap-2 w-full px-0 py-1.5 rounded bg-transparent placeholder:text-[1rem]/normal focus:ring-0 focus:outline-0 focus:border-primary hover:border-primary focus:outline-0 text-left placeholder:text-gray-700',
        selected: 'flex items-center flex-row-reverse justify-between gap-2',
        error:
          'ring-1 ring-error-400 border-1 border-error-400 outline-1 border-1 border-error-400',
        iconeError: 'text-error-500',
        disabled:
          '!opacity-50 !bg-neutral-100 !text-neutral-500 placeholder:text-neutral-800 cursor-not-allowed hover:bg-transparent !border-neutral-100 hover:border-neutral-100',
        label: 'dark:text-white !font-[400]',
        placeholder: 'font-bold dark:text-white text-[0.875rem]/normal',
      },
      field: {
        activated: 'bg-gray-200 dark:bg-neutral-700',
      },
      icone: {
        arrow: 'text-heading dark:text-white w-4 h-4',
        checked: 'text-primary-500 w-5 h-5',
      },
      options: {
        selectedfont:
          'flex text-heading dark:text-white items-center justify-between w-full ',
        container:
          'absolute top-0 border right-0 border-neutral-100 bottom-0 p-1 mb-1 mt-1 min-w-28 max-h-60 overflow-y-auto !w-full rounded-lg bg-level-3 py-1 text-[0.875rem]/[1rem] focus:outline-none border shadow-dropdown2',
        element:
          'w-full hover:bg-neutral-50 rounded cursor-default text-neutral-900 font-bold select-none py-1.5 px-2',
        fontcolor: 'white',
        available: 'cursor-pointer',
        unavailable: 'cursor-not-allowed opacity-50 hover:bg-transparent',
      },
      error: 'text-error-500 mt-1 relative text-[0.875rem]/normal',
      description: 'text-gray-500 text-xs mt-1 relative text-[0.875rem]/normal',
    },
  },
};
