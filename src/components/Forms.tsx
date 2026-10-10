"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { FORM, UI } from "@/lib/data/site";
import type { L } from "@/lib/types";

type Errors = Record<string, string>;
type Status = "idle" | "sending" | "done" | "error";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[+()\d\s-]{7,20}$/;
const MAX_FILES = 3;
const MAX_SIZE = 5 * 1024 * 1024;
const TYPES = ["application/pdf", "image/jpeg", "image/png"];

function Field({ id, label, error, children, className = "" }: { id: string; label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label text-charcoal">{label}</label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-[#9a4b32]">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({ id, options, required, invalid, placeholder }: { id: string; options: L[]; required?: boolean; invalid?: boolean; placeholder: string }) {
  const { t } = useLang();
  return (
    <select id={id} name={id} required={required} defaultValue="" className="field" aria-invalid={invalid} aria-describedby={invalid ? `${id}-error` : undefined}>
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => (
        <option key={o.en} value={o.en}>{t(o)}</option>
      ))}
    </select>
  );
}

async function submit(data: FormData): Promise<boolean> {
  try {
    const res = await fetch("/api/enquiry", { method: "POST", body: data });
    return res.ok;
  } catch {
    return false;
  }
}

function Thanks({ text }: { text: L }) {
  const { t } = useLang();
  return (
    <div role="status" className="border-t border-champagne pt-10">
      <p className="display h2">{t(FORM.thanksTitle)}</p>
      <p className="mt-4 max-w-md text-charcoal">{t(text)}</p>
    </div>
  );
}

/* ---------- Contact ---------- */
export function ContactForm() {
  const { t, lang } = useLang();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const errs: Errors = {};
    if (!String(d.get("name") || "").trim()) errs.name = t(FORM.errRequired);
    if (!EMAIL.test(String(d.get("email") || "").trim())) errs.email = t(FORM.errEmail);
    const phone = String(d.get("phone") || "").trim();
    if (phone && !PHONE.test(phone)) errs.phone = t(FORM.errPhone);
    if (!String(d.get("message") || "").trim()) errs.message = t(FORM.errRequired);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    d.set("kind", "contact");
    d.set("lang", lang);
    setStatus("sending");
    const ok = await submit(d);
    setStatus(ok ? "done" : "error");
    if (ok) form.reset();
  }

  if (status === "done") return <Thanks text={FORM.thanksText} />;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-8 md:grid-cols-2">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <Field id="name" label={t(FORM.name)} error={errors.name}>
        <input id="name" name="name" autoComplete="name" required className="field" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
      </Field>
      <Field id="email" label={t(FORM.email)} error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required className="field" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
      </Field>
      <Field id="phone" label={t(FORM.phone)} error={errors.phone}>
        <input id="phone" name="phone" type="tel" autoComplete="tel" dir="ltr" className="field rtl:text-right" aria-invalid={!!errors.phone} />
      </Field>
      <Field id="subject" label={t(FORM.subject)}>
        <Select id="subject" options={FORM.subjects} placeholder={t(FORM.choose)} />
      </Field>
      <Field id="message" label={t(FORM.message)} error={errors.message} className="md:col-span-2">
        <textarea id="message" name="message" rows={5} required className="field resize-none" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
      </Field>
      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-charcoal">{t(FORM.privacy)}</p>
        <button type="submit" disabled={status === "sending"} className="btn btn-solid disabled:opacity-60">
          {status === "sending" ? t(FORM.sending) : t(FORM.send)}
        </button>
      </div>
      {status === "error" && <p role="alert" className="text-[#9a4b32] md:col-span-2">{t(FORM.errGeneric)}</p>}
    </form>
  );
}

