import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/Home/home";
import Cadastro from "./modules/cadastro/cadastro";
import NotFound from "./modules/error/NotFound";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cadastro />} path="/cadastro" />
        <Route element={<NotFound/>} path="*"/>
      </Routes>
    </BrowserRouter>
  );
}
