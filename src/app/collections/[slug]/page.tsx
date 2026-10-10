import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COLLECTIONS, getCollection } from "@/lib/data/collections";
import { CollectionDetail } from "@/components/CollectionViews";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCollection(params.slug);
  if (!c) return {};
  return {
    title: `${c.name.en} ${c.category.en}`,
    description: c.intro.en,
    alternates: { canonical: `/collections/${c.slug}` },
    openGraph: { images: [{ url: c.hero.src, alt: c.hero.alt.en }] },
  };
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const c = getCollection(params.slug);
  if (!c) notFound();
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Collections", path: "/collections" }, { name: c.name.en, path: `/collections/${c.slug}` }])} />
      <CollectionDetail slug={c.slug} />
      <CTASection />
    </>
  );
}
