import React, { useMemo, useState } from "react";
import "./Dashboard.css";

export default function Dashboard() {
  // --- Mock de dados (troque por sua API depois) ---
  const [user] = useState({ nome: "Dra. Ana", clinica: "Clínica MedVet" });

  const [pets] = useState([
    { id: 1, nome: "Toby", especie: "Cão", porte: "Médio", castrado: true, alerta: "Vermífugo em 7 dias" },
    { id: 2, nome: "Luna", especie: "Gato", porte: "Pequeno", castrado: false, alerta: "Vacina V3 atrasada" },
    { id: 3, nome: "Nina", especie: "Cão", porte: "Pequeno", castrado: true },
  ]);

  const [agendamentos] = useState([
    { id: 11, pet: "Toby", tutor: "Maria Laura", servico: "Consulta clínica", quando: "Hoje, 16:00", status: "Confirmado" },
    { id: 12, pet: "Luna", tutor: "João V.", servico: "Vacinação V3", quando: "Amanhã, 10:30", status: "Pendente" },
    { id: 13, pet: "Nina", tutor: "Sabrina", servico: "Retorno pós-op", quando: "Qui, 14:00", status: "Confirmado" },
  ]);

  const lembretes = useMemo(() => [
    { id: 21, texto: "Luna: Vacina V3 atrasada (7 dias)", tipo: "alto" },
    { id: 22, texto: "Toby: Vermífugo em 7 dias", tipo: "medio" },
    { id: 23, texto: "Revisar estoque de seringas 3ml", tipo: "baixo" },
  ], []);

  // --- KPIs simples (exemplo) ---
  const proximo = agendamentos?.[0];
  const kpis = [
    { id: "k1", titulo: "Próximo agendamento", valor: proximo ? `${proximo.pet} — ${proximo.quando}` : "Sem agendamentos", subtitulo: proximo?.servico || "" },
    { id: "k2", titulo: "Pets cadastrados", valor: String(pets.length), subtitulo: "Gerencie fichas e prontuários" },
    { id: "k3", titulo: "Pendências de vacina", valor: String(lembretes.filter(l => l.texto.toLowerCase().includes("vacina")).length), subtitulo: "Acompanhe lembretes" },
    { id: "k4", titulo: "Agendamentos (semana)", valor: String(agendamentos.length), subtitulo: "Calendário da clínica" },
  ];

  // --- Ações rápidas (substitua pelos seus handlers/rotas) ---
  function irAgendar() { alert("Ir para: /agendar"); }
  function irCadastrarPet() { alert("Ir para: /pets/novo"); }
  function irProntuario() { alert("Ir para: /prontuario"); }
  function emitirRecibo() { alert("Emitir recibo (exemplo)"); }

  return (
    <div className="dash-wrap">
      {/* Topbar */}
      <header className="dash-topbar" role="navigation" aria-label="Barra superior">
        <div className="brand">
          <div className="logo-mark" aria-hidden>MV</div>
          <div className="brand-meta">
            <strong>{user.clinica}</strong>
            <span>Bem-vinda, {user.nome}</span>
          </div>
        </div>

        <div className="top-actions">
          <div className="search">
            <input type="search" placeholder="Buscar pet, tutor, receita..." aria-label="Buscar" />
            <button className="btn btn-ghost" onClick={()=>alert("Buscar...")}>Buscar</button>
          </div>
          <button className="btn btn-outline" onClick={()=>alert("Notificações")}>Notificações</button>
          <button className="avatar" title="Perfil" onClick={()=>alert("Perfil / Sair")}>
            {user.nome?.slice(0,1)}
          </button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="dash-main">
        {/* KPIs */}
        <section className="grid kpi-grid" aria-label="Indicadores">
          {kpis.map(k => (
            <article className="card kpi" key={k.id}>
              <div className="kpi-title">{k.titulo}</div>
              <div className="kpi-value">{k.valor}</div>
              <div className="kpi-sub">{k.subtitulo}</div>
            </article>
          ))}
        </section>

        {/* Ações rápidas */}
        <section className="quick-actions">
          <h2 className="section-title">Ações rápidas</h2>
          <div className="grid qa-grid">
            <button className="qa-btn" onClick={irAgendar}>
              <span className="qa-icon" aria-hidden>📅</span>
              Agendar consulta
            </button>
            <button className="qa-btn" onClick={irCadastrarPet}>
              <span className="qa-icon" aria-hidden>➕</span>
              Cadastrar pet
            </button>
            <button className="qa-btn" onClick={irProntuario}>
              <span className="qa-icon" aria-hidden>📄</span>
              Ver prontuário
            </button>
            <button className="qa-btn" onClick={emitirRecibo}>
              <span className="qa-icon" aria-hidden>🧾</span>
              Emitir recibo
            </button>
          </div>
        </section>

        <div className="grid two-col">
          {/* Próximos agendamentos */}
          <section className="card" aria-label="Próximos agendamentos">
            <div className="card-header">
              <h2>Próximos agendamentos</h2>
              <button className="btn btn-ghost" onClick={()=>alert("Ver agenda completa")}>Ver agenda</button>
            </div>
            <ul className="list">
              {agendamentos.map(a => (
                <li className="list-row" key={a.id}>
                  <div className="list-main">
                    <div className="list-title">{a.servico}</div>
                    <div className="list-sub">{a.pet} — Tutor(a): {a.tutor}</div>
                  </div>
                  <div className="badge">{a.quando}</div>
                  <span className={`pill ${a.status === "Confirmado" ? "ok" : "warn"}`}>{a.status}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Lembretes */}
          <section className="card" aria-label="Lembretes e vacinas">
            <div className="card-header">
              <h2>Lembretes</h2>
              <button className="btn btn-ghost" onClick={()=>alert("Configurar lembretes")}>Configurar</button>
            </div>
            <ul className="list">
              {lembretes.map(l => (
                <li className="list-row" key={l.id}>
                  <div className="dot" data-nivel={l.tipo} aria-hidden />
                  <div className="list-main">
                    <div className="list-title">{l.texto}</div>
                    <div className="list-sub">Canal: Email/WhatsApp</div>
                  </div>
                  <button className="btn btn-pill" onClick={()=>alert("Marcar como resolvido")}>Concluir</button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Pets */}
        <section className="card" aria-label="Pets cadastrados">
          <div className="card-header">
            <h2>Pets cadastrados</h2>
            <button className="btn btn-ghost" onClick={irCadastrarPet}>Novo pet</button>
          </div>
          <div className="grid pets-grid">
            {pets.map(p => (
              <article className="pet-card" key={p.id}>
                <div className="pet-avatar" aria-hidden>{p.nome.slice(0,1)}</div>
                <div className="pet-meta">
                  <div className="pet-title">{p.nome}</div>
                  <div className="pet-sub">{p.especie} • {p.porte}{p.castrado ? " • Castrado" : ""}</div>
                  {p.alerta && <div className="pet-alert">{p.alerta}</div>}
                </div>
                <div className="pet-actions">
                  <button className="btn btn-small" onClick={()=>alert(`Abrir ${p.nome}`)}>Abrir</button>
                  <button className="btn btn-small btn-outline" onClick={()=>alert(`Agendar para ${p.nome}`)}>Agendar</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Rodapé simples */}
        <footer className="dash-footer">
          © {new Date().getFullYear()} {user.clinica}. Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
}
