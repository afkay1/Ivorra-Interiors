# Ivorra Interiors website

Bilingual (English / Arabic with full RTL) website for Ivorra Interiors, a fictional luxury interior architecture and bespoke joinery studio. A MYFRIX concept project.

Stack: Next.js 14 (App Router), TypeScript (strict), Tailwind CSS, GSAP + ScrollTrigger, Lenis, next/image, next/font (Cormorant Garamond, Manrope, Tajawal).

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000. Use the عربي / EN button in the header to switch language; the choice is remembered.

Other scripts:

- `npm run build` then `npm start`: production build.
- `npm run check:links`: checks every internal link, every project/collection/article slug and every image reference. It fails if anything points to a page or image that does not exist.

## Pages

| Route | Page |
|---|---|
| `/` | Home (12 sections) |
| `/about` | About |
| `/collections` | Collections overview |
| `/collections/[slug]` | `cucina`, `guardaroba`, `terme`, `salone` |
| `/projects` | Projects |
| `/projects/[slug]` | `palm-residence`, `villa-lago`, `corniche-apartment`, `pearl-townhouse` |
| `/studio` | Studio and showroom |
| `/journal` | Journal |
| `/journal/[slug]` | 7 articles |
| `/contact` | Contact form and details |
| `/consultation` | Private consultation request (with file upload) |
| `/sitemap.xml`, `/robots.txt` | Generated |

## Editing content

All text lives in `src/lib/data/` with an English and an Arabic version of every string:

- `site.ts`: brand details (email, phone, WhatsApp, address, opening hours), navigation, page copy, form labels.
- `collections.ts`, `projects.ts`, `articles.ts`, `testimonials.ts`.

Images are in `public/images/` as WebP, named by page and section (for example `project-villa-lago-hero.webp`). To replace one, keep the same file name.

**Before going live:** replace the placeholder email, phone and WhatsApp number in `site.ts`, and have a native speaker review the Arabic copy.

## Forms

`/api/enquiry` handles both the contact and consultation forms (validation, honeypot spam trap, up to 3 attachments of 5 MB). `/api/newsletter` handles the footer sign-up.

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `ENQUIRY_FROM_EMAIL` to receive emails through Resend. Without them the forms validate and show the thank-you message, but nothing is sent (demo mode).

## Deploy to Vercel

1. Push this `website` folder to a new GitHub repository.
2. On vercel.com, choose **Add New → Project**, import the repository and keep the default Next.js settings.
3. Add the environment variables from `.env.example` (at minimum `NEXT_PUBLIC_SITE_URL` with your final URL).
4. Deploy. Redeploy after changing `NEXT_PUBLIC_SITE_URL` so canonical links and the sitemap use it.

## Built-in quality

- SEO: unique titles and descriptions, canonical URLs, Open Graph image, sitemap, robots, Organization, Article and Breadcrumb structured data.
- Accessibility: semantic landmarks, skip link, visible focus, labelled form fields with error messages, keyboard-operable menu (Esc closes), `prefers-reduced-motion` disables animation and smooth scroll.
- Performance: WebP images served through next/image (AVIF/WebP, responsive sizes, lazy loading, priority heroes), self-hosted fonts with `display: swap`, static generation for every page.
