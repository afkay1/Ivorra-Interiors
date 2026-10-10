"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { L } from "@/lib/types";

interface Props {
  href: string;
  children?: React.ReactNode;
  label?: L;
  className?: string;
}

export default function LinkArrow({ href, children, label, className = "" }: Props) {
  const { t } = useLang();
  return (
    <Link href={href} className={`link-arrow ${className}`}>
      <span>{label ? t(label) : children}</span>
      <span aria-hidden className="arrow inline-block">→</span>
    </Link>
  );
}
