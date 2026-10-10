import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EditorialSplit from "@/components/EditorialSplit";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import LinkArrow from "@/components/LinkArrow";
import { Experience, LocationHours } from "@/components/StudioSections";
import { STUDIO, UI } from "@/lib/data/site";
import { l } from "@/lib/types";
import { img } from "@/lib/data/img";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Studio & Showroom",
  description: "Visit the Ivorra Interiors showroom in Al Olaya, Riyadh: full-scale kitchens, dressing rooms and bathrooms and a library of over 400 materials.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Studio", path: "/studio" }])} />
      <PageHero
        image={img("studio-exterior", l("Ivorra showroom in pale limestone with a glowing entrance at dusk", "معرض إيفورا من الحجر الجيري الفاتح بمدخل مضاء عند الغروب"))}
        label={STUDIO.heroLabel}
        title={STUDIO.heroTitle}
        text={STUDIO.heroText}
      />
      <EditorialSplit
        image={img("studio-showroom-main", l("Showroom hall with full-scale kitchen, wardrobe and bath settings", "قاعة المعرض مع إعدادات مطبخ وخزانة وحمام بالحجم الحقيقي"))}
        label={STUDIO.ourLabel}
        title={STUDIO.ourTitle}
        text={STUDIO.ourText}
      />
      <Experience />
      <EditorialSplit
        reverse
        tone="stone"
        ratio="aspect-square"
        image={img("studio-materials-display", l("Wall of framed stone, wood and metal samples", "جدار من عينات الحجر والخشب والمعدن المؤطرة"))}
        label={STUDIO.materialsLabel}
        title={STUDIO.materialsTitle}
        text={STUDIO.materialsText}
      />
      <EditorialSplit
        image={img("studio-consultation", l("Private consultation room with a round oak table and samples", "غرفة استشارة خاصة بطاولة بلوط دائرية وعينات"))}
        label={STUDIO.consultLabel}
        title={STUDIO.consultTitle}
        text={STUDIO.consultText}
      >
        <LinkArrow href="/consultation" label={UI.bookConsultation} />
      </EditorialSplit>
      <section className="bg-ivory" aria-label="Gallery">
        <div className="wrap pb-24 md:pb-36">
          <Gallery
            images={[
              img("studio-closing", l("Showroom corridor with warm cove lighting and a stone bench", "ممر المعرض بإضاءة دافئة ومقعد حجري")),
              img("studio-interior-detail", l("Walnut cabinet with a travertine top and ceramic bowl", "خزانة جوز بسطح ترافرتين ووعاء خزفي")),
              img("collections-hero", l("Showroom enfilade with room settings", "ممر في المعرض مع إعدادات الغرف")),
            ]}
          />
        </div>
      </section>
      <LocationHours />
      <CTASection />
    </>
  );
}
