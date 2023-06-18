"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function AddToCart({ url }: { url?: string }) {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-row gap-x-3 items-center">
        <p>Units:</p>
        <input
          type="number"
          className="rounded-md w-16 focus:outline-none bg-slate-900 border-white border-2 text-white p-3"
          defaultValue={1}
          min={1}
          max={10}
        />
        {url && (
          <Link href={url} target="_blank" referrerPolicy="no-referrer">
            <Button type="primary">Add To Cart</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