/* ---------- Consultation ---------- */
export function ConsultationForm() {
  const { t, lang } = useLang();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [fileNames, setFileNames] = useState<string[]>([]);

  function checkFiles(files: File[]): boolean {
    return files.length <= MAX_FILES && files.every((f) => f.size <= MAX_SIZE && TYPES.includes(f.type));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const errs: Errors = {};
    for (const k of ["name", "projectType", "location", "contactMethod", "timeline"]) {
      if (!String(d.get(k) || "").trim()) errs[k] = t(FORM.errRequired);
    }
    if (!EMAIL.test(String(d.get("email") || "").trim())) errs.email = t(FORM.errEmail);
    if (!PHONE.test(String(d.get("phone") || "").trim())) errs.phone = t(FORM.errPhone);
    const files = d.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
    if (!checkFiles(files)) errs.files = t(FORM.errFiles);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`);
      first?.focus();
      return;
    }
    d.delete("files");
    files.forEach((f) => d.append("files", f));
    d.set("kind", "consultation");
    d.set("lang", lang);
    setStatus("sending");
    const ok = await submit(d);
    setStatus(ok ? "done" : "error");
    if (ok) {
      form.reset();
      setFileNames([]);
    }
  }

  if (status === "done") return <Thanks text={FORM.consultThanks} />;

  const inv = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-8 md:grid-cols-2">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <Field id="name" label={t(FORM.name)} error={errors.name}>
        <input id="name" name="name" autoComplete="name" required className="field" {...inv("name")} />
      </Field>
      <Field id="email" label={t(FORM.email)} error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required className="field" {...inv("email")} />
      </Field>
      <Field id="phone" label={t(FORM.phone)} error={errors.phone}>
        <input id="phone" name="phone" type="tel" autoComplete="tel" dir="ltr" required className="field rtl:text-right" {...inv("phone")} />
      </Field>
      <Field id="projectType" label={t(FORM.projectType)} error={errors.projectType}>
        <Select id="projectType" options={FORM.projectTypes} required invalid={!!errors.projectType} placeholder={t(FORM.choose)} />
      </Field>
      <Field id="location" label={t(FORM.location)} error={errors.location}>
        <input id="location" name="location" required className="field" {...inv("location")} />
      </Field>
      <Field id="size" label={t(FORM.size)}>
        <Select id="size" options={FORM.sizes} placeholder={t(FORM.choose)} />
      </Field>
      <Field id="contactMethod" label={t(FORM.contactMethod)} error={errors.contactMethod}>
        <Select id="contactMethod" options={FORM.methods} required invalid={!!errors.contactMethod} placeholder={t(FORM.choose)} />
      </Field>
      <Field id="timeline" label={t(FORM.timeline)} error={errors.timeline}>
        <Select id="timeline" options={FORM.timelines} required invalid={!!errors.timeline} placeholder={t(FORM.choose)} />
      </Field>
      <Field id="message" label={t(FORM.message)} className="md:col-span-2">
        <textarea id="message" name="message" rows={4} className="field resize-none" />
      </Field>
      <Field id="files" label={t(FORM.files)} error={errors.files} className="md:col-span-2">
        <div className="mt-3 flex flex-wrap items-center gap-4 border border-dashed border-line px-5 py-5">
          <input
            id="files"
            name="files"
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            className="text-sm file:me-4 file:border file:border-espresso file:bg-transparent file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.15em]"
            onChange={(e) => setFileNames(Array.from(e.target.files || []).map((f) => f.name))}
            {...inv("files")}
          />
          <span className="text-sm text-charcoal">{fileNames.length ? fileNames.join(", ") : t(FORM.filesHint)}</span>
        </div>
      </Field>
      <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-charcoal">{t(FORM.privacy)}</p>
        <button type="submit" disabled={status === "sending"} className="btn btn-solid disabled:opacity-60">
          {status === "sending" ? t(FORM.sending) : t(UI.requestConsultation)}
        </button>
      </div>
      {status === "error" && <p role="alert" className="text-[#9a4b32] md:col-span-2">{t(FORM.errGeneric)}</p>}
    </form>
  );
}
