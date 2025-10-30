import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Discipulado bíblico para crianças | SaaS 7–12",
  description:
    "Trilhas semanais com Sessão do Dia (5–12 min), memorização e relatórios — unindo família e igreja.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
