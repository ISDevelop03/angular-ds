// src/lib/steps-theme.ts

export interface StepsTheme {
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
    headerWrapper: 'flex space-x-4 bg-gray-100 p-4 rounded-t',
    step: 'flex items-center space-x-2 text-gray-600 cursor-pointer',
    activeStep: 'font-semibold text-gray-900',
    contentWrapper: 'grow',
    navigationWrapper: 'flex justify-between items-center gap-x-3',
    button:
      'px-4 py-2 rounded shadow-sm transition ease-in-out duration-150 ' +
      'bg-gray-200 hover:bg-gray-300 disabled:opacity-50',
  },
  // add more variants as needed...
};
