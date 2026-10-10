import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Ivorra Interiors, home" className={`group inline-flex flex-col leading-none ${className}`}>
      <span className="font-serif text-[26px] font-normal tracking-[0.32em]" dir="ltr">IVORRA</span>
      <span className="mt-1 font-sans text-[8.5px] font-semibold tracking-[0.5em] opacity-70" dir="ltr">INTERIORS</span>
    </Link>
  );
}
