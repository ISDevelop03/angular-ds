// If your TS version already has Exclude, you can skip this:
export type Exclude<T, U> = T extends U ? never : T;

// Now define Omit:
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
