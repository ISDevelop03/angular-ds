export const dropdown = {
  base: 'relative isolate inline-block',
  button: {
    base: 'flex w-full items-center gap-2 justify-between focus:outline-none focus:border-none data-[hover]:text-custom-black',
    active: 'text-primary',
  },
  container:
    'p-1 absolute mt-2 min-w-[150px] origin-top-right rounded-md border border-neutral-100 bg-level-4 text-custom-black shadow-dropdown focus:outline-none',
  item: {
    base: 'group whitespace-nowrap flex justify-start gap-2 w-full items-center rounded-md p-3 hover:bg-neutral-50 text-[14px]/normal font-[400]',
  },
  variants: {
    base: '',
    select: 'border border-gray-300 py-2 px-2 rounded',
  },
  icon: 'text-heading shrink-0 dark:text-white h-5 w-5',
};
