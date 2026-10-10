export type Lang = "en" | "ar";

/** A string in both languages. */
export interface L {
  en: string;
  ar: string;
}

export const l = (en: string, ar: string): L => ({ en, ar });

export interface Img {
  src: string;
  alt: L;
}

export interface Collection {
  slug: string;
  number: string;
  name: L;
  category: L;
  tagline: L;
  intro: L;
  philosophyTitle: L;
  philosophy: L;
  features: { title: L; text: L }[];
  materials: { name: L; text: L; image: Img }[];
  application: L;
  hero: Img;
  environment: Img[];
  details: Img[];
  relatedProjects: string[];
}

export interface Project {
  slug: string;
  name: L;
  location: L;
  type: L;
  year: string;
  area: string;
  summary: L;
  story: L[];
  conclusion: L;
  facts: { label: L; value: L }[];
  materials: { name: L; text: L; image: Img }[];
  hero: Img;
  wide: Img[];
  rooms: Img[];
  details: Img[];
  collections: string[];
}

export interface ArticleSection {
  heading?: L;
  paragraphs: L[];
  image?: Img;
}

export interface Article {
  slug: string;
  category: L;
  title: L;
  date: string; // ISO date
  excerpt: L;
  image: Img;
  readTime: number;
  sections: ArticleSection[];
}

export interface Testimonial {
  quote: L;
  name: L;
  project: L;
  location: L;
  image: Img;
}
