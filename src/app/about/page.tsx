import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EditorialSplit from "@/components/EditorialSplit";
import Statement from "@/components/Statement";
import CTASection from "@/components/CTASection";
import { Team, AboutStudio } from "@/components/AboutSections";
import JsonLd from "@/components/JsonLd";
import { ABOUT } from "@/lib/data/site";
import { l } from "@/lib/types";
import { img } from "@/lib/data/img";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: "Ivorra Interiors is a private interior architecture and bespoke joinery studio in Riyadh, designing calm, precise homes in stone and timber.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "About", path: "/about" }])} />
      <PageHero
        image={img("about-hero", l("Design atelier with a long oak drafting table and material boards", "مشغل تصميم بطاولة رسم طويلة من البلوط ولوحات مواد"))}
        label={ABOUT.heroLabel}
        title={ABOUT.heroTitle}
        text={ABOUT.heroText}
      />
      <EditorialSplit
        image={img("about-studio-environment", l("Floor-to-ceiling sample library with a rolling ladder", "مكتبة عينات من الأرض حتى السقف مع سلم متحرك"))}
        label={ABOUT.storyLabel}
        title={ABOUT.storyTitle}
        text={ABOUT.story}
      />
      <Statement label={ABOUT.philosophyLabel} title={ABOUT.philosophyTitle} text={ABOUT.philosophyText} />
      <EditorialSplit
        reverse
        tone="stone"
        image={img("home-craft-workshop", l("Joinery workbench with hand tools and a dovetailed walnut drawer", "طاولة نجارة مع أدوات يدوية ودرج جوز معشّق"))}
        label={ABOUT.craftLabel}
        title={ABOUT.craftTitle}
        text={ABOUT.craftText}
      />
      <EditorialSplit
        ratio="aspect-[4/5]"
        image={img("home-craft-material", l("Travertine, walnut and a brass profile", "ترافرتين وجوز وقطعة نحاسية"))}
        label={ABOUT.materialsLabel}
        title={ABOUT.materialsTitle}
        text={ABOUT.materialsText}
      />
      <EditorialSplit
        reverse
        ratio="aspect-[4/5]"
        tone="stone"
        image={img("about-architectural-detail", l("Stone wall meeting a walnut panel with a bronze light line", "جدار حجري يلتقي بلوح جوز مع خط إضاءة برونزي"))}
        label={ABOUT.approachLabel}
        title={ABOUT.approachTitle}
        text={ABOUT.approachText}
      />
      <Team />
      <AboutStudio />
      <CTASection />
    </>
  );
}
