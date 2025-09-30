// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import "./Home.css";

const images = [
  "/carousel/slide1.jpg",
  "/carousel/slide2.jpg",
  "/carousel/slide3.jpg",
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Header com logo */}
      <header className="topbar">
        <div className="brand">
          <img
            src="/logo.png"
            alt="PetPrime logo"
            className="brand-logo"
            draggable="false"
          />
          <span className="brand-name">PetPrime</span>
        </div>

        <nav className="topnav">
          <a href="#produtos">Produtos</a>
          <a href="#servicos">Serviços</a>
          <a href="#endereco">Endereço</a>
        </nav>
      </header>

      {/* Seção de Boas-vindas */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            PetShop <span className="highlight">Franca</span>
          </h1>
          <p>
            Bem-vindo à <strong>PetPrime</strong> — encontre serviços, produtos
            e promoções para seu pet. Alegria, cuidado e amor em cada
            atendimento!
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Ver Produtos 🛍️</button>
            <button className="btn-secondary">Agendar Serviço 🐾</button>
          </div>
        </div>

        {/* Carrossel */}
        <div className="carousel">
          <img src={images[current]} alt="Carrossel PetShop" />
          <div className="indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={index === current ? "active" : ""}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Endereço */}
      <section className="endereco" id="endereco">
        <h3>📍 Nosso Endereço</h3>
        <p>Av. Dr. Ismael Alonso Y Alonso, 450 — Franca / SP</p>
        <button
          className="btn-maps"
          onClick={() => window.open("https://maps.google.com", "_blank")}
        >
          Ver no Google Maps
        </button>
      </section>

      {/* Destaques */}
      <section className="destaques" id="produtos">
        <h2>Destaques da Semana</h2>
        <div className="cards">
          <div className="card">
            <img src="/produtos/racao.jpg" alt="Ração" />
            <h4>Ração Premium</h4>
            <p>Nutrição completa e saborosa para cães e gatos.</p>
            <button>Adicionar 🐕</button>
          </div>

          <div className="card" id="servicos">
            <img src="/servicos/banho.jpg" alt="Banho e Tosa" />
            <h4>Banho e Tosa</h4>
            <p>Cuide do seu pet com os melhores profissionais!</p>
            <button>Agendar ✂️</button>
          </div>

          <div className="card">
            <img src="/clientes/depoimento.jpg" alt="Cliente feliz" />
            <h4>Maria & Nina</h4>
            <p>“Atendimento incrível! Minha Nina amou o banho.”</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img
              src="/logo.png"
              alt="PetPrime logo"
              className="brand-logo small"
              draggable="false"
            />
            <h4>PetPrime</h4>
            <p>Seu pet feliz é a nossa missão 🐶❤️</p>
          </div>

          <div>
            <h5>Navegação</h5>
            <ul>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#endereco">Endereço</a></li>
            </ul>
          </div>

          <div>
            <h5>Siga-nos</h5>
            <div className="socials">
              <span>📘</span>
              <span>📷</span>
              <span>🐦</span>
            </div>
          </div>
        </div>
        <p className="footer-bottom">
          © 2025 PetPrime — Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Home;
