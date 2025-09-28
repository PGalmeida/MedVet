// src/components/Header.jsx
export default function Header() {
  return (
    <header style={{
      background: "#fff",
      borderBottom: "1px solid #e5e7eb",
      position: "sticky",
      top: 0,
      zIndex: 20
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: 16
      }}>
        <div style={{ fontWeight: 800, fontSize: 22 }}>
          Pet<span style={{ color: "#1e40af" }}>Shop</span>
        </div>

        <div style={{ flex: 1 }}>
          <input
            aria-label="search"
            placeholder="O que seu pet precisa?"
            style={{
              width: "100%",
              height: 40,
              borderRadius: 10,
              border: "1px solid #e5e7eb",
              padding: "8px 12px"
            }}
          />
        </div>

        <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button aria-label="telefone" style={{ height: 36, borderRadius: 8 }}>📞</button>
          <button aria-label="favoritos" style={{ height: 36, borderRadius: 8 }}>❤️</button>
          <button aria-label="carrinho" style={{ height: 36, borderRadius: 8 }}>🛒</button>
          <a href="/login" style={{ textDecoration: "none", fontWeight: 700 }}>Entrar</a>
        </nav>
      </div>

      {/* categorias simples */}
      <div style={{ borderTop: "1px solid #e5e7eb", background: "#fff" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "8px 16px",
          display: "flex",
          gap: 18,
          alignItems: "center",
          height: 44
        }}>
          <a href="/categoria/cachorro" style={{ textDecoration: "none", fontWeight: 600 }}>Cachorro</a>
          <a href="/categoria/gato" style={{ textDecoration: "none", fontWeight: 600 }}>Gato</a>
          <a href="/promocoes" style={{ textDecoration: "none", fontWeight: 600 }}>Promoções</a>
          <a href="/servicos" style={{ textDecoration: "none", fontWeight: 600 }}>Serviços</a>
        </div>
      </div>
    </header>
  );
}
