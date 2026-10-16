export const ONBORDING_SLIDER_THEME = {
  default: {
    wrapper: 'flex flex-col gap-4 rounded-2xl',
    header: 'flex items-center gap-2',
    title: 'text-base font-semibold text-white',
    viewport: 'w-full overflow-hidden',
    track:
      'flex w-full items-stretch transition-transform duration-500 ease-out',
    slide:
      'flex w-full min-w-full shrink-0 flex-col rounded-2xl shadow-sm',
    content: 'flex min-h-32 flex-1 flex-col',
    dots: 'mt-4 flex items-center justify-start gap-2',
    arrow: 'flex items-center justify-center cursor-pointer',
    arrowDisabled: 'flex items-center justify-center cursor-not-allowed',
    arrowIcon: 'text-neutral-400',
    arrowIconDisabled: 'text-neutral-600',
    dot: 'size-2 cursor-pointer rounded-[2px] bg-neutral-50 transition-colors',
    dotActive:
      'size-2 cursor-pointer rounded-[2px] bg-red-500 transition-colors',
  },
};
