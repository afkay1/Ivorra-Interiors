"use client";

import { useLang } from "@/lib/i18n";
import { HOME } from "@/lib/data/site";
import { TESTIMONIAL } from "@/lib/data/testimonials";
import ImageReveal from "./ImageReveal";
import Reveal from "./Reveal";

export default function Testimonial() {
  const { t } = useLang();
  const q = TESTIMONIAL;
  return (
    <section className="bg-ivory">
      <div className="wrap grid items-center gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-36">
        <div className="md:col-span-4">
          <ImageReveal image={q.image} className="aspect-[4/5]" sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
        <Reveal as="div" className="md:col-span-7 md:col-start-6">
          <p data-reveal className="label flex items-center gap-4 text-charcoal">
            <span className="rule" aria-hidden />
            {t(HOME.testimonialLabel)}
          </p>
          <blockquote data-reveal className="mt-10">
            <p className="display h2 text-espresso">
              <span aria-hidden className="text-champagne">“</span>
              {t(q.quote)}
              <span aria-hidden className="text-champagne">”</span>
            </p>
            <footer className="mt-10 border-t border-line pt-6">
              <cite className="not-italic">
                <span className="block font-medium">{t(q.name)}</span>
                <span className="mt-1 block text-charcoal">
                  {t(q.project)}, {t(q.location)}
                </span>
              </cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
