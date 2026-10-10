"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { formatDate } from "@/lib/format";
import { UI } from "@/lib/data/site";
import type { Article } from "@/lib/types";
import ImageReveal from "./ImageReveal";

export default function JournalCard({ article, headingLevel = "h3" }: { article: Article; headingLevel?: "h2" | "h3" }) {
  const { t, lang } = useLang();
  const H = headingLevel;
  return (
    <article className="group">
      <Link href={`/journal/${article.slug}`} className="block">
        <ImageReveal image={article.image} className="aspect-[3/2]" sizes="(min-width: 768px) 33vw, 100vw" zoom />
        <div className="mt-6 flex items-center gap-4 text-charcoal">
          <span className="label text-champagne">{t(article.category)}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date} className="text-sm">{formatDate(article.date, lang)}</time>
        </div>
        <H className="display h3 mt-3 transition-opacity duration-500 group-hover:opacity-70">{t(article.title)}</H>
        <span className="link-arrow mt-6">
          <span>{t(UI.readArticle)}</span>
          <span aria-hidden className="arrow inline-block">→</span>
        </span>
      </Link>
    </article>
  );
}
