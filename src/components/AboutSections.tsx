"use client";

import { useLang } from "@/lib/i18n";
import { ABOUT, UI } from "@/lib/data/site";
import { l } from "@/lib/types";
import { img } from "@/lib/data/img";
import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import LinkArrow from "./LinkArrow";

export function Team() {
  const { t } = useLang();
  return (
    <section className="bg-ivory">
      <div className="wrap py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <p data-reveal className="label flex items-center gap-4 text-charcoal">
                <span className="rule" aria-hidden />
                {t(ABOUT.teamLabel)}
              </p>
            </Reveal>
            <TextReveal text={t(ABOUT.teamTitle)} className="display h2 mt-6" />
            <Reveal className="mt-8">
              <p data-reveal className="text-charcoal">{t(ABOUT.teamText)}</p>
            </Reveal>
          </div>
          <Reveal as="dl" className="grid grid-cols-3 gap-6 self-end md:col-span-6 md:col-start-7">
            {ABOUT.stats.map((s, i) => (
              <div data-reveal key={i} className="border-t border-line pt-6">
                <dt className="sr-only">{t(s.label)}</dt>
                <dd>
                  <span className="block font-serif text-5xl font-light md:text-6xl" dir="ltr">{s.value}</span>
                  <span className="mt-3 block text-sm text-charcoal">{t(s.label)}</span>
                </dd>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-12">
          <ImageReveal
            image={img("about-team-atmosphere", l("Long walnut meeting table with sketches and a laptop", "طاولة اجتماعات طويلة من الجوز مع رسومات وحاسوب محمول"))}
            className="aspect-[3/2] md:col-span-7"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
          <ImageReveal
            image={img("about-workspace", l("Designer desk with plans, samples and a brass lamp", "مكتب مصمم مع مخططات وعينات ومصباح نحاسي"))}
            className="aspect-[4/5] md:col-span-4 md:col-start-9 md:mt-32"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

export function AboutStudio() {
  const { t } = useLang();
  return (
    <section aria-label={t(ABOUT.studioLabel)}>
      <Parallax
        image={img("about-closing", l("Stone gallery space opening onto a lit courtyard at dusk", "مساحة عرض حجرية تنفتح على فناء مضاء عند الغروب"))}
        className="h-[85svh] min-h-[520px] bg-walnut"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="wrap absolute inset-x-0 bottom-0 pb-16 text-ivory md:pb-24">
          <Reveal className="max-w-2xl">
            <p data-reveal className="label flex items-center gap-4 text-ivory/80">
              <span className="rule" aria-hidden />
              {t(ABOUT.studioLabel)}
            </p>
            <h2 data-reveal className="display h1 mt-6">{t(ABOUT.studioTitle)}</h2>
            <div data-reveal className="mt-10">
              <LinkArrow href="/studio" className="text-ivory">{t(UI.visitStudio)}</LinkArrow>
            </div>
          </Reveal>
        </div>
      </Parallax>
    </section>
  );
}
