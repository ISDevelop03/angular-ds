export const badge = {
  base: 'inline-flex text-nowrap items-center gap-[7px] font-medium rounded-[2px] w-fit',
  sizes: {
    sm: 'px-4 py-1',
    md: 'px-5 py-1.5',
    lg: 'px-6 py-1.5',
  },
  //bg-amber-500
  //bg-violet-500
  //bg-neutral-500
  variants: {
    default: 'bg-neutral-50 dark:bg-neutral-50 text-neutral-500',
    amber: 'bg-amber-50 text-amber-500',
    blue: 'bg-blue-50 text-blue-500',
    green: 'bg-[#E6F4EF] dark:bg-[#245140] text-success',
    violet: 'bg-violet-50 text-violet-500',
    red: 'bg-red-50 dark:bg-[#460809] text-red-500',
    orange: 'bg-amber-500 text-black',
  },
  icon: 'w-4 h-4',
};

export const textVariants = {
  sm: 'text-[0.75rem]/[0.875rem] font-medium',
  md: 'text-[0.875rem]/[1rem] font-medium',
  lg: 'text-[1rem]/[1.125rem] font-medium',
};
