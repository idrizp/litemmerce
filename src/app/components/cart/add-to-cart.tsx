"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function AddToCart({ url }: { url?: string }) {
  return (
    <div className="flex flex-col">
      {url && (
        <Link href={url} target="_blank" referrerPolicy="no-referrer">
          <Button type="primary">Purchase</Button>
        </Link>
      )}
    </div>
  );
}
