import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cadastro.css";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de cadastro:", form);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h1>Novo Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>CPF</label>
          <input
            type="text"
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            required
          />

          <label>Confirmar Senha</label>
          <input
            type="password"
            name="confirmarSenha"
            value={form.confirmarSenha}
            onChange={handleChange}
            required
          />

          <button type="submit">Cadastrar</button>
        </form>

        <div className="cadastro-links">
          <Link to="/" className="link-button">
            Já tem conta? Voltar ao login
          </Link>
        </div>
      </div>
    </div>
  );
}
