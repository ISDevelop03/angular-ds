export const ONBORDING_VIDEO_THEME = {
  default: {
    trigger:
      'relative block aspect-square w-full cursor-pointer overflow-hidden p-0 text-left shadow-sm',
    image: 'absolute inset-0 h-full w-full object-cover',
    play:
      'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    backdrop: 'fixed inset-0 z-[1001]',
    overlay: 'popup-overlay fixed inset-0 dark:bg-black/60 bg-black/40',
    dialog:
      'fixed left-1/2 top-1/2 z-[1001] -translate-x-1/2 -translate-y-1/2',
    frame:
      'relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg animate-fadeInScale',
    player: 'absolute inset-0 h-full w-full border-0 bg-black',
    close:
      'absolute z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white',
  },
};
