export default function PlanosPage() {
  return (
    <main style={{ padding: 24, maxWidth: 960, margin: "0 auto", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Planos e Preços</h1>
      <p style={{ color: "#555" }}>Escolha o plano ideal para sua família, igreja ou rede.</p>

      <section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", marginTop: 24 }}>
        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Família</h3>
          <ul>
            <li>Até <b>5 perfis de crianças</b></li>
            <li>Trilhas semanais ilimitadas</li>
            <li>Memorização validada + streak</li>
            <li>Relatórios semanais por criança</li>
            <li>PWA/Offline + notificações</li>
          </ul>
          <a href="#" style={{ display: "inline-block", marginTop: 8 }}>Começar grátis (30 dias)</a>
        </div>

        <div style={{ border: "2px solid #8CC7E4", borderRadius: 12, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Igreja</h3>
          <ul>
            <li>Tudo do Família, <b>+ turmas e líderes</b></li>
            <li>Atribuição de trilhas por faixa etária</li>
            <li>Relatórios agregados (presença/memorização)</li>
            <li><b>Multi-tenant</b> com logo/cores</li>
            <li>Convites por link/código</li>
          </ul>
          <div>
            <a href="#" style={{ marginRight: 12 }}>Testar agora</a>
            <a href="#">Falar com consultor</a>
          </div>
        </div>

        <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
          <h3 style={{ marginTop: 0 }}>Rede/Enterprise</h3>
          <ul>
            <li>Multi-igrejas / campus</li>
            <li>Integrações (SSO / diretórios)</li>
            <li>Exportações e auditoria</li>
            <li>SLA e treinamento</li>
          </ul>
          <a href="#" style={{ display: "inline-block", marginTop: 8 }}>Solicitar proposta</a>
        </div>
      </section>
    </main>
  );
}
