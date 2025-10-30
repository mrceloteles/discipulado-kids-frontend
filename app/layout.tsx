// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discipulado bíblico para crianças | SaaS 7–12",
  description:
    "Trilhas semanais com Sessão do Dia (5–12 min), memorização de versículos e relatórios — unindo família e igreja.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
