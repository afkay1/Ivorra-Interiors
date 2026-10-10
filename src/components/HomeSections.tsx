"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { HOME, UI } from "@/lib/data/site";
import { COLLECTIONS, getCollection } from "@/lib/data/collections";
import { PROJECTS, getProject } from "@/lib/data/projects";
import { ARTICLES } from "@/lib/data/articles";
import { l } from "@/lib/types";
import { img } from "@/lib/data/img";
import PageHero from "./PageHero";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import ImageReveal from "./ImageReveal";
import Parallax from "./Parallax";
import SectionIntro from "./SectionIntro";
import LinkArrow from "./LinkArrow";
import ProjectGrid from "./ProjectGrid";
import JournalCard from "./JournalCard";

export function HomeHero() {
  const { t } = useLang();
  return (
    <PageHero
      size="full"
      image={img("home-hero", l("Double-height living room with walnut joinery and travertine floor", "غرفة معيشة بارتفاع مزدوج مع نجارة من الجوز وأرضية ترافرتين"))}
      label={HOME.heroLabel}
      title={HOME.heroTitle}
      text={HOME.heroText}
    >
      <Link href="/collections" className="btn btn-light">{t(UI.exploreCollections)}</Link>
      <Link href="/consultation" className="btn btn-ghost-light">{t(UI.bookConsultation)}</Link>
    </PageHero>
  );
}

