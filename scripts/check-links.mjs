// Fails if any internal link points to a page that does not exist.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const SRC = "src";
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(SRC).filter((f) => /\.(tsx?|mjs)$/.test(f));

const slugs = (file) => [...readFileSync(join(SRC, "lib/data", file), "utf8").matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const routes = new Set(["/", "/about", "/collections", "/projects", "/studio", "/journal", "/contact", "/consultation"]);
slugs("collections.ts").forEach((s) => routes.add(`/collections/${s}`));
slugs("projects.ts").forEach((s) => routes.add(`/projects/${s}`));
slugs("articles.ts").forEach((s) => routes.add(`/journal/${s}`));

// Static routes must exist as app pages.
for (const r of routes) {
  const seg = r.split("/").filter(Boolean);
  const direct = join(SRC, "app", ...seg, "page.tsx");
  const dynamic = seg.length === 2 ? join(SRC, "app", seg[0], "[slug]", "page.tsx") : null;
  if (!existsSync(direct) && !(dynamic && existsSync(dynamic))) {
    console.error(`Route without page: ${r}`);
    process.exitCode = 1;
  }
}

// Literal internal hrefs.
const bad = [];
let count = 0;
for (const f of files) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/href[=:]\s*["'](\/[^"'#?]*)["']/g)) {
    count++;
    if (!routes.has(m[1])) bad.push(`${f}: ${m[1]}`);
  }
  // Template hrefs must use a known prefix.
  for (const m of src.matchAll(/href=\{`(\/[a-z]+)\/\$\{/g)) {
    count++;
    if (!["/collections", "/projects", "/journal"].includes(m[1])) bad.push(`${f}: ${m[1]}/…`);
  }
}

// Cross references inside data (relatedProjects, collections) must exist.
const projects = new Set(slugs("projects.ts"));
const collections = new Set(slugs("collections.ts"));
const colSrc = readFileSync(join(SRC, "lib/data/collections.ts"), "utf8");
for (const m of colSrc.matchAll(/relatedProjects:\s*\[([^\]]*)\]/g))
  for (const s of m[1].match(/"([^"]+)"/g) || []) if (!projects.has(s.slice(1, -1))) bad.push(`collections.ts relatedProjects: ${s}`);
const projSrc = readFileSync(join(SRC, "lib/data/projects.ts"), "utf8");
for (const m of projSrc.matchAll(/collections:\s*\[([^\]]*)\]/g))
  for (const s of m[1].match(/"([^"]+)"/g) || []) if (!collections.has(s.slice(1, -1))) bad.push(`projects.ts collections: ${s}`);

// Every referenced image must exist in public/images.
for (const f of files) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/img\("([^"]+)"/g)) if (!existsSync(join("public/images", `${m[1]}.webp`))) bad.push(`${f}: missing image ${m[1]}`);
}

if (bad.length) {
  console.error("Dead links or missing assets:\n" + bad.join("\n"));
  process.exit(1);
}
console.log(`${routes.size} routes, ${count} internal links checked, 0 dead. All images present.`);
