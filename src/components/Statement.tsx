"use client";

import { useLang } from "@/lib/i18n";
import type { L } from "@/lib/types";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";

/** A single large editorial statement with generous whitespace. */
export default function Statement({ label, title, text }: { label: L; title: L; text?: L }) {
  const { t } = useLang();
  return (
    <section className="bg-ivory">
      <div className="wrap py-28 text-center md:py-44">
        <Reveal>
          <p data-reveal className="label text-charcoal">{t(label)}</p>
        </Reveal>
        <TextReveal text={t(title)} className="display h1 mx-auto mt-8 max-w-5xl" />
        {text && (
          <Reveal className="mx-auto mt-10 max-w-xl">
            <p data-reveal className="lead text-charcoal">{t(text)}</p>
          </Reveal>
        )}
        <span className="rule mx-auto mt-14" aria-hidden />
      </div>
    </section>
  );
}
