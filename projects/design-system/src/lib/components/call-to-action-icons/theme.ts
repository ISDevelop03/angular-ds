export const callToActionIconsTheme = {
  default: {
    wrapper:
      'flex border border-stroke-1 bg-level-5 rounded py-3 items-center justify-start gap-px text-neutral-900',
    separator: 'shrink-0 h-3 w-px bg-neutral-500',
    button: 'px-2 hover:opacity-50 transition-opacity duration-300',
    icon: 'flex items-center justify-center text-neutral-900',
    iconSize: '16',
  },
  separated: {
    wrapper: 'flex items-center justify-start gap-1 text-neutral-900',
    separator: '',
    button:
      'border border-stroke-1 bg-level-5 rounded p-2 hover:opacity-50 transition-opacity duration-300',
    icon: 'flex items-center justify-center text-neutral-900',
    iconSize: '16',
  },
  borderless: {
    wrapper: 'flex items-center justify-start gap-3.5 text-neutral-900',
    separator: '',
    button: 'hover:opacity-50 transition-opacity duration-300',
    icon: 'flex items-center justify-center text-neutral-900',
    iconSize: '16',
  },
};
