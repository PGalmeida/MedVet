import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", login, "Senha:", senha);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-aqua to-salmon">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-aqua mb-6">
          Bem-vindo
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CPF ou Email
            </label>
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-aqua"
              placeholder="Digite seu CPF ou Email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-salmon"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-aqua text-white py-2 rounded-lg hover:bg-teal-500 transition"
          >
            Entrar
          </button>
        </form>

          <div className="login-links">
          <button className="link-button">Esqueci a senha</button>
          <Link to="/cadastro" className="link-button">
            Não tem cadastro? Cadastre-se aqui
          </Link>
        </div>
      </div>
    </div>
  );
}
