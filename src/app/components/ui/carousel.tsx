"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export interface CarouselProps {
  images: string[];
  hideCarousel: () => void;
  startingImage: number;
}

export const Carousel = ({
  images,
  startingImage,
  hideCarousel,
}: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(startingImage);

  function goToPreviousImage() {
    setCurrentImage((value) =>
      value - 1 < 0
        ? (value - 1 + images.length) % images.length
        : (value - 1) % images.length
    );
  }

  function goToNextImage() {
    setCurrentImage((value) => (value + 1) % images.length);
  }
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center cursor-zoom-out"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        hideCarousel();
      }}
    >
      <div className="flex flex-col justify-center w-full p-3">
        <div className="relative self-center max-w-lg w-full h-64 cursor-default">
          <Image
            className="rounded-md"
            alt="Alt description"
            src={images[currentImage]}
            fill
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row justify-between w-full p-6 gap-x-6">
            <a
              href="#"
              onClick={() => goToPreviousImage()}
              className="text-4xl self-start h-full flex-1 "
            >
              <BsFillArrowLeftCircleFill />
            </a>

            <a
              onClick={() => goToNextImage()}
              href="#"
              className="text-4xl self-end h-full flex-1 flex items-center justify-end"
            >
              <BsFillArrowRightCircleFill />
            </a>
          </div>
        </div>
        <ul className="flex flex-row self-center gap-x-2 w-fit">
          {images.map((image, index) => (
            <li key={image}>
              <a
                className={clsx(
                  "text-4xl",
                  index === currentImage ? "text-blue-500" : "text-gray-500"
                )}
                onClick={() => setCurrentImage(index)}
                href="#"
              >
                •
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
