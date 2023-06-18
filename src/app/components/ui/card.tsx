import clsx from "clsx";
import { PropsWithChildren } from "react";
import { PropsWithClassName } from "../../lib/prop-types";

export interface CardProps {
  className?: string;
}

export const Card = ({
  children,
  className = "",
}: PropsWithClassName<CardProps>) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-y-2",
        "border-2 border-slate-900 rounded-md p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className = "",
}: PropsWithClassName<{}>) => {
  return (
    <h2 className={clsx("text-2xl font-semibold", className)}>{children}</h2>
  );
};

export const CardText = ({
  children,
  className = "",
}: PropsWithClassName<{}>) => {
  return (
    <p className={clsx("text-gray-300 tracking-tighter", className)}>
      {children}
    </p>
  );
};
