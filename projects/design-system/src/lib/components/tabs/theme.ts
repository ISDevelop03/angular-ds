export const theme = {
  default: {
    wrapper: 'w-full',
    list: {
      container: 'flex space-x-1 rounded-xl bg-primary-500 p-1',
      tab: {
        base: 'w-full rounded-lg py-2.5 text-sm font-medium leading-5 focus:outline-none outline-none text-nowrap focus:border-none focus:ring-none transition-all duration-300 ease-in-out',
        selected: 'bg-white text-primary-700 shadow',
        unselected: 'text-primary-100 hover:bg-white/20 hover:text-white',
      },
    },
    panels: {
      container: 'mt-2',
      panel: {
        base: 'rounded-md text-heading dark:text-white p-3 focus:outline-none',
      },
    },
  },
};
