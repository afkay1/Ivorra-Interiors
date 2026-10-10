import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/format";
import { COLLECTIONS } from "@/lib/data/collections";
import { PROJECTS } from "@/lib/data/projects";
import { ARTICLES } from "@/lib/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/about", "/collections", "/projects", "/studio", "/journal", "/contact", "/consultation"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  return [
    ...pages,
    ...COLLECTIONS.map((c) => ({ url: `${SITE_URL}/collections/${c.slug}`, lastModified: now, priority: 0.7 })),
    ...PROJECTS.map((p) => ({ url: `${SITE_URL}/projects/${p.slug}`, lastModified: now, priority: 0.7 })),
    ...ARTICLES.map((a) => ({ url: `${SITE_URL}/journal/${a.slug}`, lastModified: new Date(a.date), priority: 0.6 })),
  ];
}
