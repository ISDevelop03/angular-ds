export const ToggleTheme = {
  default: {
    switch: {
      className:
        'relative inline-flex items-center transition-all duration-300 ease-in h-[30px] rounded-full w-[50px]',
      enabled: 'bg-primary',
      disabled: 'dark:bg-neutral-700 bg-neutral-200',
      span: {
        enabled: 'translate-x-[21px] rtl:-translate-x-[21px]',
        disabled: 'translate-x-px rtl:-translate-x-px',
        className:
          'inline-block transition-all duration-150 ease-in w-[28px] h-[28px] transform bg-white rounded-full',
      },
    },
  },
};

export const Theme = {
  toggle: ToggleTheme,
};
