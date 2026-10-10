"use client";

import type { Img as ImgT } from "@/lib/types";
import ImageReveal from "./ImageReveal";

/** Editorial gallery: alternates a wide image with pairs of unequal images. */
export default function Gallery({ images, className = "" }: { images: ImgT[]; className?: string }) {
  const rows: ImgT[][] = [];
  let i = 0;
  let wide = true;
  while (i < images.length) {
    if (wide) {
      rows.push([images[i]]);
      i += 1;
    } else {
      rows.push(images.slice(i, i + 2));
      i += 2;
    }
    wide = !wide;
  }
  return (
    <div className={`space-y-8 md:space-y-12 ${className}`}>
      {rows.map((row, r) =>
        row.length === 1 ? (
          <ImageReveal key={r} image={row[0]} className="aspect-[3/2]" sizes="(min-width: 1440px) 1312px, 100vw" />
        ) : (
          <div key={r} className="grid gap-8 md:grid-cols-12 md:gap-8">
            <ImageReveal image={row[0]} className={`aspect-[4/5] ${r % 4 === 1 ? "md:col-span-5" : "md:col-span-7"}`} sizes="(min-width: 768px) 55vw, 100vw" />
            <ImageReveal
              image={row[1]}
              className={`aspect-[4/5] md:mt-24 ${r % 4 === 1 ? "md:col-span-7" : "md:col-span-5"}`}
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
        )
      )}
    </div>
  );
}
