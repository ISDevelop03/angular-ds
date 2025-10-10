export const input = {
  default: {
    container: 'relative w-full',
    wrapper: {
      base: 'border relative bg-level-4 h-[40px] flex flex-grow items-center gap-3 px-3 w-full rounded',
      enabled:
        'border-stroke-1 hover:border-primary-500 focus-within:!border-primary-500',
      disabled:
        'border-neutral-100 bg-neutral-100 [&_input]:!text-neutral-500 cursor-not-allowed ',
    },
    label:
      'inline-block text-xs leading-[16px] font-light text-neutral-900 mb-2',
    input:
      'text-xs font-semibold w-full text-gray-800 dark:text-white bg-transparent appearance-none dark:placeholder-gray-300 placeholder-gray-400 placeholder-text-sm outline-none border-none focus:ring-0 p-0',
    prefix: 'mr-1 text-gray-500',
    sufix: 'ml-1 text-gray-500',
    errorMessage: 'text-error-500 text-xs mt-1',
    hasError:
      '!border-red-500 [&_input]:!text-red-500 [&_input]:placeholder:!text-red-500/50 hover:border-red-600 focus-within:!border-red-400',
    description: 'text-xs text-gray-500 mt-1',
  },
  search: {
    container: 'relative w-full',
    wrapper: {
      base: 'border relative bg-level-3 h-[40px] flex flex-grow items-center gap-3 px-3 w-full rounded',
      enabled:
        'border-stroke-1 hover:border-primary-500 focus-within:!border-primary-500',
      disabled: 'border-stroke-1 opacity-40',
    },
    label:
      'inline-block text-sm leading-[16px] font-bold text-neutral-900 mb-2',
    input:
      'text-sm font-bold w-full text-gray-800 dark:text-white bg-transparent appearance-none dark:placeholder-gray-300 placeholder-gray-400 placeholder-text-sm outline-none border-none focus:ring-0 p-0',
    prefix: 'mr-1 text-gray-500',
    sufix: 'ml-1 text-gray-500',
    errorMessage: 'text-error-500 text-xs mt-1',
    hasError:
      '!border-red-500 [&_input]:!text-red-500 [&_input]:placeholder:!text-red-500/50 hover:border-red-600 focus-within:!border-red-400',
    description: 'text-xs text-gray-500 mt-1',
  },
};
