// src/lib/steps-theme.ts

export interface StepsTheme {
  wrapper: string;
  /** Wrapper for the header row */
  headerWrapper: string;
  /** Individual step in the header */
  step: string;
  /** Modifier applied to the active step */
  activeStep: string;
  /** Wrapper for the content pane */
  contentWrapper: string;
  /** Wrapper for the navigation buttons */
  navigationWrapper: string;
  /** Common button styles */
  button: string;
}

export const STEPS_THEME: { [variant: string]: StepsTheme } = {
  default: {
    wrapper: 'h-full flex flex-col gap-6',
    headerWrapper: 'relative flex justify-between items-center overflow-hidden',
    step: 'relative flex-1 flex flex-col gap-y-2 before:transition-all before:duration-300 transition-all duration-300 items-center before:absolute before:top-4 before:-z-[1] before:-left-1/2 before:h-px',
    activeStep: 'font-semibold text-gray-900',
    contentWrapper: 'grow',
    navigationWrapper: 'flex justify-between items-center gap-x-3',
    button:
      'px-4 py-2 rounded shadow-sm transition ease-in-out duration-150 ' +
      'bg-gray-200 hover:bg-gray-300 disabled:opacity-50',
  },
  vertical: {
    wrapper: 'grow flex items-start gap-x-8 mb-6',
    headerWrapper:
      'min-w-[250px] relative flex flex-col justify-between items-start overflow-hidden',
    step: 'relative pb-10 last:pb-0 flex-1 flex gap-x-2 before:transition-all before:duration-300 transition-all duration-300 items-center before:absolute before:left-4 before:top-8 before:-z-[1] before:h-full before:w-px ',
    activeStep: 'font-semibold text-gray-900',
    contentWrapper: 'grow h-full',
    navigationWrapper: 'flex justify-between items-center gap-x-3',
    button:
      'px-4 py-2 rounded shadow-sm transition ease-in-out duration-150 ' +
      'bg-gray-200 hover:bg-gray-300 disabled:opacity-50',
  },
  // add more variants as needed...
};
