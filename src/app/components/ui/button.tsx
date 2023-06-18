"use client";

import clsx from "clsx";
import { PropsWithChildren } from "react";

export type ButtonType = "primary" | "secondary";

export interface ButtonProps {
  type: ButtonType;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  type,
  onClick = () => {},
  className = "",
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        type === "primary" && "bg-blue-500",
        type === "secondary" && "bg-blue-950",
        "text-white rounded-md px-3 py-2",
        "focus:outline-none focus:ring-4 focus:ring-blue-600/25",
        className
      )}
    >
      {children}
    </button>
  );
};
