import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/data/articles";
import { ArticleView } from "@/components/JournalViews";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: a.title.en,
    description: a.excerpt.en,
    alternates: { canonical: `/journal/${a.slug}` },
    openGraph: { type: "article", publishedTime: a.date, images: [{ url: a.image.src, alt: a.image.alt.en }] },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title.en,
    description: a.excerpt.en,
    datePublished: a.date,
    dateModified: a.date,
    image: `${SITE_URL}${a.image.src}`,
    author: { "@type": "Organization", name: "Ivorra Interiors" },
    publisher: { "@type": "Organization", name: "Ivorra Interiors", logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` } },
    mainEntityOfPage: `${SITE_URL}/journal/${a.slug}`,
  };
  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={breadcrumbLd([{ name: "Journal", path: "/journal" }, { name: a.title.en, path: `/journal/${a.slug}` }])} />
      <ArticleView slug={a.slug} />
      <CTASection />
    </>
  );
}
