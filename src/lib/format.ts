import type { Lang } from "./types";

export function formatDate(iso: string, lang: Lang): string {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString(lang === "ar" ? "ar-SA-u-ca-gregory" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://ivorra-interiors.vercel.app").replace(/\/$/, "");
