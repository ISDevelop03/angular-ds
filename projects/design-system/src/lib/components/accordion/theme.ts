export const theme = {
  default: {
    container: 'mx-auto w-full space-y-[10px]',
    disclosure: '',
    button: {
      base: 'w-full space-y-2 bg-level-3 rounded-b-lg py-4 px-6 text-left focus:outline-none outline-none border-none shadow-accordion overflow-hidden',
      title: 'text-[0.875rem]/[1.5rem] font-bold text-neutral-900',
      active: '',
      titleWrapper: 'flex items-center justify-end flex-row-reverse gap-[11px]',

      icon: {
        base: 'transition ease-in duration-300',
        classActive: '',
        classInactive: '',
        inactiveId: 'arrow-down',
        activeId: 'arrow-up',
        size: '16px',
      },
    },
    panel: {
      base: 'p-5 overflow-hidden rounded-b-lg border-t border-stroke-1 bg-level-3',
    },
  },
  borderless: {
    container: 'mx-auto w-full space-y-[17px] rounded-2xl',
    disclosure: 'space-y-1 rounded-lg',
    button: {
      base: 'w-full hover:text-red-500 text-neutral-700 space-y-2 pb-3 text-left text-sm font-medium focus:outline-none',
      active: '',
      title: 'text-[0.875rem]/[1.125rem] font-bold',
      titleWrapper: 'w-full flex items-center justify-between justify-between',
      icon: {
        base: 'transition ease-in duration-300',
        classActive: '',
        classInactive: '',
        inactiveId: 'arrow-down',
        activeId: 'arrow-up',
        size: '16px',
      },
    },
    panel: { base: '' },
  },
};
