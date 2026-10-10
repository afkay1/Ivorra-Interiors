import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { ContactBody } from "@/components/ContactViews";
import { CONTACT } from "@/lib/data/site";
import { l } from "@/lib/types";
import { img } from "@/lib/data/img";
import { breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ivorra Interiors in Riyadh by email, phone or WhatsApp, or visit our showroom in Al Olaya.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Contact", path: "/contact" }])} />
      <PageHero
        image={img("contact-hero", l("Sunlit studio reception with an oak counter and dried branches", "استقبال الاستوديو المشمس مع طاولة بلوط وأغصان جافة"))}
        label={CONTACT.heroLabel}
        title={CONTACT.heroTitle}
        text={CONTACT.heroText}
      />
      <ContactBody />
    </>
  );
}
