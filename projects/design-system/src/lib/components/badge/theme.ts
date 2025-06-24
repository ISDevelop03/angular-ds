export const badge = {
  base: 'inline-flex items-center gap-[7px] font-medium rounded-[2px] w-fit',
  sizes: {
    sm: 'px-4 py-1',
    md: 'px-5 py-1.5',
    lg: 'px-6 py-1.5',
  },
  //bg-amber-500
  //bg-violet-500
  //bg-neutral-500
  variants: {
    default: 'bg-neutral-50 text-neutral-500',
    amber: 'bg-amber-50 text-amber-500',
    blue: 'bg-blue-50 text-blue-500',
    green: 'bg-green-50 text-green-500',
    violet: 'bg-violet-50 text-violet-500',
    red: 'bg-red-50 text-red-500',
    stroke1:
      'border bg-card-level-1 border-stroke-1 text-neutral-700 *:!font-bold',
  },
  outlineVariants: {
    default: 'border bg-neutral-50 border-neutral-500 text-neutral-500',
    amber: 'border bg-amber-50 border-amber-500 text-amber-500',
    blue: 'border bg-blue-50 border-blue-500 text-blue-500',
    green: 'border bg-green-50 border-green-500 text-green-500',
    violet: 'border bg-violet-50 border-violet-500 text-violet-500',
    red: 'border bg-red-50 border-red-500 text-red-500',
    stroke1:
      'border bg-transparent border-stroke-1 text-neutral-700 *:!font-bold',
  },
  icon: 'w-4 h-4',
};

export const textVariants = {
  sm: 'text-[10px] leading-[12px] font-medium',
  md: 'text-[12px] leading-[14px] font-medium',
  lg: 'text-[14px] leading-[16px] font-medium',
};
