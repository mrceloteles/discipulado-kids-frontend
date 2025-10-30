import Container from "@/components/Container";

export default function PlanosPage() {
  return (
    <>
      <section className="bg-white">
        <Container className="py-14">
          <h1 className="text-4xl font-semibold">Planos e Preços</h1>
          <p className="text-ink mt-2">Escolha o plano ideal para sua família, igreja ou rede.</p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <h3 className="font-bold text-xl mb-2">Família</h3>
              <ul className="text-[15px] space-y-2 mb-6">
                <li>• Até <b>5 perfis de crianças</b></li>
                <li>• Trilhas semanais ilimitadas</li>
                <li>• Memorização validada + streak</li>
                <li>• Relatórios semanais por criança</li>
                <li>• PWA/Offline + notificações</li>
              </ul>
              <a className="inline-block bg-primary text-white px-5 py-3 rounded-xl" href="#">Começar grátis (30 dias)</a>
            </div>

            <div className="card p-6 border-primary/50 border-2">
              <h3 className="font-bold text-xl mb-2">Igreja</h3>
              <ul className="text-[15px] space-y-2 mb-6">
                <li>• Tudo do Família, <b>+ turmas e líderes</b></li>
                <li>• Atribuição de trilhas por faixa etária</li>
                <li>• Relatórios agregados (presença/memorização)</li>
                <li>• <b>Multi-tenant</b> com logo/cores</li>
                <li>• Convites por link/código</li>
              </ul>
              <div className="flex gap-2">
                <a className="inline-block bg-primary text-white px-5 py-3 rounded-xl" href="#">Testar agora</a>
                <a className="inline-block px-5 py-3 rounded-xl" href="#">Falar com consultor</a>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-xl mb-2">Rede/Enterprise</h3>
              <ul className="text-[15px] space-y-2 mb-6">
                <li>• Multi-igrejas / campus</li>
                <li>• Integrações (SSO / diretórios)</li>
                <li>• Exportações e auditoria</li>
                <li>• SLA e treinamento</li>
              </ul>
              <a className="inline-block bg-primary text-white px-5 py-3 rounded-xl" href="#">Solicitar proposta</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
