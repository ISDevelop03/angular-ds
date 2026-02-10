export const theme = {
  default: {
    wrapper: 'w-full',
    list: {
      container: 'flex space-x-2 rounded-lg bg-level-3 p-1 w-fit',
      tab: {
        base: 'w-fit text-[0.75rem]/[1.125rem] rounded p-3 !outline-none focus:!outline-none focus:!border-none focus:!ring-0 text-nowrap transition-all duration-300 ease-in-out',
        selected: 'font-bold bg-red-50 text-red-500',
        unselected:
          'bg-transparent text-neutral-600 hover:bg-red-50 hover:text-red-500  disabled:hover:bg-transparent disabled:hover:text-neutral-600',
      },
    },
    panels: {
      container: '',
      panel: {
        base: 'rounded-md text-heading dark:text-white py-3 focus:outline-none',
      },
    },
  },
  noBackground: {
    wrapper: 'w-full px-3',
    list: {
      container: 'flex space-x-2 w-fit',
      tab: {
        base: 'w-fit relative text-[0.875rem]/[1.125rem] rounded-t-lg py-2 px-3 focus:!outline-none !outline-none text-nowrap focus:!border-none focus:!ring-0 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[18px] after:rounded-t-full after:h-[3px] after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out after:opacity-0 after:content-[""]',
        selected: 'font-bold bg-level-4 text-neutral-900 after:opacity-100',
        unselected:
          'bg-transparent text-neutral-600 hover:bg-level-4 hover:text-neutral-900 hover:after:opacity-100 disabled:hover:bg-transparent disabled:hover:text-neutral-600 disabled:hover:after:opacity-0',
      },
    },
    panels: {
      container: '',
      panel: {
        base: 'rounded-md -mx-3 focus:outline-none',
      },
    },
  },
  withBorder: {
    wrapper: 'w-full px-3',
    list: {
      container: 'flex space-x-2 rounded bg-crame-100 p-1 w-fit',
      tab: {
        base: 'w-fit relative text-[0.875rem]/[1.125rem] rounded py-3 px-3 focus:!outline-none !outline-none text-nowrap focus:!border-none focus:!ring-0 transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[70%] after:rounded-t-full after:h-[3px] after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out after:opacity-0 after:content-[""]',
        selected: 'bg-level-3 text-neutral-900 after:opacity-100 font-bold',
        unselected:
          'bg-transparent text-neutral-900 hover:bg-level-3 hover:text-neutral-900 hover:after:opacity-100 disabled:hover:bg-transparent disabled:hover:text-neutral-500 disabled:hover:after:opacity-0',
      },
    },
    panels: {
      container: '',
      panel: {
        base: 'rounded-md text-heading dark:text-white py-3 focus:outline-none',
      },
    },
  },
};
