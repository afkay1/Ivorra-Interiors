import { NextResponse } from "next/server";
import { clean, isEmail, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let email = "";
  try {
    const body = (await req.json()) as { email?: unknown };
    email = clean(body.email, 160);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!isEmail(email)) return NextResponse.json({ ok: false }, { status: 422 });
  const ok = await sendMail("New journal subscriber", `Subscriber: ${email}`, email);
  return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ ok: false }, { status: 502 });
}
