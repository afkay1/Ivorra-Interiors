"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/data/site";
import { PROJECTS, getProject } from "@/lib/data/projects";
import { getCollection } from "@/lib/data/collections";
import { l, type Img as ImgT } from "@/lib/types";
import PageHero from "./PageHero";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import Gallery from "./Gallery";
import ImageReveal from "./ImageReveal";
import MaterialGallery from "./MaterialGallery";
import ProjectCard from "./ProjectCard";
import ProjectGrid from "./ProjectGrid";

export function ProjectsIndex() {
  return (
    <section className="bg-ivory">
      <div className="wrap py-24 md:py-36">
        <ProjectGrid projects={PROJECTS} headingLevel="h2" />
      </div>
    </section>
  );
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <Reveal>
    <p data-reveal className="label flex items-center gap-4 text-charcoal">
      <span className="rule" aria-hidden />
      {children}
    </p>
  </Reveal>
);

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const p = getProject(slug)!;
  const others = PROJECTS.filter((x) => x.slug !== slug).slice(0, 2);
  const gallery1 = [p.wide[1], p.rooms[0], p.rooms[1]].filter((x): x is ImgT => Boolean(x));
  const gallery2 = [p.wide[2], p.rooms[2]].filter((x): x is ImgT => Boolean(x));
  const meta = [
    { k: UI.location, v: t(p.location) },
    { k: UI.year, v: p.year },
    { k: UI.type, v: t(p.type) },
    { k: UI.area, v: p.area },
  ];

  return (
    <>
      <PageHero image={p.hero} label={p.type} title={p.name} text={p.location} />

      {/* Meta + story */}
      <section className="bg-ivory">
        <div className="wrap py-20 md:py-32">
          <nav aria-label="Breadcrumb">
            <ol className="label flex flex-wrap gap-2 text-charcoal">
              <li><Link href="/projects" className="hover:text-espresso">{t(UI.allProjects)}</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-espresso">{t(p.name)}</li>
            </ol>
          </nav>
          <dl className="mt-12 grid grid-cols-2 gap-8 border-y border-line py-8 md:grid-cols-4">
            {meta.map((m, i) => (
              <div key={i}>
                <dt className="label text-charcoal">{t(m.k)}</dt>
                <dd className="mt-3 text-lg" dir={m.k === UI.area || m.k === UI.year ? "ltr" : undefined}>{m.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-20 grid gap-10 md:grid-cols-12 md:mt-28">
            <div className="md:col-span-5">
              <Label>{t(l("The project", "المشروع"))}</Label>
              <TextReveal as="p" text={t(p.summary)} className="display h2 mt-6" />
            </div>
            <Reveal className="space-y-6 text-charcoal md:col-span-5 md:col-start-8 md:pt-14">
              {p.story.map((s, i) => (
                <p data-reveal key={i} className="lead">{t(s)}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <Parallax image={p.wide[0]} className="h-[70svh] min-h-[420px] bg-walnut md:h-[92svh]" amount={7} />

      {/* Gallery */}
      <section className="bg-ivory" aria-label={t(UI.gallery)}>
        <div className="wrap py-24 md:py-36">
          <Gallery images={gallery1} />
        </div>
      </section>

      {/* Details */}
      <section className="bg-stone">
        <div className="wrap grid gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-36">
          <div className="md:col-span-4">
            <Label>{t(UI.details)}</Label>
            <Reveal as="dl" className="mt-10">
              {p.facts.map((f, i) => (
                <div data-reveal key={i} className="border-t border-espresso/15 py-6">
                  <dt className="label text-charcoal">{t(f.label)}</dt>
                  <dd className="mt-3">{t(f.value)}</dd>
                </div>
              ))}
            </Reveal>
            <Reveal className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {p.collections.map((s) => {
                const c = getCollection(s);
                return c ? (
                  <Link data-reveal key={s} href={`/collections/${s}`} className="link-arrow">
                    <span>{t(c.name)}</span>
                    <span aria-hidden className="arrow inline-block">→</span>
                  </Link>
                ) : null;
              })}
            </Reveal>
          </div>
          <div className={`grid gap-6 md:col-span-7 md:col-start-6 ${p.details.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
            {p.details.map((d, i) => (
              <ImageReveal
                key={d.src}
                image={d}
                className={p.details.length === 1 ? "aspect-[4/3]" : i === 2 ? "col-span-2 aspect-[2/1]" : i === 1 ? "mt-16 aspect-square" : "aspect-square"}
                sizes="(min-width: 768px) 30vw, 50vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-ivory">
        <div className="wrap grid gap-10 py-24 md:grid-cols-12 md:py-36">
          <div className="md:col-span-4">
            <Label>{t(UI.materials)}</Label>
          </div>
          <div className="md:col-span-8">
            <MaterialGallery materials={p.materials} />
          </div>
        </div>
      </section>

      {/* Additional gallery */}
      {gallery2.length > 0 && (
        <section className="bg-ivory" aria-label={t(UI.gallery)}>
          <div className="wrap pb-24 md:pb-36">
            <Gallery images={gallery2} />
          </div>
        </section>
      )}

      {/* Conclusion */}
      <section className="bg-ivory">
        <div className="wrap border-t border-line py-24 text-center md:py-36">
          <span className="rule mx-auto" aria-hidden />
          <TextReveal as="p" text={t(p.conclusion)} className="display h2 mx-auto mt-10 max-w-4xl" />
        </div>
      </section>

      {/* Related */}
      <section className="bg-stone">
        <div className="wrap py-24 md:py-36">
          <Label>{t(UI.moreProjects)}</Label>
          <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-8">
            {others.map((o, i) => (
              <div key={o.slug} className={i === 1 ? "md:mt-24" : ""}>
                <ProjectCard project={o} ratio="aspect-[4/3]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
