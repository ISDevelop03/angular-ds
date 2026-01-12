export const ToggleTheme = {
  default: {
    switch: {
      className:
        'relative inline-flex items-center transition-all duration-300 ease-in h-[20px] rounded-full w-[36px]',
      enabled: 'bg-success-500',
      disabled: 'bg-neutral-200',
      span: {
        enabled: 'translate-x-[17px] rtl:-translate-x-[17px]',
        disabled: 'translate-x-[2px] rtl:-translate-x-[2px]',
        className:
          'inline-block transition-all duration-150 ease-in w-[17px] h-[17px] transform bg-level-4 rounded-full',
      },
    },
  },
};

export const Theme = {
  toggle: ToggleTheme,
};
