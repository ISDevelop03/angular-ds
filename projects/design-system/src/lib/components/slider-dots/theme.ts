// slider-dots.theme.ts

export const SliderDotsTheme = {
  /**
   * ──────────────────────────────────────────────────────────────────────────────
   * DEFAULT VARIANT
   * ──────────────────────────────────────────────────────────────────────────────
   */
  default: {
    container: 'flex items-center gap-3',
    dotsWrapper: 'flex items-center justify-center gap-3',
    dot: {
      base: 'rounded-[2px] transition-colors cursor-pointer',
      size: 'size-2', // Tailwind width/height for each dot
      activeBg: 'bg-red-500', // bg when dot is active
      inactiveBg: 'bg-neutral-200', // bg when dot is inactive
    },
    arrow: {
      wrapper: 'cursor-pointer flex items-center justify-center',
      activeText: 'text-neutral-500', // arrow color when “enabled”
      disabledText: 'text-gray-400', // arrow color when “disabled”
      disabledOpacity: 'opacity-40 !cursor-not-allowed',
    },
  },

  // You can add more variants here:
  // e.g. "dark", "success", "warning", “borderless”, etc.
};
