import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Statement from "@/components/Statement";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { ProjectsIndex } from "@/components/ProjectViews";
import { l } from "@/lib/types";
import { img } from "@/lib/data/img";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected private residences by Ivorra Interiors in Dubai, Jeddah, Doha and Lake Como.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Projects", path: "/projects" }])} />
      <PageHero
        image={img("projects-hero", l("Limestone villa courtyard with an olive tree at dusk", "فناء فيلا من الحجر الجيري مع شجرة زيتون عند الغروب"))}
        label={l("Projects", "المشاريع")}
        title={l("Spaces That Speak for Themselves.", "مساحات تتحدث عن نفسها.")}
        text={l("Private residences across the Gulf and Europe, each designed from the inside out.", "مساكن خاصة في الخليج وأوروبا، صُمم كل منها من الداخل إلى الخارج.")}
      />
      <Statement
        label={l("Selected work", "أعمال مختارة")}
        title={l("Every home begins with a conversation and ends with a room that feels inevitable.", "يبدأ كل بيت بحوار، وينتهي بغرفة تبدو وكأنها لا يمكن أن تكون إلا هكذا.")}
      />
      <ProjectsIndex />
      <CTASection />
    </>
  );
}
