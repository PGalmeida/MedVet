import React from "react";
import "../pages/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO - Texto + Imagem grande */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <span className="eyebrow">Hospital/Clínica 24h</span>
          <h1>
            Todo <span className="highlight">Cuidado</span> Que Seu Pet Merece
          </h1>
          <p>
            Mais do que uma clínica, oferecemos atendimento humanizado,
            moderno e com amor em cada consulta.
          </p>

          <div className="hero-actions">
            <a href="#sobre" className="btn-hero">Saiba Mais</a>

            {/* ancora interna para a seção de contato */}
            <a href="#contato" className="btn-hero ghost" aria-label="Ir para contato">
              Entrar em Contato
            </a>
          </div>
        </div>

        {/* Imagem de impacto via background (usa /public/hero-pet.png) */}
        <div
          className="hero-image"
          style={{ backgroundImage: 'url(/hero-pet.png)' }}
          aria-hidden="true"
        />
      </section>

      {/* Sobre */}
      <section id="sobre" className="about">
        <h2>Sobre a Clínica</h2>
        <p>
          Somos uma clínica veterinária em Franca-SP, especializada em cuidados completos
          para cães e gatos. Oferecemos atendimento personalizado, com foco na prevenção,
          diagnóstico e tratamento — sempre com carinho e profissionalismo — para garantir
          saúde, bem-estar e qualidade de vida a cada pet.
        </p>
        <div className="about-numbers">
          <div>
            <strong>+3.000</strong>
            <br />Clientes Satisfeitos
          </div>
          <div>
            <strong>24h</strong>
            <br />Atendimento Emergencial
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="services">
        <h2>NOSSOS SERVIÇOS</h2>
        <div className="services-grid">
          <div className="card">🐾 Consultas Clínicas</div>
          <div className="card">💉 Vacinas</div>
          <div className="card">🔬 Exames e Imagens</div>
          <div className="card">✂️ Banho & Tosa</div>
          <div className="card">🏥 Cirurgias</div>
          <div className="card">📦 Produtos</div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="plans">
        <h2>Planos de Saúde Pet</h2>
        <div className="plans-grid">
          <div className="plan-card">
            <h3>Check-up Essencial</h3>
            <p className="price">R$ 49/mês</p>
            <ul>
              <li>1 consulta/ano</li>
              <li>Descontos em vacinas</li>
              <li>Orientação nutricional</li>
            </ul>
            <a href="#contato" className="btn-plan" aria-label="Assinar plano Check-up Essencial">
              Assinar
            </a>
          </div>

          <div className="plan-card highlight">
            <h3>Bem-Estar +</h3>
            <p className="price">R$ 89/mês</p>
            <ul>
              <li>2 consultas/ano</li>
              <li>Vacinas com 20% off</li>
              <li>Exames básicos c/ desconto</li>
            </ul>
            <a href="#contato" className="btn-plan" aria-label="Assinar plano Bem-Estar +">
              Assinar
            </a>
          </div>

          <div className="plan-card">
            <h3>Premium 24h</h3>
            <p className="price">R$ 149/mês</p>
            <ul>
              <li>Consultas ilimitadas</li>
              <li>Descontos ampliados</li>
              <li>Prioridade em procedimentos</li>
            </ul>
            <a href="#contato" className="btn-plan" aria-label="Assinar plano Premium 24h">
              Assinar
            </a>
          </div>
        </div>
      </section>

      {/* Blog (sem imagens, cards de texto) */}
      <section id="blog" className="blog">
        <h2>Dicas e Novidades</h2>

        <div className="blog-grid">
          <article className="blog-card">
            <header className="blog-header">
              <span className="badge">Guia</span>
              <h3>Guia de Vacinação para Filhotes</h3>
            </header>

            <p className="blog-excerpt">
              Calendário essencial de imunização, quando aplicar cada dose e
              dicas para reduzir o estresse do seu filhote durante as visitas.
            </p>

            <footer className="blog-meta">
              <time dateTime="2025-09">Set 2025</time>
              <a href="#" className="blog-link">Ler artigo →</a>
            </footer>
          </article>

          <article className="blog-card">
            <header className="blog-header">
              <span className="badge">Nutrição</span>
              <h3>Alimentação Natural: por onde começar?</h3>
            </header>

            <p className="blog-excerpt">
              Prós e contras da AN, como montar um prato equilibrado e
              quando procurar acompanhamento profissional.
            </p>

            <footer className="blog-meta">
              <time dateTime="2025-08">Ago 2025</time>
              <a href="#" className="blog-link">Ler artigo →</a>
            </footer>
          </article>

          <article className="blog-card">
            <header className="blog-header">
              <span className="badge">Comportamento</span>
              <h3>Sinais de dor em gatos que você não percebe</h3>
            </header>

            <p className="blog-excerpt">
              Gatos disfarçam incômodos. Veja sinais sutis — postura, rotina,
              apetite — e quando é hora de consultar.
            </p>

            <footer className="blog-meta">
              <time dateTime="2025-07">Jul 2025</time>
              <a href="#" className="blog-link">Ler artigo →</a>
            </footer>
          </article>
        </div>
      </section>

      {/* Contato (âncora do botão) */}
      <section id="contato" className="about" aria-label="Seção de contato">
        <h2>Fale Conosco</h2>
        <p>
          Atendimento 24h. Ligue para <strong>(16) 3703-8765</strong> ou envie mensagem no WhatsApp.
        </p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <a href="tel:+551637038765" className="btn-hero">Ligar Agora</a>
          <a
            href="https://wa.me/5516999999999?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20consulta%20para%20meu%20pet."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero ghost"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 Dr. Pet Clínica Veterinária | Desenvolvido com ❤️</p>
      </footer>
    </div>
  );
}
