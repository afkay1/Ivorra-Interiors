import type { Metadata } from "next";
import { JournalIndex } from "@/components/JournalViews";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on material, light and craft from the Ivorra Interiors studio: kitchens, dressing rooms, bathrooms and timber.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Journal", path: "/journal" }])} />
      <JournalIndex />
      <CTASection />
    </>
  );
}
