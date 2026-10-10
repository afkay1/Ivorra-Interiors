"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { NAV, UI, BRAND } from "@/lib/data/site";
import Logo from "./Logo";

/** Pages whose top is light, so the header starts in its solid state. */
const SOLID = [/^\/consultation/, /^\/journal\/.+/];

export default function Header() {
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solidPage = SOLID.some((r) => r.test(pathname));
  const solid = solidPage || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) window.__lenis?.stop();
    else window.__lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-700 ease-lux ${
          solid ? "border-b border-line bg-ivory/90 text-espresso backdrop-blur-md" : "border-b border-transparent bg-transparent text-ivory"
        }`}
      >
        <div className="wrap flex h-[var(--header)] items-center justify-between gap-6">
          <Logo />
          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className="group relative py-2 text-[13.5px] font-medium tracking-[0.04em] rtl:text-[15px] rtl:tracking-normal"
              >
                {t(n.label)}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-500 ease-lux group-hover:scale-x-100 rtl:origin-right ${
                    isActive(n.href) ? "scale-x-100 bg-champagne" : "bg-current"
                  }`}
                />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <button onClick={toggleLang} aria-label={t(UI.langLabel)} className="text-[13px] font-semibold tracking-[0.08em] transition-opacity hover:opacity-60 rtl:font-sans">
              {t(UI.langSwitch)}
            </button>
            <Link
              href="/consultation"
              className={`hidden min-h-[44px] items-center border px-5 text-[11.5px] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 md:inline-flex rtl:text-[14px] rtl:normal-case rtl:tracking-normal ${
                solid ? "border-espresso hover:bg-espresso hover:text-ivory" : "border-ivory/60 hover:bg-ivory hover:text-espresso"
              }`}
            >
              {t(UI.consultation)}
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t(UI.close) : t(UI.menu)}
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className={`absolute h-px w-6 bg-current transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-1"}`} />
              <span className={`absolute h-px w-6 bg-current transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-1"}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ivory pt-[var(--header)] transition-[opacity,visibility] duration-700 ease-lux lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-center gap-2">
          {[{ href: "/", label: UI.home }, ...NAV].map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              tabIndex={open ? 0 : -1}
              className="display py-1 text-[44px] transition-[transform,opacity] duration-700 ease-lux sm:text-[56px]"
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms", transform: open ? "none" : "translateY(20px)", opacity: open ? 1 : 0 }}
            >
              {t(n.label)}
            </Link>
          ))}
        </nav>
        <div className="wrap flex flex-col gap-6 border-t border-line py-8">
          <Link href="/consultation" tabIndex={open ? 0 : -1} className="btn btn-solid w-full">
            {t(UI.bookConsultation)}
          </Link>
          <div className="flex flex-wrap justify-between gap-4 text-sm text-charcoal">
            <a href={`mailto:${BRAND.email}`} tabIndex={open ? 0 : -1}>{BRAND.email}</a>
            <a href={BRAND.phoneHref} tabIndex={open ? 0 : -1} dir="ltr">{BRAND.phone}</a>
          </div>
        </div>
      </div>
    </>
  );
}
