"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { formatDate } from "@/lib/format";
import { UI } from "@/lib/data/site";
import { ARTICLES, getArticle } from "@/lib/data/articles";
import { l } from "@/lib/types";
import Img from "./Img";
import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import JournalCard from "./JournalCard";
import PageHero from "./PageHero";

export function JournalIndex() {
  const { t, lang } = useLang();
  const [featured, ...rest] = ARTICLES;
  return (
    <>
      <PageHero
        image={featured.image}
        label={l("Journal · Featured", "المجلة · مقال مختار")}
        title={featured.title}
        text={featured.excerpt}
      >
        <Link href={`/journal/${featured.slug}`} className="btn btn-light">{t(UI.readArticle)}</Link>
        <span className="label self-center text-ivory/75">
          {t(featured.category)} · <time dateTime={featured.date}>{formatDate(featured.date, lang)}</time>
        </span>
      </PageHero>
      <section className="bg-ivory">
        <div className="wrap py-24 md:py-36">
          <Reveal>
            <p data-reveal className="label flex items-center gap-4 text-charcoal">
              <span className="rule" aria-hidden />
              {t(UI.allArticles)}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <div key={a.slug} className={i % 3 === 1 ? "lg:mt-24" : ""}>
                <JournalCard article={a} headingLevel="h2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ArticleView({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const a = getArticle(slug)!;
  const related = ARTICLES.filter((x) => x.slug !== slug).slice(0, 3);
  const [intro, ...sections] = a.sections;

  return (
    <article>
      <header className="bg-ivory pt-[calc(var(--header)+64px)] md:pt-[calc(var(--header)+96px)]">
        <div className="wrap">
          <nav aria-label="Breadcrumb">
            <ol className="label flex flex-wrap gap-2 text-charcoal">
              <li><Link href="/journal" className="hover:text-espresso">{t(l("Journal", "المجلة"))}</Link></li>
              <li aria-hidden>/</li>
              <li className="text-champagne">{t(a.category)}</li>
            </ol>
          </nav>
          <TextReveal as="h1" text={t(a.title)} immediate className="display h1 mt-8 max-w-5xl" />
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-charcoal">
            <time dateTime={a.date}>{formatDate(a.date, lang)}</time>
            <span aria-hidden>·</span>
            <span>
              <span dir="ltr">{a.readTime}</span> {t(UI.minRead)}
            </span>
          </p>
        </div>
        <div className="wrap mt-14">
          <Img image={a.image} className="aspect-[4/3] md:aspect-[21/10]" priority sizes="(min-width: 1440px) 1312px, 100vw" />
        </div>
      </header>

      <div className="bg-ivory">
        <div className="wrap py-20 md:py-28">
          <div className="mx-auto max-w-[44rem]">
            <p className="display h3 text-espresso">{t(a.excerpt)}</p>
            <div className="mt-10 space-y-6 text-[18px] leading-[1.85] text-charcoal">
              {intro.paragraphs.map((p, i) => (
                <p key={i}>{t(p)}</p>
              ))}
            </div>
          </div>
          {sections.map((s, i) => (
            <section key={i} className="mt-16 md:mt-24">
              <div className="mx-auto max-w-[44rem]">
                {s.heading && <h2 className="display h2">{t(s.heading)}</h2>}
                <div className="mt-6 space-y-6 text-[18px] leading-[1.85] text-charcoal">
                  {s.paragraphs.map((p, k) => (
                    <p key={k}>{t(p)}</p>
                  ))}
                </div>
              </div>
              {s.image && (
                <figure className="mx-auto mt-14 max-w-5xl">
                  <ImageReveal image={s.image} className="aspect-[3/2]" sizes="(min-width: 1024px) 1024px, 100vw" />
                  <figcaption className="mt-4 text-sm text-charcoal">{t(s.image.alt)}</figcaption>
                </figure>
              )}
            </section>
          ))}
          <div className="mx-auto mt-20 max-w-[44rem] border-t border-line pt-8">
            <Link href="/journal" className="link-arrow">
              <span>{t(UI.allArticles)}</span>
              <span aria-hidden className="arrow inline-block">→</span>
            </Link>
          </div>
        </div>
      </div>

      <aside className="bg-stone" aria-label={t(UI.relatedArticles)}>
        <div className="wrap py-24 md:py-36">
          <Reveal>
            <p data-reveal className="label flex items-center gap-4 text-charcoal">
              <span className="rule" aria-hidden />
              {t(UI.relatedArticles)}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-3 md:gap-8">
            {related.map((r) => (
              <JournalCard key={r.slug} article={r} />
            ))}
          </div>
        </div>
      </aside>
    </article>
  );
}
