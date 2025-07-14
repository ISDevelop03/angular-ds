export const theme = {
  default: {
    element: {
      label: 'inline-block text-neutral-900 font-bold text-sm mb-2',
      button: {
        select:
          'cursor-default border text-[0.875rem] border-neutral-50 h-[40px] flex items-center justify-between w-full px-3 py-2 rounded bg-level-3 placeholder:text-[0.875rem] focus:ring-0 focus:outline-0 focus:border-primary hover:border-primary focus:outline-0 text-left placeholder:text-gray-700',
        selected: 'flex items-center justify-between gap-2',
        error:
          'ring-1 ring-error-400 border-1 border-error-400 outline-1 border-1 border-error-400',
        iconeError: 'text-error-500',
        disabled:
          '!opacity-50 text-neutral-900 placeholder:text-neutral-800 cursor-not-allowed hover:bg-transparent',
        label: 'text-heading dark:text-white !font-[400]',
        placeholder: 'text-heading dark:text-white text-[0.75rem]',
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
          'absolute top-0 border border-neutral-100 bottom-0 p-1 mb-1 mt-1 max-h-60 overflow-y-auto w-full rounded-lg bg-level-3 py-1 text-[0.75rem] leading-[14px] focus:outline-none border shadow-dropdown2',
        element:
          'w-full hover:bg-neutral-50 rounded cursor-default text-neutral-900 font-bold select-none py-3 px-4',
        fontcolor: 'white',
        available: 'cursor-pointer',
        unavailable: 'cursor-not-allowed opacity-50 hover:bg-transparent',
      },
      error: 'text-error-500 mt-1 relative text-[0.75rem]',
    },
  },
  currency: {
    element: {
      label: 'inline-block text-neutral-900 font-bold text-sm mb-2',
      button: {
        select:
          'cursor-default text-[0.625rem] flex items-center justify-end gap-2 w-full px-0 py-1.5 rounded bg-transparent placeholder:text-[0.875rem] focus:ring-0 focus:outline-0 focus:border-primary hover:border-primary focus:outline-0 text-left placeholder:text-gray-700',
        selected: 'flex items-center flex-row-reverse justify-between gap-2',
        error:
          'ring-1 ring-error-400 border-1 border-error-400 outline-1 border-1 border-error-400',
        iconeError: 'text-error-500',
        disabled:
          '!opacity-50 text-neutral-900 placeholder:text-neutral-800 cursor-not-allowed hover:bg-transparent',
        label: 'text-heading dark:text-white !font-[400]',
        placeholder: 'text-heading dark:text-white text-[0.75rem]',
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
          'absolute top-0 border border-neutral-100 bottom-0 p-1 mb-1 mt-1 max-h-60 overflow-y-auto w-full rounded-lg bg-level-3 py-1 text-[0.75rem] leading-[14px] focus:outline-none border shadow-dropdown2',
        element:
          'w-full hover:bg-neutral-50 rounded cursor-default text-neutral-900 font-bold select-none py-1.5 px-2',
        fontcolor: 'white',
        available: 'cursor-pointer',
        unavailable: 'cursor-not-allowed opacity-50 hover:bg-transparent',
      },
      error: 'text-error-500 mt-1 relative text-[0.75rem]',
    },
  },
};
