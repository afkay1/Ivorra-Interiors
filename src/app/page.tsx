import type { Metadata } from "next";
import {
  HomeHero,
  Philosophy,
  SignatureCollections,
  FeaturedCollection,
  Craftsmanship,
  FeaturedProject,
  ProjectsShowcase,
  StudioTeaser,
  JournalTeaser,
} from "@/components/HomeSections";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Ivorra Interiors | Luxury Kitchens, Dressing Rooms & Bespoke Joinery" },
  description:
    "Private design studio creating luxury kitchens, dressing rooms, bathrooms and living joinery in natural stone and timber. Showroom in Riyadh, projects across the Gulf and Europe.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Philosophy />
      <SignatureCollections />
      <FeaturedCollection />
      <Craftsmanship />
      <FeaturedProject />
      <ProjectsShowcase />
      <Process />
      <StudioTeaser />
      <Testimonial />
      <JournalTeaser />
      <CTASection />
    </>
  );
}
