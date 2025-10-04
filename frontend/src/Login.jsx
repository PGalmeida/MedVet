import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", login, "Senha:", senha);
  };

  return (
    <div className="container">
      <h2>Bem-vindo</h2>
      <form onSubmit={handleSubmit}>
        <label>CPF ou Email</label>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Digite seu CPF ou Email"
          required
        />

        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          required
        />

        <button type="submit">Entrar</button>
      </form>

      <div className="links">
        <button className="link-button">Esqueci a senha</button>
        <Link to="/cadastro" className="link-button">
          Não tem cadastro? Cadastre-se aqui
        </Link>
      </div>
    </div>
  );
}
