export const theme = {
  default: {
    wrapper: 'w-full',
    list: {
      base: 'w-full flex items-center justify-between',
      container: 'flex space-x-2 rounded-lg bg-level-3 p-1 w-fit',
      tab: {
        base: 'w-fit text-[0.75rem]/[1.125rem] rounded p-3 !outline-none focus:!outline-none focus:!border-none focus:!ring-0 text-nowrap transition-all duration-300 ease-in-out',
        selected: 'font-bold bg-red-50 text-red-500',
        unselected:
          'bg-transparent text-neutral-600 hover:bg-red-50 hover:text-red-500 disabled:hover:bg-transparent disabled:hover:text-neutral-600',
      },
    },
    panels: {
      container: '',
      panel: {
        base: 'text-heading dark:text-white py-3 focus:outline-none',
      },
    },
  },
  noBackground: {
    wrapper: 'w-full px-3',
    list: {
      base: 'w-full flex items-center justify-between',
      container: 'flex space-x-2 w-fit',
      tab: {
        base: 'w-fit relative text-[0.875rem]/[1.125rem] rounded-t-lg focus:!outline-none !outline-none text-nowrap focus:!border-none focus:!ring-0 transition-all duration-300 ease-in-out',
        button: {
          base: "py-2 px-3 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[18px] after:rounded-t-full after:h-[3px] after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out after:opacity-0 after:content-['']",
          selected: 'font-bold text-neutral-900 after:opacity-100',
          unselected: 'text-neutral-600 hover:text-neutral-900 hover:after:opacity-100',
        },
        selected: 'bg-level-4',
        unselected:
          'bg-transparent hover:bg-level-4 disabled:hover:bg-transparent',
      },
    },
    panels: {
      container: '',
      panel: {
        base: '!-mx-3 focus:outline-none',
      },
    },
  },
  vertical: {
    wrapper: 'w-full flex gap-x-2',
    list: {
      base: 'w-1/4 flex items-center justify-between',
      container: 'flex flex-col gap-y-2 rounded bg-crame-100 p-1 w-full',
      tab: {
        base: 'w-full text-left relative text-[0.875rem]/[1.125rem] rounded !shadow-none focus:!shadow-now focus:!outline-none !outline-none text-nowrap focus:!border-none focus:!ring-0 transition-all duration-300 ease-in-out after:absolute',
        button: {
          base: "relative py-3 px-3 after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:h-[70%] after:rounded-r-full after:w-[3px] after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out after:opacity-0 after:content-['']",
          selected: 'after:opacity-100 text-neutral-900 font-bold',
          unselected: 'after:opacity-0 text-neutral-900 hover:text-neutral-900 disabled:hover:bg-transparent disabled:hover:text-neutral-500',
        },
        selected: 'bg-level-3',
        unselected:
          'bg-transparent hover:bg-level-3',
      },
    },
    panels: {
      container: '',
      panel: {
        base: 'text-heading dark:text-white py-3 focus:outline-none',
      },
    },
  },
  withBorder: {
    wrapper: 'w-full ',
    list: {
      base: 'w-full flex items-center justify-between',
      container: 'flex space-x-2 rounded bg-crame-100 p-1 w-fit',
      tab: {
        base: 'w-fit relative text-[0.875rem]/[1.125rem] rounded !shadow-none focus:!shadow-now focus:!outline-none !outline-none text-nowrap focus:!border-none focus:!ring-0 transition-all duration-300 ease-in-out',
        button: {
          base: "py-3 px-3 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[70%] after:rounded-t-full after:h-[3px] after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out after:opacity-0 after:content-['']",
          selected: 'font-bold text-neutral-900 after:opacity-100',
          unselected: 'text-neutral-900 hover:text-neutral-900 hover:after:opacity-100 disabled:hover:text-neutral-500 disabled:hover:after:opacity-0',
        },
        selected: 'bg-level-3',
        unselected:
          'bg-transparent hover:bg-level-3 disabled:hover:bg-transparent',
      },
    },
    panels: {
      container: '',
      panel: {
        base: 'text-heading dark:text-white py-3 focus:outline-none',
      },
    },
  },
};
