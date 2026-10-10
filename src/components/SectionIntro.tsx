"use client";

import { useLang } from "@/lib/i18n";
import type { L } from "@/lib/types";
import TextReveal from "./TextReveal";
import LinkArrow from "./LinkArrow";
import Reveal from "./Reveal";

interface Props {
  label: L;
  title: L;
  text?: L;
  link?: { href: string; label: L };
  tone?: "dark" | "light";
  className?: string;
}

/** Label, editorial headline and optional supporting text and link. */
export default function SectionIntro({ label, title, text, link, tone = "dark", className = "" }: Props) {
  const { t } = useLang();
  const muted = tone === "dark" ? "text-charcoal" : "text-ivory/70";
  return (
    <div className={`grid gap-8 md:grid-cols-12 md:items-end ${className}`}>
      <div className="md:col-span-7">
        <Reveal>
          <p data-reveal className={`label flex items-center gap-4 ${muted}`}>
            <span className="rule" aria-hidden />
            {t(label)}
          </p>
        </Reveal>
        <TextReveal text={t(title)} className="display h2 mt-6" />
      </div>
      {(text || link) && (
        <Reveal className="flex flex-col items-start gap-8 md:col-span-4 md:col-start-9">
          {text && <p data-reveal className={muted}>{t(text)}</p>}
          {link && (
            <div data-reveal>
              <LinkArrow href={link.href}>{t(link.label)}</LinkArrow>
            </div>
          )}
        </Reveal>
      )}
    </div>
  );
}
