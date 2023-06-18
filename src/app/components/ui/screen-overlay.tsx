"use client";

import { PropsWithClassName } from "@/app/lib/prop-types";
import clsx from "clsx";
import { useRef } from "react";

export interface ScreenOverlayProps {}
export const ScreenOverlay = ({
  children,
  className,
}: PropsWithClassName<ScreenOverlayProps>) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={overlayRef}
      className={clsx(
        "absolute top-0 left-0 min-h-screen w-full bg-black/50",
        className
      )}
    >
      {children}
    </div>
  );
};
