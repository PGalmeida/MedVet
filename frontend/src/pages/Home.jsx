import { CalendarDays, Scissors, ShowerHead, Syringe, Plus } from "lucide-react";

export default function Home(){
  return (
    <div className="content">
      {/* Banner de destaque */}
      <section className="hero">
        <div>
          <div className="badge">Promo do dia</div>
          <h2 style={{marginTop:6, fontWeight:800}}>
            Banho & Tosa com <span style={{color:"#1d4ed8"}}>20% OFF</span> — hoje até 18h 🐾
          </h2>
          <p style={{color:"#6b7280", marginTop:4}}>Válido para agendamentos online realizados hoje.</p>
        </div>
        <a href="#" className="cta" onClick={(e)=>e.preventDefault()}>
          <Plus size={18}/> Agendar agora
        </a>
      </section>

      {/* Ações rápidas */}
      <div className="actions">
        <a href="#" className="btn" onClick={(e)=>e.preventDefault()}><CalendarDays size={16}/> Novo agendamento</a>
        <a href="#" className="btn" onClick={(e)=>e.preventDefault()}><ShowerHead size={16}/> Banho</a>
        <a href="#" className="btn" onClick={(e)=>e.preventDefault()}><Scissors size={16}/> Tosa</a>
        <a href="#" className="btn" onClick={(e)=>e.preventDefault()}><Syringe size={16}/> Vacina</a>
      </div>

      {/* Cards de KPIs */}
      <div className="cards">
        <div className="card"><h3>Atendimentos hoje</h3><div className="num">6</div></div>
        <div className="card"><h3>Pets cadastrados</h3><div className="num">128</div></div>
        <div className="card"><h3>Clientes ativos</h3><div className="num">94</div></div>
        <div className="card"><h3>Receita (mês)</h3><div className="num">R$ 12.340</div></div>
      </div>

      {/* Lista simples */}
      <div className="card">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <h3 style={{color:"#111827"}}>Próximos agendamentos</h3>
          <a href="#" className="btn" onClick={(e)=>e.preventDefault()}><CalendarDays size={16}/> Ver agenda</a>
        </div>
        <ul className="clean" style={{marginTop:6}}>
          <li><strong>10:00</strong> • Banho & Tosa — Mel (Shih-Tzu) • Maria S.</li>
          <li><strong>11:30</strong> • Consulta — Thor (SRD) • João P.</li>
          <li><strong>14:00</strong> • Vacina V10 — Nina (Labrador) • Carla M.</li>
        </ul>
      </div>
    </div>
  );
}
