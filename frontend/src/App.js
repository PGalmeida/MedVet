import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// ... outras imports

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* outras rotas: /agendar, /pets/novo, /prontuario */}
      </Routes>
    </BrowserRouter>
  );
}
