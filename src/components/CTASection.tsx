"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { HOME, UI } from "@/lib/data/site";
import type { L } from "@/lib/types";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";

export default function CTASection({ title = HOME.ctaTitle, text = HOME.ctaText }: { title?: L; text?: L }) {
  const { t } = useLang();
  return (
    <section className="bg-walnut text-ivory">
      <div className="wrap py-28 text-center md:py-40">
        <span className="rule mx-auto" aria-hidden />
        <TextReveal text={t(title)} className="display h1 mx-auto mt-10 max-w-4xl" />
        <Reveal className="mx-auto mt-8 max-w-xl">
          <p data-reveal className="text-ivory/70">{t(text)}</p>
          <div data-reveal className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/consultation" className="btn btn-light">{t(UI.bookConsultation)}</Link>
            <Link href="/contact" className="btn btn-ghost-light">{t(UI.contactStudio)}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
