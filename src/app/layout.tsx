import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Tajawal } from "next/font/google";
import "./globals.css";
import { LangProvider, LANG_BOOT_SCRIPT } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/format";
import { BRAND } from "@/lib/data/site";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans", display: "swap" });
const ar = Tajawal({ subsets: ["arabic"], weight: ["300", "400", "500", "700"], variable: "--font-ar", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Ivorra Interiors | Interior Architecture & Bespoke Joinery", template: "%s | Ivorra Interiors" },
  description:
    "Ivorra Interiors designs luxury kitchens, dressing rooms, bathrooms and living joinery for private homes. Private design studio and showroom in Riyadh.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Ivorra Interiors",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ivorra Interiors living room" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#F4F1EA", width: "device-width", initialScale: 1 };

const ORG = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: "Ivorra Interiors",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/og.jpg`,
  email: BRAND.email,
  telephone: BRAND.phone,
  address: { "@type": "PostalAddress", streetAddress: "King Fahd Road, Al Olaya", addressLocality: "Riyadh", postalCode: "12214", addressCountry: "SA" },
  openingHours: "Su-Th 10:00-19:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${serif.variable} ${sans.variable} ${ar.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js");${LANG_BOOT_SCRIPT}` }} />
      </head>
      <body>
        <JsonLd data={ORG} />
        <LangProvider>
          <SkipLink />
          <SmoothScroll />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
