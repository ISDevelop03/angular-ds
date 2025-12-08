export const range = {
  input: {
    defaultThumb:
      'form-range appearance-none w-full h-1 p-0 bg-gray-100 focus:outline-none focus:ring-0 focus:shadow-none defaultInputRangeThumb',
  },
};
// a simple map of Tailwind classes per “variant”
export const RangeSelectorTheme = {
  default: {
    container: 'relative w-full select-none touch-none',
    track: 'h-2 bg-neutral-50 rounded-full',
    range: 'h-2 bg-red-500 rounded-full',
    thumb: 'w-6 h-6 bg-white rounded-full border border-red-600 shadow',
  },
};
export type RangeVariant = keyof typeof RangeSelectorTheme;
