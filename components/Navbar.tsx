"use client";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const link = (p: string) =>
    `text-sm md:text-[15px] font-semibold ${pathname===p ? "text-black" : "text-ink hover:text-black"}`;
  return (
    <header className="sticky top-0 z-40 bg-sand/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          Discipulado<span className="text-primary">Kids</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className={link("/")}>Início</Link>
          <Link href="/planos" className={link("/planos")}>Planos</Link>
          <a href="#recursos" className="text-ink font-semibold hover:text-black">Recursos</a>
          <a href="#faq" className="text-ink font-semibold hover:text-black">FAQ</a>
        </nav>
      </Container>
    </header>
  );
}
