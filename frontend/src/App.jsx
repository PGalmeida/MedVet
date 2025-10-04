import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./pages/Cadastro";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
