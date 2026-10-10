"use client";

import { useLang } from "@/lib/i18n";
import type { Img as ImgT, L } from "@/lib/types";
import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";

interface Props {
  image: ImgT;
  label: L;
  title: L;
  text?: L | L[];
  reverse?: boolean;
  ratio?: string;
  children?: React.ReactNode;
  tone?: "ivory" | "stone";
}

/** Asymmetric 7/5 image and text composition. */
export default function EditorialSplit({ image, label, title, text, reverse = false, ratio = "aspect-[4/5] md:aspect-[3/2]", children, tone = "ivory" }: Props) {
  const { t } = useLang();
  const paragraphs = text ? (Array.isArray(text) ? text : [text]) : [];
  return (
    <section className={tone === "stone" ? "bg-stone" : "bg-ivory"}>
      <div className="wrap grid items-center gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-36">
        <div className={`md:col-span-7 ${reverse ? "md:order-2 md:col-start-6" : ""}`}>
          <ImageReveal image={image} className={ratio} sizes="(min-width: 768px) 58vw, 100vw" />
        </div>
        <div className={`md:col-span-4 ${reverse ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}>
          <Reveal>
            <p data-reveal className="label flex items-center gap-4 text-charcoal">
              <span className="rule" aria-hidden />
              {t(label)}
            </p>
          </Reveal>
          <TextReveal text={t(title)} className="display h2 mt-6" />
          <Reveal className="mt-8 space-y-5 text-charcoal">
            {paragraphs.map((p, i) => (
              <p data-reveal key={i}>{t(p)}</p>
            ))}
            {children && <div data-reveal className="pt-4">{children}</div>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
