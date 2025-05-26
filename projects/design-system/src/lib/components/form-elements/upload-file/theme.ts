export interface UploadFileTheme {
  wrapper: string;
  icon: string;
  text: string;
}

export const uploadFileThemes: { [key: string]: UploadFileTheme } = {
  default: {
    wrapper:
      'relative py-4 px-6 border border-dashed border-neutral-100 flex flex-col gap-3 text-neutral-500 rounded-lg text-center bg-neutral-25 transition',
    icon: 'mx-auto size-10 shrink-0 flex justify-center items-center bg-white rounded-md text-gray-400',
    text: 'text-sm flex flex-col gap-1',
  },
};
