import Link from "next/link";
import { ReactNode } from "react";

export default function Button(
  { href, onClick, variant = "primary", className = "", children }:
  { href?: string; onClick?: () => void; variant?: "primary"|"ghost"; className?: string; children: ReactNode }
) {
  const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold transition";
  const styles = variant === "primary"
    ? "bg-primary text-white hover:opacity-90"
    : "bg-transparent text-ink hover:text-black";
  return href
    ? <Link href={href} className={`${base} ${styles} ${className}`}>{children}</Link>
    : <button onClick={onClick} className={`${base} ${styles} ${className}`}>{children}</button>;
}
