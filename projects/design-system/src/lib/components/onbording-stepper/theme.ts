export const ONBORDING_STEPPER_THEME = {
  default: {
    wrapper: 'flex flex-col',
    step: 'flex items-stretch gap-3',
    rail: 'flex w-8 shrink-0 flex-col items-center',
    marker:
      'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold leading-none',
    markerActive: 'bg-white text-red-500',
    markerDone: 'bg-success-500 text-white',
    markerUpcoming: 'bg-[#465654] text-[#9aa6a3]',
    line: 'w-px flex-1 bg-[#d3dbd8]',
    body: 'min-w-0 flex-1 pb-6',
    bodyLast: 'min-w-0 flex-1',
    title: 'text-base leading-8',
    titleActive: 'font-bold text-white',
    titleDone: 'font-bold text-white',
    titleUpcoming: 'font-medium text-[#9aa6a3]',
    content: 'mt-1 text-sm font-normal leading-5 text-white',
    contentHidden: 'hidden',
  },
};
