export const theme = {
  default: {
    container: 'flex items-center gap-2',
    textVariant: 'text-lg/Semibold',
    text: 'text-black dark:text-white text-start border-s-[6px] border-s-primary uppercase ps-4',
    icon: 'text-primary-700 h-6 w-6',
    separator: 'border-t border-t-gray-700 border-solid grow mdDown:hidden',
  },
  title: {
    container: 'flex items-center gap-2 flex-nowrap',
    textVariant: 'paragraph-title',
    text: '',
    icon: '',
    separator:
      'border-t border-t-gray border-solid grow relative top-[3px] mdDown:hidden',
  },
  block: {
    container:
      'flex items-center gap-2 flex-nowrap text-black dark:text-white text-[18px] leading-[25px] font-semibold',
    textVariant: 'paragraph-title',
    text: '',
    icon: '',
    separator:
      'border-t border-t-gray border-solid grow relative top-[3px] mdDown:hidden',
  },
};
