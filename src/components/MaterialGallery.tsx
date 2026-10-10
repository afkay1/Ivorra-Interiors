"use client";

import { useLang } from "@/lib/i18n";
import type { Img as ImgT, L } from "@/lib/types";
import ImageReveal from "./ImageReveal";
import Reveal from "./Reveal";

interface Material {
  name: L;
  text: L;
  image: ImgT;
}

export default function MaterialGallery({ materials }: { materials: Material[] }) {
  const { t } = useLang();
  const cols = materials.length === 1 ? "md:grid-cols-2" : materials.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <ul className={`grid gap-10 ${cols}`}>
      {materials.map((m, i) => (
        <li key={i}>
          <ImageReveal image={m.image} className="aspect-square" sizes="(min-width: 768px) 40vw, 100vw" />
          <Reveal className="mt-6">
            <h3 data-reveal className="display h3">{t(m.name)}</h3>
            <p data-reveal className="mt-2 text-charcoal">{t(m.text)}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
