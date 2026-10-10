"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { BRAND, NAV, UI, FORM } from "@/lib/data/site";
import { COLLECTIONS } from "@/lib/data/collections";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLang();
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [email, setEmail] = useState("");

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("error");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <footer className="bg-walnut text-ivory">
      <div className="wrap grid gap-16 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-8 max-w-sm text-ivory/70">{t(UI.footerStatement)}</p>
          <form onSubmit={subscribe} noValidate className="mt-12 max-w-md">
            <label htmlFor="newsletter" className="label text-ivory/60">{t(UI.newsletter)}</label>
            {state === "done" ? (
              <p className="mt-4 text-champagne" role="status">{t(UI.subscribed)}</p>
            ) : (
              <div className="mt-4 flex items-end gap-4 border-b border-ivory/30 focus-within:border-ivory">
                <input
                  id="newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t(UI.emailPlaceholder)}
                  className="w-full bg-transparent py-3 text-ivory outline-none placeholder:text-ivory/40"
                  aria-invalid={state === "error"}
                />
                <button type="submit" disabled={state === "sending"} className="link-arrow shrink-0 text-ivory">
                  {t(UI.subscribe)}
                </button>
              </div>
            )}
            {state === "error" && <p className="mt-2 text-sm text-[#d9a08a]" role="alert">{t(FORM.errEmail)}</p>}
          </form>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:col-span-4">
          <div>
            <p className="label text-champagne">{t(UI.explore)}</p>
            <ul className="mt-6 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-ivory/80 transition-colors hover:text-ivory">{t(n.label)}</Link>
                </li>
              ))}
              <li>
                <Link href="/consultation" className="text-ivory/80 transition-colors hover:text-ivory">{t(UI.consultation)}</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="label text-champagne">{t(UI.allCollections)}</p>
            <ul className="mt-6 space-y-3">
              {COLLECTIONS.map((c) => (
                <li key={c.slug}>
                  <Link href={`/collections/${c.slug}`} className="text-ivory/80 transition-colors hover:text-ivory">
                    {t(c.name)} <span className="text-ivory/40">· {t(c.category)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="md:col-span-3">
          <p className="label text-champagne">{t(UI.studioLabel)}</p>
          <address className="mt-6 space-y-3 not-italic text-ivory/80">
            <p>{t(BRAND.address)}</p>
            <p><a href={`mailto:${BRAND.email}`} className="hover:text-ivory">{BRAND.email}</a></p>
            <p><a href={BRAND.phoneHref} dir="ltr" className="hover:text-ivory">{BRAND.phone}</a></p>
            <p>
              <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                {t(UI.whatsapp)} <span dir="ltr">{BRAND.whatsapp}</span>
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="wrap flex flex-col gap-3 border-t border-ivory/10 py-8 text-sm text-ivory/50 md:flex-row md:justify-between">
        <p>{t(UI.rights)}</p>
        <p>{t(BRAND.tagline)}</p>
      </div>
    </footer>
  );
}
