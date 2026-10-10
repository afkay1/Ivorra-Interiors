"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { UI } from "@/lib/data/site";
import Img from "@/components/Img";
import { img } from "@/lib/data/img";
import { l } from "@/lib/types";

export default function NotFound() {
  const { t } = useLang();
  return (
    <section className="relative flex min-h-[100svh] items-end bg-walnut text-ivory">
      <Img image={img("about-closing", l("Quiet stone gallery at dusk", "مساحة حجرية هادئة عند الغروب"))} className="absolute inset-0" decorative />
      <div className="absolute inset-0 bg-black/55" />
      <div className="wrap relative pb-20 md:pb-28">
        <p className="label text-ivory/70" dir="ltr">404</p>
        <h1 className="display h1 mt-6 max-w-3xl">{t(UI.notFoundTitle)}</h1>
        <p className="mt-6 max-w-md text-ivory/80">{t(UI.notFoundText)}</p>
        <Link href="/" className="btn btn-light mt-10">{t(UI.backHome)}</Link>
      </div>
    </section>
  );
}
