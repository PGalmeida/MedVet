import React from "react";
import "../pages/Home.css"; 
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="home-container">
      {/* Banner / Carousel */}
      <section id="inicio" className="hero">
        <Carousel />
        <div className="hero-text">
          <h1>
            Todo <span className="highlight">Cuidado</span> Que Seu Pet Merece
          </h1>
          <p>
            Mais do que uma clínica, oferecemos atendimento humanizado,
            moderno e com amor em cada consulta.
          </p>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="about">
        <h2>Sobre a Clínica</h2>
        <p>
          Somos especializados em cuidados veterinários completos em Franca-SP,
          com atendimento personalizado para cães e gatos. Nossa missão é
          garantir saúde, bem-estar e felicidade para cada pet.
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
        <h2>Nossos Serviços</h2>
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
          </div>
          <div className="plan-card highlight">
            <h3>Bem-Estar +</h3>
            <p className="price">R$ 89/mês</p>
            <ul>
              <li>2 consultas/ano</li>
              <li>Vacinas com 20% off</li>
              <li>Exames básicos c/ desconto</li>
            </ul>
          </div>
          <div className="plan-card">
            <h3>Premium 24h</h3>
            <p className="price">R$ 149/mês</p>
            <ul>
              <li>Consultas ilimitadas</li>
              <li>Descontos ampliados</li>
              <li>Prioridade em procedimentos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="blog">
        <h2>Dicas e Novidades</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <img src="/carousel/slide1.jpg" alt="vacinação" />
            <h3>Guia de Vacinação para Filhotes</h3>
            <p>Set 2025</p>
          </div>
          <div className="blog-card">
            <img src="/carousel/slide2.jpg" alt="alimentação natural" />
            <h3>Alimentação Natural: por onde começar?</h3>
            <p>Ago 2025</p>
          </div>
          <div className="blog-card">
            <img src="/carousel/slide3.jpg" alt="cuidados com gatos" />
            <h3>Sinais de dor em gatos que você não percebe</h3>
            <p>Jul 2025</p>
          </div>
        </div>
      </section>

      {/* Rodapé simples */}
      <footer className="footer">
        <p>© 2025 PetPrime Clínica Veterinária | Desenvolvido com ❤️</p>
      </footer>
    </div>
  );
}
