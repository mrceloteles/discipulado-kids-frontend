import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-sand">
      <Container className="py-10 grid gap-6 md:grid-cols-4">
        <div>
          <div className="font-bold text-lg">Discipulado<span className="text-primary">Kids</span></div>
          <p className="text-sm text-ink mt-2">Editorial moderno, acessível e bíblico. Unindo família e igreja.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Produto</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><Link href="/planos">Planos e Preços</Link></li>
            <li><a href="#privacidade">Privacidade Infantil</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Recursos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#recursos">Gamificação saudável</a></li>
            <li><a href="#recursos">Relatórios</a></li>
            <li><a href="#recursos">PWA/Offline</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#privacidade">LGPD & Crianças</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-sand py-6">
        <Container className="text-xs text-ink flex items-center justify-between">
          <span>© {new Date().getFullYear()} DiscipuladoKids.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Termos</a>
            <a href="#" className="hover:underline">Política</a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
