export const theme = {
  default: {
    element: {
      label: 'text-heading dark:text-white',
      button: {
        select:
          'cursor-default border text-[14px] border-gray-100 dark:border-neutral-600 h-[35px] md:h-[40px] flex items-center justify-between w-full px-3 py-2 rounded-[2px] shadow bg-gray-50 dark:bg-neutral-700 placeholder:text-[14px] focus:ring-0 focus:outline-0 focus:border-primary hover:border-primary focus:outline-0 text-left placeholder:text-gray-700',
        error:
          'ring-1 ring-error-400 border-1 border-error-400 outline-1 border-1 border-error-400',
        iconeError: 'text-error-500',
        disabled:
          'bg-gray-50 dark:bg-neutral-700 dark:text-white text-heading dark:placeholder:text-white placeholder:text-heading cursor-not-allowed ',
        label: 'text-heading dark:text-white !font-[400]',
        placeholder: 'text-heading dark:text-white text-[12px]',
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
          'absolute top-0 border border-neutral-300 dark:border-neutral-600 bottom-0 p-1 mb-1 z-50 mt-1 max-h-60 w-full rounded-[2px] bg-neutral-50 dark:bg-neutral-700 py-1 text-[12px] shadow focus:outline-none border',
        element:
          'w-full hover:bg-gray-200 dark:hover:bg-gray-800 overflow-auto cursor-default h-9 text-heading dark:text-white  select-none py-2 pl-3 pr-4 data-[active]:bg-gray-200 data-[active]:dark:bg-neutral-800',
        fontcolor: 'white',
        available: 'cursor-pointer',
        unavailable: 'cursor-not-allowed text-opacity-25',
      },
      error: 'text-error-500 mt-1 relative text-[12px]',
    },
  },
};
