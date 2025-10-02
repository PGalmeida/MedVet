import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Faixa superior de informações */}
      <div className="info-bar">
        <div className="container info-wrap">
          <div className="info-left">
            <span className="info-item">
              📍 Av. Major Nicácio, 2433 — Bairro São José — CEP 14401-135
            </span>
          </div>
          <div className="info-right">
            <a href="tel:+551637038765" className="info-link">📞 (16) 3703-8765</a>
          </div>
        </div>
      </div>

      {/* Barra principal */}
      <div className="header-bar">
        <div className="container header-container">
          {/* Logo (sem texto ao lado) */}
          <a href="#inicio" className="logo" aria-label="Ir para início">
            <img src="/logo.png" alt="Logo Dr. Pet" />
          </a>

          {/* Menu central */}
          <nav className="nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#planos">Planos</a>
            <a href="#blog">Blog</a>
          </nav>

          {/* Ações rápidas */}
          
            <div className="login-area">
          <a href="/login" className="btn-login">Entrar</a>
        </div>
        </div>
      </div>
    </header>
  );
}
