export const theme = {
  default: {
    container: 'mx-auto w-full space-y-[10px]',
    disclosure: '',
    button: {
      base: 'w-full space-y-2 bg-level-4 rounded-b-lg py-4 px-6 text-left focus:outline-none outline-none border-none shadow-accordion shadow-neutral-100 overflow-hidden',
      title: 'text-[14px] leading-[24px] font-bold text-neutral-900',
      active: '!rounded-none !shadow-none',
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
      base: 'p-5 overflow-hidden rounded-b-lg',
    },
  },
  borderless: {
    container: 'mx-auto w-full space-y-[17px] rounded-2xl',
    disclosure: 'space-y-1 rounded-lg',
    button: {
      base: 'w-full hover:text-red-500 text-neutral-700 space-y-2 pb-3 text-left text-sm font-medium focus:outline-none',
      active: '',
      title: 'text-[14px] leading-[18px] font-bold',
      titleWrapper: 'flex items-center justify-between',
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
