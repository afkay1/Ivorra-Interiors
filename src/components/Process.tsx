"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { HOME, PROCESS } from "@/lib/data/site";
import SectionIntro from "./SectionIntro";

/** Four-step process; a hairline draws across as each step arrives. */
export default function Process() {
  const { t } = useLang();
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const rtl = document.documentElement.dir === "rtl";
    const ctx = gsap.context(() => {
      el.querySelectorAll<HTMLElement>("li").forEach((li, i) => {
        const line = li.querySelector("[data-line]");
        const body = li.querySelectorAll("[data-step]");
        const tl = gsap.timeline({ scrollTrigger: { trigger: li, start: "top 85%", once: true }, delay: i * 0.08 });
        tl.fromTo(line, { scaleX: 0, transformOrigin: rtl ? "right" : "left" }, { scaleX: 1, duration: 1.2, ease: "power3.inOut" });
        tl.fromTo(body, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }, "-=0.7");
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-stone">
      <div className="wrap py-24 md:py-36">
        <SectionIntro label={HOME.processLabel} title={HOME.processTitle} />
        <ol ref={ref} className="mt-20 grid gap-14 md:grid-cols-4 md:gap-8">
          {PROCESS.map((s, i) => (
            <li key={i}>
              <span data-line className="block h-px w-full bg-espresso/25" aria-hidden />
              <p data-step className="mt-8 font-serif text-[56px] font-light leading-none text-champagne" dir="ltr">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 data-step className="label mt-6">{t(s.title)}</h3>
              <p data-step className="mt-4 text-charcoal">{t(s.text)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
