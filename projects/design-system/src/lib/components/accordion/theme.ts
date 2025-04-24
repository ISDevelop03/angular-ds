export const theme = {
  default: {
    container: 'mx-auto w-full space-y-[30px]',
    disclosure: '',
    button: {
      base: 'w-full space-y-2 border border-solid border-gray-400 rounded p-5 bg-gray-300 text-black text-left focus:outline-none',
      active: '!bg-primary text-white border-primary rounded-b-none',
      icon: {
        base: 'transition ease-in duration-300 w-6 h-6',
        classActive: 'text-white',
        classInactive: 'text-primary',
        inactiveId: 'add',
        activeId: 'minus',
        width: '16',
        height: '16',
      },
    },
    panel: {
      base: 'p-5 bg-gray-300 text-black overflow-hidden rounded-b border border-solid border-gray-400 border-t-0',
    },
  },
  withBorder: {
    container: 'mx-auto w-full space-y-3 rounded-2xl',
    disclosure: 'space-y-1 border border-gray-200 rounded-lg',
    button: {
      base: 'w-full space-y-2 p-4 text-left text-sm font-medium focus:outline-none',
      active: 'bg-primary text-white',
      icon: {
        base: 'transition ease-in duration-300',
        inactiveId: 'add',
        activeId: 'minus',
        classActive: 'text-white',
        classInactive: 'text-primary',
        width: '16',
        height: '16',
      },
    },
    panel: { base: 'px-4 pb-2' },
  },
  white: {
    container: 'mx-auto w-full space-y-[30px]',
    disclosure: '',
    button: {
      base: 'w-full space-y-2 border border-solid border-gray-400 p-5 bg-white text-black text-left focus:outline-none',
      active: 'bg-primary text-white border-primary rounded-b-none',
      icon: {
        base: 'transition ease-in duration-300 w-6 h-6',
        classActive: 'text-white',
        classInactive: 'text-primary',
        inactiveId: 'add',
        activeId: 'minus',
        width: '16',
        height: '16',
      },
    },
    panel: {
      base: 'p-5 bg-white text-gray-700 overflow-hidden rounded-b border border-solid border-gray-400 border-t-0',
    },
  },
};
