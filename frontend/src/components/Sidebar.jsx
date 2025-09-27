export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-row">
        {/* Logo */}
        <a href="/" className="logo" onClick={(e)=>e.preventDefault()}>
          <span>Pet<span className="logo-accent">Shop</span></span>
        </a>

        {/* Busca */}
        <form className="search" onSubmit={(e)=>e.preventDefault()}>
          <input placeholder="O que seu pet precisa?" />
          <button type="submit">Buscar</button>
        </form>

        {/* Ações (icones simples em texto por enquanto) */}
        <nav className="header-actions">
          <a href="#" onClick={(e)=>e.preventDefault()}>📞</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>❤️</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>🛒</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>Entrar</a>
        </nav>
      </div>

      {/* Menu de categorias */}
      <div className="header-nav">
        <div className="container categories">
          <a href="#" onClick={(e)=>e.preventDefault()}>Cachorro</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>Gato</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>Pássaro</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>Peixe</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>Outros Pets</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>Casa e Jardim</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>Promoções</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>Serviços</a>
          <a href="#" onClick={(e)=>e.preventDefault()}>Assinatura</a>
        </div>
      </div>
    </header>
  );
}
