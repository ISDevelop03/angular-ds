export const input = {
  default: {
    container: 'relative w-full',
    wrapper: {
      base: 'border relative bg-level-4 h-[40px] flex flex-grow items-center p-4 w-full rounded',
      enabled:
        ' border-neutral-200 hover:border-primary-500 focus-within:!border-primary-500',
      disabled: 'border-neutral-200 opacity-40',
    },
    label:
      'inline-block text-xs leading-[16px] font-bold text-neutral-900 mb-2',
    input:
      'text-xs font-medium w-full text-gray-800 dark:text-white bg-transparent appearance-none dark:placeholder-gray-300 placeholder-gray-400 placeholder-text-sm outline-none border-none focus:ring-0 p-0',
    prefix: 'mr-1 text-gray-500',
    sufix: 'ml-1 text-gray-500',
    errorMessage: 'text-error-500 text-[12px] mt-1',
    hasError:
      '!border-red-500 hover:border-red-600 focus-within:!border-red-400',
    description: 'text-gray-500 mt-1',
  },
};
