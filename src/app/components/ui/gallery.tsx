"use client";

import { PropsWithClassName } from "@/app/lib/prop-types";
import Image from "next/image";
import { useState } from "react";
import { Carousel } from "./carousel";
import { ScreenOverlay } from "./screen-overlay";
import clsx from "clsx";

export interface GalleryProps {
  images: string[];
}

export const Gallery = ({
  images,
  className,
}: PropsWithClassName<GalleryProps>) => {
  const [currentlyShownImage, setCurrentlyShownImage] = useState<number>(-1);
  return (
    <>
      <div
        className={clsx(
          "grid grid-cols-2 auto-cols-max auto-rows-fr gap-2 sm:flex sm:flex-grow sm:flex-wrap min-w-[64px] min-h-[256px]",
          className
        )}
      >
        {images.map((image, index) => (
          <div
            key={image}
            className="relative sm:flex-1"
            onClick={() => setCurrentlyShownImage(index)}
          >
            <Image
              className="rounded-md object-cover"
              alt="Alt description"
              src={image}
              fill
            />
          </div>
        ))}
      </div>
      {currentlyShownImage !== -1 && (
        <ScreenOverlay className="flex">
          <Carousel
            images={images}
            startingImage={currentlyShownImage}
            hideCarousel={() => setCurrentlyShownImage(-1)}
          />
        </ScreenOverlay>
      )}
    </>
  );
};
