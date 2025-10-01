import React from "react";
import "./Header.css"; // você pode criar esse CSS ou mover estilos pro Home.css

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <span>PetPrime</span>
        </div>

        {/* Menu */}
        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#planos">Planos</a>
          <a href="#blog">Blog</a>
        </nav>

        {/* Botões de ação (exemplo telefone e WhatsApp) */}
        <div className="actions">
          <a href="tel:+5516999999999" className="btn-action">📞</a>
          <a
            href="https://wa.me/5516999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action"
          >
            💬
          </a>
        </div>
      </div>
    </header>
  );
}
