export const DatePickerTheme = {
  default: {
    container: 'bg-white p-4 rounded shadow-md w-80 min-h-[300px]',
    header: 'flex items-center justify-between mb-2',
    navButton: 'p-1 hover:bg-gray-200 rounded',
    title: 'cursor-pointer font-medium',
    weekDay:
      'w-8 h-8 flex items-center justify-center text-xs font-semibold text-gray-500',
    day: 'w-8 h-8 flex items-center justify-center cursor-pointer',
    dayDisabled: 'text-gray-300',
    dayActive:
      'w-8 h-8 bg-red-500 flex items-center justify-center text-white rounded-full',
    dayInRange:
      'w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full',
    monthGrid: 'grid grid-cols-3 gap-2',
    monthItem: 'p-2 text-center cursor-pointer rounded',
    monthActive: 'p-2 flex items-center justify-center bg-red-500 text-white',
    yearGrid: 'grid grid-cols-4 gap-2',
    yearItem: 'p-2 text-center cursor-pointer rounded',
    yearActive:
      'p-2 flex items-center justify-center  text-center  bg-red-500 text-white',
  },
};
export type DatePickerVariant = keyof typeof DatePickerTheme;
