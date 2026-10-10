"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/data/site";
import { COLLECTIONS, getCollection } from "@/lib/data/collections";
import { getProject } from "@/lib/data/projects";
import { l, type Collection, type Project } from "@/lib/types";
import PageHero from "./PageHero";
import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import LinkArrow from "./LinkArrow";
import EditorialSplit from "./EditorialSplit";
import MaterialGallery from "./MaterialGallery";
import ProjectCard from "./ProjectCard";

const label = (c: Collection) => l(`Collection ${c.number} · ${c.category.en}`, `المجموعة ${c.number} · ${c.category.ar}`);

/* ---------- /collections ---------- */
export function CollectionsList() {
  const { t } = useLang();
  return (
    <div className="bg-ivory">
      {COLLECTIONS.map((c, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={c.slug} className={`wrap py-24 md:py-36 ${i > 0 ? "border-t border-line" : ""}`} aria-labelledby={`col-${c.slug}`}>
            <div className="grid gap-12 md:grid-cols-12 md:gap-8">
              <Link href={`/collections/${c.slug}`} className={`group block md:col-span-8 ${flip ? "md:order-2 md:col-start-5" : ""}`}>
                <ImageReveal image={c.hero} className="aspect-[4/3] md:aspect-[16/10]" sizes="(min-width: 768px) 66vw, 100vw" zoom />
              </Link>
              <div className={`flex flex-col justify-end md:col-span-4 ${flip ? "md:order-1 md:col-start-1" : ""}`}>
                <Reveal>
                  <p data-reveal className="font-serif text-7xl font-light text-champagne" dir="ltr">{c.number}</p>
                  <p data-reveal className="label mt-6 text-charcoal">{t(c.category)}</p>
                  <h2 data-reveal id={`col-${c.slug}`} className="display h1 mt-3">{t(c.name)}</h2>
                  <p data-reveal className="mt-6 text-charcoal">{t(c.intro)}</p>
                  <div data-reveal className="mt-10">
                    <LinkArrow href={`/collections/${c.slug}`}>{t(UI.exploreCollection)}</LinkArrow>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 md:mt-12 md:grid-cols-12 md:gap-8">
              <ImageReveal
                image={c.environment[1]}
                className={`aspect-[4/5] md:aspect-[3/2] md:col-span-5 ${flip ? "md:col-start-8" : "md:col-start-4"}`}
                sizes="(min-width: 768px) 40vw, 50vw"
              />
              <ImageReveal
                image={c.details[0]}
                className={`aspect-[4/5] md:aspect-square md:col-span-3 md:mt-20 ${flip ? "md:col-start-4 md:row-start-1" : ""}`}
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}

/* ---------- /collections/[slug] ---------- */
export function CollectionDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const c = getCollection(slug)!;
  const idx = COLLECTIONS.findIndex((x) => x.slug === slug);
  const next = COLLECTIONS[(idx + 1) % COLLECTIONS.length];
  const related = c.relatedProjects.map(getProject).filter((p): p is Project => Boolean(p));

  return (
    <>
      <PageHero image={c.hero} label={label(c)} title={c.name} text={c.tagline} />

      {/* Introduction */}
      <section className="bg-ivory">
        <div className="wrap grid gap-10 py-24 md:grid-cols-12 md:py-36">
          <nav aria-label="Breadcrumb" className="md:col-span-3">
            <ol className="label flex flex-wrap gap-2 text-charcoal">
              <li><Link href="/collections" className="hover:text-espresso">{t(UI.allCollections)}</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-espresso">{t(c.name)}</li>
            </ol>
          </nav>
          <div className="md:col-span-8 md:col-start-5">
            <TextReveal as="p" text={t(c.intro)} className="display h2" />
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <Parallax image={c.environment[0]} className="h-[70svh] min-h-[420px] bg-walnut md:h-[92svh]" amount={7} />

      {/* Design philosophy */}
      <section className="bg-ivory">
        <div className="wrap grid gap-10 py-24 md:grid-cols-12 md:py-36">
          <Reveal className="md:col-span-3">
            <p data-reveal className="label flex items-center gap-4 text-charcoal">
              <span className="rule" aria-hidden />
              {t(l("Design philosophy", "فلسفة التصميم"))}
            </p>
          </Reveal>
          <div className="md:col-span-7 md:col-start-5">
            <TextReveal text={t(c.philosophyTitle)} className="display h2" />
            <Reveal className="mt-8 max-w-xl">
              <p data-reveal className="lead text-charcoal">{t(c.philosophy)}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Detail gallery */}
      <section className="bg-ivory pb-24 md:pb-36" aria-label={t(UI.details)}>
        <div className="wrap grid grid-cols-2 gap-6 md:grid-cols-12 md:gap-8">
          <ImageReveal image={c.details[0]} className="col-span-2 aspect-square md:col-span-5" sizes="(min-width: 768px) 42vw, 100vw" />
          <ImageReveal image={c.details[1]} className="aspect-[4/5] md:col-span-3 md:mt-32" sizes="(min-width: 768px) 25vw, 50vw" />
          <ImageReveal image={c.details[2]} className="aspect-[4/5] md:col-span-4 md:mt-12" sizes="(min-width: 768px) 33vw, 50vw" />
        </div>
      </section>

      {/* Materials */}
      <section className="bg-stone">
        <div className="wrap py-24 md:py-36">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p data-reveal className="label flex items-center gap-4 text-charcoal">
                <span className="rule" aria-hidden />
                {t(UI.materials)}
              </p>
            </Reveal>
            <div className="md:col-span-8">
              <MaterialGallery materials={c.materials} />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-ivory">
        <div className="wrap py-24 md:py-36">
          <Reveal>
            <p data-reveal className="label flex items-center gap-4 text-charcoal">
              <span className="rule" aria-hidden />
              {t(l("Features", "المزايا"))}
            </p>
          </Reveal>
          <Reveal as="ul" className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {c.features.map((f, i) => (
              <li data-reveal key={i} className="border-t border-line pt-6">
                <span className="font-serif text-2xl text-champagne" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display h3 mt-4">{t(f.title)}</h3>
                <p className="mt-3 text-charcoal">{t(f.text)}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Application */}
      <EditorialSplit reverse tone="stone" image={c.environment[1]} label={l("Application", "الاستخدام")} title={c.tagline} text={c.application}>
        <LinkArrow href="/consultation">{t(UI.bookConsultation)}</LinkArrow>
      </EditorialSplit>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-ivory">
          <div className="wrap py-24 md:py-36">
            <Reveal>
              <p data-reveal className="label flex items-center gap-4 text-charcoal">
                <span className="rule" aria-hidden />
                {t(UI.relatedProjects)}
              </p>
            </Reveal>
            <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-8">
              {related.map((p, i) => (
                <div key={p.slug} className={i === 1 ? "md:mt-24" : ""}>
                  <ProjectCard project={p} ratio="aspect-[4/3]" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next collection */}
      <Link href={`/collections/${next.slug}`} className="group block border-t border-line bg-ivory">
        <div className="wrap flex items-center justify-between gap-8 py-16 md:py-24">
          <div>
            <p className="label text-charcoal">{t(l("Next collection", "المجموعة التالية"))}</p>
            <p className="display h1 mt-4 transition-transform duration-700 ease-lux group-hover:translate-x-3 rtl:group-hover:-translate-x-3">
              {t(next.name)} <span className="text-charcoal/60">· {t(next.category)}</span>
            </p>
          </div>
          <span aria-hidden className="display h2 text-champagne rtl:-scale-x-100">→</span>
        </div>
      </Link>
    </>
  );
}
