"use client";

import { useLang } from "@/lib/i18n";
import { BRAND, STUDIO, UI } from "@/lib/data/site";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";

export function Experience() {
  const { t } = useLang();
  return (
    <section className="bg-ivory">
      <div className="wrap py-24 md:py-36">
        <Reveal>
          <p data-reveal className="label flex items-center gap-4 text-charcoal">
            <span className="rule" aria-hidden />
            {t(STUDIO.experienceLabel)}
          </p>
        </Reveal>
        <Reveal as="ol" className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {STUDIO.experience.map((e, i) => (
            <li data-reveal key={i} className="border-t border-line pt-8">
              <span className="font-serif text-5xl font-light text-champagne" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display h3 mt-6">{t(e.title)}</h3>
              <p className="mt-3 text-charcoal">{t(e.text)}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function LocationHours() {
  const { t } = useLang();
  return (
    <section className="bg-stone">
      <div className="wrap grid gap-14 py-24 md:grid-cols-12 md:gap-8 md:py-36">
        <div className="md:col-span-5">
          <Reveal>
            <p data-reveal className="label flex items-center gap-4 text-charcoal">
              <span className="rule" aria-hidden />
              {t(STUDIO.locationLabel)}
            </p>
          </Reveal>
          <TextReveal text={t(STUDIO.locationTitle)} className="display h2 mt-6" />
          <Reveal className="mt-8 space-y-4 text-charcoal">
            <address data-reveal className="not-italic text-espresso">{t(BRAND.address)}</address>
            <p data-reveal>{t(STUDIO.parking)}</p>
            <div data-reveal className="pt-4">
              <a href={BRAND.mapUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                <span>{t(UI.directions)}</span>
                <span aria-hidden className="arrow inline-block">→</span>
              </a>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Reveal>
            <p data-reveal className="label text-charcoal">{t(UI.hoursLabel)}</p>
          </Reveal>
          <Reveal as="dl" className="mt-8">
            {BRAND.hours.map((h, i) => (
              <div data-reveal key={i} className="flex justify-between gap-6 border-t border-espresso/15 py-5">
                <dt>{t(h.days)}</dt>
                <dd className="text-charcoal">{t(h.time)}</dd>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-10 space-y-2 text-charcoal">
            <p data-reveal><a href={BRAND.phoneHref} dir="ltr" className="hover:text-espresso">{BRAND.phone}</a></p>
            <p data-reveal><a href={`mailto:${BRAND.email}`} className="hover:text-espresso">{BRAND.email}</a></p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
