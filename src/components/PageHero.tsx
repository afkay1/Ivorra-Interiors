"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import type { Img as ImgT, L } from "@/lib/types";
import Img from "./Img";
import TextReveal from "./TextReveal";

interface Props {
  image: ImgT;
  label: L;
  title: L;
  text?: L;
  size?: "full" | "tall";
  children?: React.ReactNode;
  as?: "h1" | "h2";
}

/** Full-bleed cinematic hero with a slow image settle and staggered text. */
export default function PageHero({ image, label, title, text, size = "tall", children, as = "h1" }: Props) {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const media = el.querySelector("[data-hero-media]");
    const items = el.querySelectorAll("[data-hero-item]");
    if (prefersReducedMotion()) {
      gsap.set([media, ...Array.from(items)], { opacity: 1, y: 0, scale: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(media, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" });
      gsap.fromTo(items, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.45 });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative flex items-end overflow-hidden bg-walnut text-ivory ${size === "full" ? "min-h-[100svh]" : "min-h-[78svh] md:min-h-[88svh]"}`}
    >
      <div data-hero-media data-reveal className="absolute inset-0">
        <Img image={image} className="h-full w-full" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/35" />
      </div>
      <div className="wrap relative pb-16 pt-40 md:pb-24">
        <div className="max-w-5xl">
          <p data-hero-item className="label flex items-center gap-4 text-ivory/85">
            <span className="rule" aria-hidden />
            {t(label)}
          </p>
          <TextReveal as={as} text={t(title)} immediate delay={0.35} className="display h-hero mt-6" />
          {text && (
            <p data-hero-item className="lead mt-8 max-w-xl text-ivory/85">
              {t(text)}
            </p>
          )}
          {children && (
            <div data-hero-item className="mt-10 flex flex-wrap gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
