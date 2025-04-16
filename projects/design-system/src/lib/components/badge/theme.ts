export const badge = {
  base: 'inline-flex items-center gap-[7px] font-medium rounded-[2px] w-fit',
  sizes: {
    sm: 'px-4 py-1',
    md: 'px-6 py-1.5',
    lg: 'px-8 py-1.5',
    badge: 'px-3.5 py-2',
  },
  variants: {
    default:
      'bg-transparent dark:text-white dark:border-cards-dark border border-cards text-heading rounded-full  *:!font-normal',
    active:
      'bg-cards dark:bg-gray-800 dark:text-white border border-cards text-heading rounded-full *:!font-semibold',
    base: 'bg-gray-100 text-gray-700',
    primary: 'bg-primary-50 text-primary-500',
    info: 'py-2 px-3 bg-gray-custom-100 text-heading',
    danger: 'bg-error-50 text-error-600',
    warning: 'bg-warning-50 text-warning-600',
    success: 'bg-success-50 text-success-600',
    indigo: 'py-2 px-3 bg-gray-custom-100 text-primary',
    purple: 'bg-purple-50 text-purple-700',
    pink: 'bg-pink-50 text-pink-500',
    recommanded: 'bg-success-500 text-white',
    outline:
      'bg-transparent hover:bg-transparent border border-primary-500 text-primary-500',
  },
  icon: 'w-4 h-4',
};

export const textVariants = {
  sm: 'text-[10px] leading-[18px] font-[400]',
  md: 'text-[12px] leading-[20px] font-[400]',
  lg: 'text-[14px] leading-[24px] font-[400]',
  badge: 'text-[12px] leading-[12px]',
};