export function Philosophy() {
  const { t } = useLang();
  return (
    <section className="bg-ivory">
      <div className="wrap py-28 md:py-44">
        <div className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p data-reveal className="label flex items-center gap-4 text-charcoal">
              <span className="rule" aria-hidden />
              {t(HOME.philosophyLabel)}
            </p>
          </Reveal>
          <div className="md:col-span-8 md:col-start-5">
            <TextReveal text={t(HOME.philosophyTitle)} className="display h1" />
            <Reveal className="mt-10 max-w-xl">
              <p data-reveal className="lead text-charcoal">{t(HOME.philosophyText)}</p>
              <div data-reveal className="mt-10">
                <LinkArrow href="/about">{t(l("Our story", "قصتنا"))}</LinkArrow>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SignatureCollections() {
  const { t } = useLang();
  const [a, b, c] = COLLECTIONS;
  const block = (col: typeof a, ratio: string, sizes: string) => (
    <Link href={`/collections/${col.slug}`} className="group block">
      <ImageReveal image={col.hero} className={ratio} sizes={sizes} zoom />
      <div className="mt-6 flex items-baseline justify-between gap-6">
        <div>
          <p className="label text-champagne" dir="ltr">{col.number}</p>
          <h3 className="display h3 mt-2">{t(col.name)}</h3>
          <p className="mt-1 text-charcoal">{t(col.category)}</p>
        </div>
        <span className="link-arrow shrink-0">
          <span>{t(UI.explore)}</span>
          <span aria-hidden className="arrow inline-block">→</span>
        </span>
      </div>
      <p className="mt-4 max-w-md text-charcoal">{t(col.tagline)}</p>
    </Link>
  );
  return (
    <section className="bg-ivory pb-28 md:pb-44">
      <div className="wrap">
        <SectionIntro label={HOME.collectionsLabel} title={HOME.collectionsTitle} link={{ href: "/collections", label: UI.allCollections }} />
        <div className="mt-20 grid gap-x-8 gap-y-20 md:grid-cols-12">
          <div className="md:col-span-5">{block(a, "aspect-[4/5]", "(min-width: 768px) 42vw, 100vw")}</div>
          <div className="md:col-span-6 md:col-start-7 md:mt-48">{block(b, "aspect-[3/2]", "(min-width: 768px) 50vw, 100vw")}</div>
          <div className="md:col-span-7 md:col-start-3">{block(c, "aspect-[3/2]", "(min-width: 768px) 58vw, 100vw")}</div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedCollection() {
  const { t } = useLang();
  const col = getCollection("cucina")!;
  return (
    <section aria-label={t(col.name)}>
      <Parallax image={col.environment[0]} className="h-[92svh] min-h-[560px] bg-walnut" amount={8}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="wrap absolute inset-x-0 bottom-0 pb-16 text-ivory md:pb-24">
          <Reveal className="max-w-2xl">
            <p data-reveal className="label flex items-center gap-4 text-ivory/80">
              <span className="rule" aria-hidden />
              {t(HOME.featuredLabel)}
            </p>
            <h2 data-reveal className="display h1 mt-6">{t(col.name)}</h2>
            <p data-reveal className="lead mt-6 text-ivory/85">{t(col.intro)}</p>
            <div data-reveal className="mt-10">
              <LinkArrow href={`/collections/${col.slug}`} className="text-ivory">{t(UI.exploreCollection)}</LinkArrow>
            </div>
          </Reveal>
        </div>
      </Parallax>
    </section>
  );
}

export function Craftsmanship() {
  const { t } = useLang();
  return (
    <section className="bg-ivory">
      <div className="wrap grid gap-12 py-28 md:grid-cols-12 md:gap-8 md:py-44">
        <div className="relative md:col-span-6">
          <ImageReveal
            image={img("home-craft-material", l("Travertine, walnut and a brass profile on a stone bench", "ترافرتين وجوز وقطعة نحاسية على طاولة حجرية"))}
            className="aspect-[4/5]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <ImageReveal
            image={img("home-craft-workshop", l("Joinery workbench with hand tools and a dovetailed walnut drawer", "طاولة نجارة مع أدوات يدوية ودرج جوز معشّق"))}
            className="-mt-24 ms-auto aspect-[3/2] w-3/5 border-[10px] border-ivory md:-me-16"
            sizes="(min-width: 768px) 30vw, 60vw"
          />
        </div>
        <div className="md:col-span-5 md:col-start-8 md:pt-24">
          <Reveal>
            <p data-reveal className="label flex items-center gap-4 text-charcoal">
              <span className="rule" aria-hidden />
              {t(HOME.craftLabel)}
            </p>
          </Reveal>
          <TextReveal text={t(HOME.craftTitle)} className="display h2 mt-6" />
          <Reveal className="mt-8">
            <p data-reveal className="text-charcoal">{t(HOME.craftText)}</p>
          </Reveal>
          <Reveal as="ul" className="mt-14 border-t border-line">
            {HOME.principles.map((p, i) => (
              <li data-reveal key={i} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-6">
                <span className="font-serif text-xl text-champagne" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="label">{t(p.title)}</h3>
                  <p className="mt-2 text-charcoal">{t(p.text)}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProject() {
  const { t } = useLang();
  const p = getProject("palm-residence")!;
  return (
    <section className="bg-stone">
      <div className="wrap py-28 md:py-44">
        <Reveal>
          <p data-reveal className="label flex items-center gap-4 text-charcoal">
            <span className="rule" aria-hidden />
            {t(HOME.featuredProjectLabel)}
          </p>
        </Reveal>
        <Link href={`/projects/${p.slug}`} className="group mt-10 block">
          <ImageReveal image={p.hero} className="aspect-[4/3] md:aspect-[21/10]" sizes="(min-width: 1440px) 1312px, 100vw" zoom />
        </Link>
        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <TextReveal text={t(p.name)} className="display h1" />
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-espresso/15 pt-6 text-sm">
              <div>
                <dt className="label text-charcoal">{t(UI.location)}</dt>
                <dd className="mt-2">{t(p.location)}</dd>
              </div>
              <div>
                <dt className="label text-charcoal">{t(UI.type)}</dt>
                <dd className="mt-2">{t(p.type)}</dd>
              </div>
            </dl>
            <Reveal className="mt-8">
              <p data-reveal className="text-charcoal">{t(p.summary)}</p>
              <div data-reveal className="mt-10">
                <LinkArrow href={`/projects/${p.slug}`}>{t(UI.viewProject)}</LinkArrow>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-6 md:col-span-6 md:col-start-7">
            <ImageReveal image={p.details[0]} className="aspect-square" sizes="(min-width: 768px) 25vw, 50vw" />
            <ImageReveal image={p.rooms[1]} className="mt-16 aspect-[4/5]" sizes="(min-width: 768px) 25vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsShowcase() {
  return (
    <section className="bg-ivory">
      <div className="wrap py-28 md:py-44">
        <SectionIntro label={HOME.projectsLabel} title={HOME.projectsTitle} link={{ href: "/projects", label: UI.allProjects }} />
        <div className="mt-20">
          <ProjectGrid projects={PROJECTS} />
        </div>
      </div>
    </section>
  );
}

export function StudioTeaser() {
  const { t } = useLang();
  return (
    <section className="bg-ivory">
      <div className="wrap grid gap-12 py-28 md:grid-cols-12 md:gap-8 md:py-44">
        <div className="md:col-span-4 md:pt-10">
          <Reveal>
            <p data-reveal className="label flex items-center gap-4 text-charcoal">
              <span className="rule" aria-hidden />
              {t(HOME.studioLabel)}
            </p>
          </Reveal>
          <TextReveal text={t(HOME.studioTitle)} className="display h2 mt-6" />
          <Reveal className="mt-8">
            <p data-reveal className="text-charcoal">{t(HOME.studioText)}</p>
            <ul data-reveal className="mt-8 space-y-3">
              {HOME.studioPoints.map((s, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="h-px w-5 bg-champagne" aria-hidden />
                  {t(s)}
                </li>
              ))}
            </ul>
            <div data-reveal className="mt-12">
              <LinkArrow href="/studio">{t(UI.visitStudio)}</LinkArrow>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-12 gap-6 md:col-span-7 md:col-start-6">
          <ImageReveal
            image={img("studio-exterior", l("Ivorra showroom in pale limestone at dusk", "معرض إيفورا من الحجر الجيري الفاتح عند الغروب"))}
            className="col-span-12 aspect-[3/2]"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
          <ImageReveal
            image={img("studio-showroom-main", l("Showroom hall with full-scale kitchen, wardrobe and bath settings", "قاعة المعرض مع إعدادات مطبخ وخزانة وحمام بالحجم الحقيقي"))}
            className="col-span-7 aspect-[4/3]"
            sizes="(min-width: 768px) 34vw, 58vw"
          />
          <ImageReveal
            image={img("studio-materials-display", l("Wall of framed stone, wood and metal samples", "جدار من عينات الحجر والخشب والمعدن المؤطرة"))}
            className="col-span-5 mt-16 aspect-square"
            sizes="(min-width: 768px) 24vw, 42vw"
          />
        </div>
      </div>
    </section>
  );
}

export function JournalTeaser() {
  return (
    <section className="bg-ivory">
      <div className="wrap border-t border-line py-28 md:py-44">
        <SectionIntro label={HOME.journalLabel} title={HOME.journalTitle} link={{ href: "/journal", label: UI.allArticles }} />
        <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-8">
          {ARTICLES.slice(1, 4).map((a, i) => (
            <div key={a.slug} className={i === 1 ? "md:mt-24" : ""}>
              <JournalCard article={a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
