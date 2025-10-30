import Container from "@/components/Container";
import Button from "@/components/Button";

export default function HomePage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Discipulado bíblico, simples e consistente para crianças de 7 a 12 anos
            </h1>
            <p className="text-lg md:text-xl text-ink mt-4">
              Trilhas semanais com sessões de 5–12 minutos, memorização de versículos e relatórios claros — unindo família e igreja.
            </p>
            <div className="flex gap-3 mt-6">
              <Button href="#">Começar grátis</Button>
              <Button href="/planos" variant="ghost">Ver planos para Igrejas</Button>
            </div>
            <p className="text-sm text-ink mt-3">+X famílias iniciando o hábito bíblico</p>
          </div>
          <div className="card p-6">
            <div className="text-sm font-semibold mb-1">Proposta</div>
            <div className="text-[15px]">
              Home (Hero), Como Funciona, Benefícios, Demonstração da Sessão do Dia, Depoimentos e chamada para Planos.
            </div>
          </div>
        </Container>
      </section>

      <section id="como-funciona" className="py-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Como funciona (3 passos)</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card p-6"><h3 className="font-semibold text-lg mb-2">1) Escolha a trilha</h3><p>por idade/tema.</p></div>
            <div className="card p-6"><h3 className="font-semibold text-lg mb-2">2) Sessão do Di
