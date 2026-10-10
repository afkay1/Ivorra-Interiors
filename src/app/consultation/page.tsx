import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { ConsultationBody } from "@/components/ContactViews";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book a Private Consultation",
  description: "Tell us about your kitchen, dressing room, bathroom or whole-home project and a senior Ivorra designer will call you within two working days.",
  alternates: { canonical: "/consultation" },
};

export default function ConsultationPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Consultation", path: "/consultation" }])} />
      <ConsultationBody />
    </>
  );
}
