// theme definitions for MessageComponent
export const theme = {
  warning: {
    wrapper:
      'rounded-md border border-amber-400 w-full flex items-center gap-4 py-3 px-4 bg-amber-100',
    icon: 'rounded-full bg-amber-400 p-3',
    content: 'text-[1rem] font-bold text-amber-800',
  },
  success: {
    wrapper:
      'rounded-md border border-green-200 w-full flex items-center gap-4 py-3 px-4 bg-green-50',
    icon: 'rounded-full bg-green-400 p-3',
    content: 'text-[1rem] font-bold text-green-600',
  },
  error: {
    wrapper:
      'rounded-md border border-red-200 w-full flex items-center gap-4 py-3 px-4 bg-red-50',
    icon: 'rounded-full bg-error-400 p-3',
    content: 'text-[1rem] font-bold text-red-600',
  },
};
