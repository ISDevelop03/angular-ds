export interface PaginationVariants {
  [key: string]: PaginationVariant;
}

export interface PaginationVariant {
  wrapper: string;
  container: string;
  nextPrevButtons: NextPrevButtons;
  buttons: Buttons;
  info: string;
  perPage: PerPage;
}

export interface NextPrevButtons {
  base: string;
  prev: PrevNextProps;
  next: PrevNextProps;
}

export interface PrevNextProps {
  base: string;
  id: string;
  size: string;
}

export interface Buttons {
  base: string;
  button: {
    base: string;
    active: string;
    inactive: string;
  };
  ellipsis: string;
}

export interface PerPage {
  wrapper: string;
  label: string;
  select: {
    base: string;
    option: string;
  };
}
