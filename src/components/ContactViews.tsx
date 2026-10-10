"use client";

import { useLang } from "@/lib/i18n";
import { BRAND, CONTACT, CONSULT, UI } from "@/lib/data/site";
import { l } from "@/lib/types";
import { img } from "@/lib/data/img";
import { ContactForm, ConsultationForm } from "./Forms";
import Img from "./Img";
import ImageReveal from "./ImageReveal";
import TextReveal from "./TextReveal";
import Reveal from "./Reveal";
import LinkArrow from "./LinkArrow";

export function ContactBody() {
  const { t } = useLang();
  const rows = [
    { k: UI.visit, v: <span>{t(BRAND.address)}</span> },
    { k: UI.write, v: <a href={`mailto:${BRAND.email}`} className="hover:text-champagne">{BRAND.email}</a> },
    { k: UI.call, v: <a href={BRAND.phoneHref} dir="ltr" className="hover:text-champagne">{BRAND.phone}</a> },
    {
      k: UI.whatsapp,
      v: (
        <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" dir="ltr" className="hover:text-champagne">
          {BRAND.whatsapp}
        </a>
      ),
    },
  ];
  return (
    <>
      <section className="bg-ivory">
        <div className="wrap grid gap-16 py-24 md:grid-cols-12 md:gap-8 md:py-36">
          <div className="md:col-span-4">
            <Reveal>
              <p data-reveal className="label flex items-center gap-4 text-charcoal">
                <span className="rule" aria-hidden />
                {t(UI.studioLabel)}
              </p>
            </Reveal>
            <Reveal as="dl" className="mt-10">
              {rows.map((r, i) => (
                <div data-reveal key={i} className="border-t border-line py-6">
                  <dt className="label text-charcoal">{t(r.k)}</dt>
                  <dd className="mt-3 text-lg">{r.v}</dd>
                </div>
              ))}
              <div data-reveal className="border-t border-line py-6">
                <dt className="label text-charcoal">{t(UI.hoursLabel)}</dt>
                <dd className="mt-3 space-y-1">
                  {BRAND.hours.map((h, i) => (
                    <p key={i} className="flex justify-between gap-4">
                      <span>{t(h.days)}</span>
                      <span className="text-charcoal">{t(h.time)}</span>
                    </p>
                  ))}
                </dd>
              </div>
            </Reveal>
            <div className="mt-6">
              <a href={BRAND.mapUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                <span>{t(UI.directions)}</span>
                <span aria-hidden className="arrow inline-block">→</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <TextReveal text={t(CONTACT.formTitle)} className="display h2" />
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-stone">
        <div className="wrap grid items-center gap-12 py-24 md:grid-cols-12 md:gap-8 md:py-36">
          <div className="md:col-span-5">
            <ImageReveal
              image={img("contact-studio-atmosphere", l("Walnut console with a brass lamp and plant against sunlit plaster", "طاولة جوز مع مصباح نحاسي ونبتة أمام جدار جصي مشمس"))}
              className="aspect-[4/5]"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <TextReveal text={t(CONTACT.consultTitle)} className="display h2" />
            <Reveal className="mt-6">
              <p data-reveal className="text-charcoal">{t(CONTACT.consultText)}</p>
              <div data-reveal className="mt-10">
                <LinkArrow href="/consultation" label={UI.bookConsultation} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export function ConsultationBody() {
  const { t } = useLang();
  return (
    <section className="bg-ivory pt-[var(--header)]">
      <div className="grid lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="lg:sticky lg:top-[var(--header)] lg:h-[calc(100svh-var(--header))]">
            <Img
              image={img("consultation-side", l("Two cream armchairs around a travertine table with material samples", "كرسيان بلون الكريم حول طاولة ترافرتين مع عينات مواد"))}
              className="aspect-[4/3] h-full w-full lg:aspect-auto"
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
        <div className="px-[var(--pad)] py-16 md:py-24 lg:col-span-7 lg:px-16 xl:px-24">
          <p className="label flex items-center gap-4 text-charcoal">
            <span className="rule" aria-hidden />
            {t(CONSULT.label)}
          </p>
          <TextReveal as="h1" text={t(CONSULT.title)} immediate className="display h1 mt-6" />
          <p className="lead mt-8 max-w-xl text-charcoal">{t(CONSULT.text)}</p>
          <ol className="mt-12 grid gap-6 border-y border-line py-8 sm:grid-cols-3">
            {CONSULT.steps.map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-serif text-2xl text-champagne" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                <span className="pt-1 text-sm">{t(s)}</span>
              </li>
            ))}
          </ol>
          <div className="mt-14">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
