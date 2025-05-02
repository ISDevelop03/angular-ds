export const input = {
  default: {
    container: 'relative w-full',
    wrapper: {
      base: 'relative bg-white h-[35px] md:h-[40px] dark:bg-gray-600 flex flex-grow items-center px-[13px] py-[9px] w-full rounded-[2px]',
      enabled:
        'border border-[#404045] hover:border-primary-500 focus-within:!border-primary-500',
      disabled: 'bg-gray-50 opacity-40',
    },
    label:
      'inline-block text-xs leading-[16px] font-bold font-roboto font-bold text-gray-700 mb-4',
    input:
      'text-xs font-medium w-full text-gray-800 dark:text-white bg-transparent appearance-none dark:placeholder-gray-300 placeholder-gray-[#808080] placeholder-text-sm outline-none border-none focus:ring-0 p-0',
    prefix: 'mr-1 text-gray-500',
    sufix: 'ml-1 text-gray-500',
    errorMessage: 'text-error-500 text-[12px] mt-1',
    hasError:
      '!border-red-500 hover:border-red-600 focus-within:!border-red-400',
    description: 'text-gray-500 mt-1',
  },
  bourse: {
    container: 'relative w-full',
    wrapper: {
      base: 'relative bg-gray-100 dark:bg-[#171717] flex flex-grow items-center px-4 py-2 w-full rounded-full shadow-base',
      enabled:
        'border border-[#70747D] hover:border-primary-300 focus-within:!border-primary-500',
      disabled: ' border border-[#70747D] opacity-50',
    },
    label: 'inline-block text-sm font-medium text-black dark:text-white mb-1',
    input:
      'text-base font-medium text-black dark:text-white leading-[20px] w-full bg-transparent appearance-none placeholder-gray-400 placeholder-text-sm outline-none border-none focus:ring-0 p-0',
    prefix: 'mr-1 text-gray-200',
    sufix: 'ml-1 text-gray-200',
    errorMessage: 'text-error-500 mt-1 text-[12px]',
    hasError:
      '!border-red-500 hover:border-red-600 focus-within:!border-red-400',
    description: 'text-gray-500 mt-1',
  },
  overlay: {
    container: 'relative w-full',
    wrapper: {
      base: 'relative bg-transparent flex flex-grow items-center w-full border-b border-b-white',
      enabled: '',
      disabled: '',
    },
    label:
      'inline-block text-xs leading-[16px] font-bold font-roboto font-bold text-gray-700 mb-4',
    input:
      'text-md md:text-xl font-medium w-full text-white bg-transparent appearance-none placeholder-gray-300 placeholder-text-md outline-none border-none focus:ring-0 p-0 pb-2',
    prefix: 'mr-1 text-gray-500',
    sufix: 'ml-1 text-gray-500',
    errorMessage: 'text-error-500 mt-1 text-[12px]',
    hasError:
      '!border-red-500 hover:border-red-600 focus-within:!border-red-400',
    description: 'text-white mt-1 text-xs text-right smDown:text-left',
  },
  webform: {
    container: 'relative w-full',
    wrapper: {
      base: 'relative bg-white flex flex-grow items-center px-3 py-3 w-full rounded-[2px]',
      enabled:
        'border border-gray-400 hover:border-primary-300 focus-within:!border-primary-500',
      disabled: ' border border-custom-gray-500 opacity-50',
    },
    label: 'inline-block text-sm font-medium text-black dark:text-white mb-1',
    input:
      'text-xs font-medium text-black dark:text-white leading-[20px] w-full bg-transparent appearance-none placeholder-gray-800 placeholder-text-xs placeholder-font-medium outline-none border-none focus:ring-0 p-0',
    prefix: 'mr-1 text-gray-200',
    sufix: 'ml-1 text-gray-200',
    errorMessage: 'text-error-500 mt-1 text-[12px]',
    hasError:
      '!border-red-500 hover:border-red-600 focus-within:!border-red-400',
    description: 'text-gray-500 mt-1',
  },
};
