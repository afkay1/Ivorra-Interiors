import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Statement from "@/components/Statement";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { CollectionsList } from "@/components/CollectionViews";
import { l } from "@/lib/types";
import { img } from "@/lib/data/img";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Collections",
  description: "Four collections of bespoke interiors: Cucina kitchens, Guardaroba dressing rooms, Terme bathrooms and Salone living joinery.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Collections", path: "/collections" }])} />
      <PageHero
        image={img("collections-hero", l("Showroom enfilade revealing a kitchen, dressing room, bath and library", "ممر في المعرض يكشف مطبخاً وغرفة ملابس وحماماً ومكتبة"))}
        label={l("Collections", "المجموعات")}
        title={l("Four Worlds, One Language.", "أربعة عوالم ولغة واحدة.")}
        text={l("Kitchens, dressing rooms, bathrooms and living joinery, designed to work together throughout a home.", "مطابخ وغرف ملابس وحمامات ونجارة معيشة، صُممت لتنسجم معاً في أرجاء البيت.")}
      />
      <Statement
        label={l("Our collections", "مجموعاتنا")}
        title={l("Each collection has its own character, but all share the same materials and the same care.", "لكل مجموعة طابعها، لكنها جميعاً تتشارك المواد نفسها والعناية نفسها.")}
      />
      <CollectionsList />
      <CTASection />
    </>
  );
}
