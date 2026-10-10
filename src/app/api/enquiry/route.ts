import { NextResponse } from "next/server";
import { clean, isEmail, isPhone, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

const MAX_FILES = 3;
const MAX_SIZE = 5 * 1024 * 1024;
const TYPES = ["application/pdf", "image/jpeg", "image/png"];

const bad = (error: string) => NextResponse.json({ ok: false, error }, { status: 422 });

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return bad("invalid_body");
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (clean(form.get("company"))) return NextResponse.json({ ok: true });

  const kind = clean(form.get("kind"), 20) === "consultation" ? "consultation" : "contact";
  const name = clean(form.get("name"), 120);
  const email = clean(form.get("email"), 160);
  const phone = clean(form.get("phone"), 40);
  const message = clean(form.get("message"), 5000);

  if (!name) return bad("name");
  if (!isEmail(email)) return bad("email");
  if (phone && !isPhone(phone)) return bad("phone");

  const lines = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "-"}`, `Language: ${clean(form.get("lang"), 4)}`];

  if (kind === "contact") {
    if (!message) return bad("message");
    lines.push(`Subject: ${clean(form.get("subject"), 80) || "-"}`, "", message);
    const ok = await sendMail(`Website message from ${name}`, lines.join("\n"), email);
    return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ ok: false }, { status: 502 });
  }

  const required = ["projectType", "location", "contactMethod", "timeline"] as const;
  for (const k of required) if (!clean(form.get(k), 120)) return bad(k);
  if (!phone) return bad("phone");

  const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES || files.some((f) => f.size > MAX_SIZE || !TYPES.includes(f.type))) return bad("files");
  const attachments = await Promise.all(
    files.map(async (f) => ({ filename: clean(f.name, 120) || "attachment", content: Buffer.from(await f.arrayBuffer()).toString("base64") }))
  );

  lines.push(
    `Project type: ${clean(form.get("projectType"), 80)}`,
    `Location: ${clean(form.get("location"), 120)}`,
    `Size: ${clean(form.get("size"), 40) || "-"}`,
    `Preferred contact: ${clean(form.get("contactMethod"), 40)}`,
    `Timeline: ${clean(form.get("timeline"), 40)}`,
    `Attachments: ${attachments.length}`,
    "",
    message || "(no message)"
  );
  const ok = await sendMail(`Consultation request from ${name}`, lines.join("\n"), email, attachments);
  return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ ok: false }, { status: 502 });
}
