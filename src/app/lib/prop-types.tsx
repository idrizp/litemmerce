import { PropsWithChildren } from "react";

export type PropsWithClassName<T> = PropsWithChildren<T> & {
  className?: string;
};
